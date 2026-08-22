import { useRouter } from "next/navigation";
import { RecommendationData } from "../types";

export function useRecommendationRouter() {
  const router = useRouter();

  const getRouteForRecommendation = (recommendation: RecommendationData) => {
    const { type, refId, context } = recommendation;

    if (refId === "ROADMAP") {
      return {
        label: "Generate Roadmap",
        href: context?.targetRole
          ? `/dashboard/roadmaps/new?role=${encodeURIComponent(context.targetRole)}`
          : "/dashboard/roadmaps/new",
      };
    }
    if (refId === "RESUME_SCORE") {
      return {
        label: "Score Resume",
        href: "/dashboard/resumes/new",
      };
    }
    if (refId === "RESUME_BUILD") {
      return {
        label: "Build Resume",
        href: "/dashboard/resumes/builder/new",
      };
    }
    if (refId === "INTERVIEW_PRACTICE") {
      return {
        label: "Start Interview",
        href: context?.topics
          ? `/dashboard/interviews/new?topics=${encodeURIComponent(context.topics.join(","))}`
          : "/dashboard/interviews/new",
      };
    }
    if (refId === "TAKE_CAREER_ASSESSMENT") {
      return {
        label: "Take Assessment",
        href: "/dashboard/career-assessment",
      };
    }
    if (refId === "COMPLETE_PROFILE" || type === "PROFILE_CLARIFICATION") {
      return {
        label: "Complete Profile",
        href: "/dashboard/profile",
      };
    }
    if (type === "SKILL") {
      return {
        label: `Learn ${refId}`,
        href: `/dashboard/roadmaps/new?skill=${encodeURIComponent(refId)}`,
      };
    }

    return {
      label: "Explore Action",
      href: "/dashboard",
    };
  };

  const routeToRecommendation = (recommendation: RecommendationData) => {
    const route = getRouteForRecommendation(recommendation);
    router.push(route.href);
  };

  return {
    getRouteForRecommendation,
    routeToRecommendation,
  };
}
