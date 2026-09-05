import {
  CareerExperienceLevel,
  SkillImportance,
  SkillProficiency,
} from "@prisma/client";
import { ProfileData } from "@/features/profile/types";
import {
  GapAnalysis,
  GapStatus,
  MatchedSkill,
  MissingSkill,
  UnderqualifiedSkill,
} from "../types";
import { IMPORTANCE_WEIGHTS, PROFICIENCY_ORDER } from "../constants";
import {
  normalizeSkillForLookup,
  resolveUserSkillsToCanonical,
} from "../utils/skill-normalizer";
import { RoleSkillMapService } from "./role-skillmap.service";

export interface CalculateGapParams {
  userSkills: Array<{ name: string; proficiency: SkillProficiency }>;
  requiredSkills: Array<{
    name: string;
    minimumProficiency: SkillProficiency;
    importance: SkillImportance;
    estimatedHours?: number | null;
  }>;
  targetRole: string;
}

export class SkillGapService {
  /**
   * Compares a user's proficiency level with a required proficiency level.
   */
  public static compareProficiency(
    userProficiency: SkillProficiency | undefined,
    requiredProficiency: SkillProficiency
  ): "MATCHED" | "UNDERQUALIFIED" | "MISSING" {
    if (!userProficiency) {
      return "MISSING";
    }

    const userVal = PROFICIENCY_ORDER[userProficiency] || 0;
    const requiredVal = PROFICIENCY_ORDER[requiredProficiency] || 0;

    if (userVal >= requiredVal) {
      return "MATCHED";
    }

    return "UNDERQUALIFIED";
  }

  /**
   * Pure calculation function: calculates weighted gap severity between 0.0 and 1.0.
   *
   * Formula (spec §19-20):
   * For each requirement:
   *   weight = IMPORTANCE_WEIGHTS[importance]
   *   MATCHED: deficit = 0
   *   UNDERQUALIFIED: deficit = (requiredLevel - userLevel) / requiredLevel
   *   MISSING: deficit = 1.0
   *   contribution = weight * deficit
   *
   * severity = clamp(sum(contribution) / sum(weight), 0.0, 1.0)
   */
  public static calculateSeverity(
    requiredSkills: Array<{
      minimumProficiency: SkillProficiency;
      importance: SkillImportance;
    }>,
    underqualifiedSkills: UnderqualifiedSkill[],
    missingSkills: MissingSkill[]
  ): number {
    if (requiredSkills.length === 0) return 0;

    let totalWeight = 0;
    let totalDeficit = 0;

    const underqualifiedMap = new Map<string, number>();
    for (const u of underqualifiedSkills) {
      underqualifiedMap.set(normalizeSkillForLookup(u.name), u.proficiencyDeficit);
    }

    const missingSet = new Set<string>();
    for (const m of missingSkills) {
      missingSet.add(normalizeSkillForLookup(m.name));
    }

    for (const req of requiredSkills) {
      const weight = IMPORTANCE_WEIGHTS[req.importance] || 1;
      totalWeight += weight;

      const normName = normalizeSkillForLookup((req as any).name || "");

      if (missingSet.has(normName)) {
        totalDeficit += weight * 1.0;
      } else if (underqualifiedMap.has(normName)) {
        const deficit = underqualifiedMap.get(normName) || 0;
        totalDeficit += weight * deficit;
      }
      // MATCHED has deficit 0
    }

    if (totalWeight === 0) return 0;

    const rawSeverity = totalDeficit / totalWeight;
    // Round to 2 decimal places and clamp
    return Math.max(0, Math.min(1, Math.round(rawSeverity * 100) / 100));
  }

  /**
   * Pure function: calculates skill gap analysis without side-effects or database queries.
   */
  public static calculateGap(params: {
    userSkills: Array<{ name: string; proficiency: SkillProficiency }>;
    requiredSkills: Array<{
      name: string;
      minimumProficiency: SkillProficiency;
      importance: SkillImportance;
      estimatedHours?: number | null;
    }>;
    targetRole: string;
  }): GapAnalysis {
    const { userSkills, requiredSkills, targetRole } = params;

    const userSkillMap = resolveUserSkillsToCanonical(userSkills);
    const matchedSkills: MatchedSkill[] = [];
    const underqualifiedSkills: UnderqualifiedSkill[] = [];
    const missingSkills: MissingSkill[] = [];
    const matchedUserSkillKeys = new Set<string>();

    let estimatedLearningHours = 0;

    for (const req of requiredSkills) {
      const key = normalizeSkillForLookup(req.name);
      const userSkill = userSkillMap.get(key);

      const comparison = this.compareProficiency(
        userSkill?.proficiency,
        req.minimumProficiency
      );

      if (comparison === "MATCHED") {
        matchedSkills.push({
          name: req.name,
          userProficiency: userSkill!.proficiency,
          requiredProficiency: req.minimumProficiency,
        });
        matchedUserSkillKeys.add(key);
      } else if (comparison === "UNDERQUALIFIED") {
        const userLevel = PROFICIENCY_ORDER[userSkill!.proficiency];
        const reqLevel = PROFICIENCY_ORDER[req.minimumProficiency];
        const deficit = Math.round(((reqLevel - userLevel) / reqLevel) * 100) / 100;

        underqualifiedSkills.push({
          name: req.name,
          userProficiency: userSkill!.proficiency,
          requiredProficiency: req.minimumProficiency,
          importance: req.importance,
          proficiencyDeficit: deficit,
          estimatedHours: req.estimatedHours || null,
        });
        matchedUserSkillKeys.add(key);

        if (req.estimatedHours) {
          estimatedLearningHours += req.estimatedHours;
        }
      } else {
        // MISSING
        missingSkills.push({
          name: req.name,
          requiredProficiency: req.minimumProficiency,
          importance: req.importance,
          estimatedHours: req.estimatedHours || null,
        });

        if (req.estimatedHours) {
          estimatedLearningHours += req.estimatedHours;
        }
      }
    }

    // Collect unmatched user skills (skills the user has that aren't part of role requirements)
    const unmatchedUserSkills: string[] = [];
    for (const u of userSkills) {
      const key = normalizeSkillForLookup(u.name);
      if (!matchedUserSkillKeys.has(key)) {
        unmatchedUserSkills.push(u.name);
      }
    }

    const severity = this.calculateSeverity(
      requiredSkills,
      underqualifiedSkills,
      missingSkills
    );

    return {
      status: "SUCCESS",
      targetRole,
      matchedSkills,
      underqualifiedSkills,
      missingSkills,
      unmatchedUserSkills,
      severity,
      estimatedLearningHours,
    };
  }

  /**
   * Sorts and returns the top skill gaps prioritized by importance and deficit (spec §40-41).
   *
   * Priority Ordering:
   * 1. CORE missing
   * 2. CORE underqualified (highest deficit first)
   * 3. IMPORTANT missing
   * 4. IMPORTANT underqualified (highest deficit first)
   * 5. SUPPORTING missing
   * 6. SUPPORTING underqualified (highest deficit first)
   */
  public static getTopSkillGaps(
    analysis: GapAnalysis,
    limit?: number
  ): Array<UnderqualifiedSkill | MissingSkill> {
    const gaps: Array<
      (UnderqualifiedSkill | MissingSkill) & {
        isMissing: boolean;
        sortPriority: number;
        deficitValue: number;
      }
    > = [];

    for (const m of analysis.missingSkills) {
      let priority = 0;
      if (m.importance === "CORE") priority = 6;
      else if (m.importance === "IMPORTANT") priority = 4;
      else priority = 2;

      gaps.push({
        ...m,
        isMissing: true,
        sortPriority: priority,
        deficitValue: 1.0,
      });
    }

    for (const u of analysis.underqualifiedSkills) {
      let priority = 0;
      if (u.importance === "CORE") priority = 5;
      else if (u.importance === "IMPORTANT") priority = 3;
      else priority = 1;

      gaps.push({
        ...u,
        isMissing: false,
        sortPriority: priority,
        deficitValue: u.proficiencyDeficit,
      });
    }

    gaps.sort((a, b) => {
      if (b.sortPriority !== a.sortPriority) {
        return b.sortPriority - a.sortPriority;
      }
      return b.deficitValue - a.deficitValue;
    });

    const result = gaps.map(({ isMissing, sortPriority, deficitValue, ...rest }) => rest);
    return limit && limit > 0 ? result.slice(0, limit) : result;
  }

  /**
   * Orchestrator: Calculates the skill gap analysis for a given user profile.
   * Resolves target role, queries RoleSkillProfile from DB, and produces GapAnalysis.
   */
  public static async calculateForProfile(
    profile: ProfileData
  ): Promise<GapAnalysis> {
    const targetRole = profile.careerGoals?.targetRole;
    const userSkills = (profile.skills || []).map((s) => ({
      name: s.name,
      proficiency: s.proficiency,
    }));

    // 1. No Target Role
    if (!targetRole || targetRole.trim() === "") {
      return {
        status: "NO_TARGET_ROLE",
        targetRole: null,
        matchedSkills: [],
        underqualifiedSkills: [],
        missingSkills: [],
        unmatchedUserSkills: userSkills.map((s) => s.name),
        severity: 0,
        estimatedLearningHours: 0,
      };
    }

    // 2. Resolve Role Alias
    const normalizedRole = RoleSkillMapService.resolveRole(targetRole);

    // 3. Query Database for RoleSkillProfile
    const roleProfile = await RoleSkillMapService.getRoleSkillProfile(
      normalizedRole
    );

    if (!roleProfile) {
      return {
        status: "ROLE_NOT_SUPPORTED",
        targetRole,
        matchedSkills: [],
        underqualifiedSkills: [],
        missingSkills: [],
        unmatchedUserSkills: userSkills.map((s) => s.name),
        severity: 0,
        estimatedLearningHours: 0,
      };
    }

    // 4. Perform pure deterministic calculation
    return this.calculateGap({
      userSkills,
      requiredSkills: roleProfile.skills,
      targetRole: roleProfile.role,
    });
  }
}
