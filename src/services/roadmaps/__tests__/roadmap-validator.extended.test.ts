/* eslint-disable @typescript-eslint/no-explicit-any */
import assert from "node:assert";
import { RoadmapValidator } from "../roadmap-validator";

export async function runExtendedRoadmapValidatorTests() {
  console.log("Running Extended Roadmap Validator & Graph Integrity Unit Tests...\n");

  const validBaseRoadmap = {
    metadata: {
      title: "Backend Engineer Roadmap",
      role: "Backend Engineer",
      experienceLevel: "Beginner" as const,
      estimatedDuration: "12 weeks",
      generatedAt: new Date().toISOString(),
    },
    summary: "Comprehensive guide to becoming a backend developer.",
    projects: [
      {
        id: "proj_1",
        title: "RESTful API",
        description: "Build a CRUD REST API with authentication",
        difficulty: "Beginner" as const,
        skillsRequired: ["Node.js", "Express", "PostgreSQL"],
      },
    ],
    resources: [
      {
        id: "res_1",
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        type: "documentation",
        isFree: true,
      },
    ],
    careerTips: [
      {
        id: "tip_1",
        category: "Portfolio",
        tip: "Showcase deployed code with good documentation.",
      },
    ],
    logicalGraph: {
      nodes: [
        { id: "node_1", title: "Git Basics", description: "Learn version control", type: "skill" },
        { id: "node_2", title: "JavaScript", description: "Core language features", type: "skill" },
        { id: "node_3", title: "Node.js", description: "Backend runtime", type: "skill" },
      ],
      edges: [
        { id: "edge_1_2", source: "node_1", target: "node_2" },
        { id: "edge_2_3", source: "node_2", target: "node_3" },
      ],
    },
  };

  // 1. Valid Minimal Roadmap
  console.log("1. Testing valid roadmap acceptance...");
  const validResult = RoadmapValidator.validate(validBaseRoadmap);
  assert.strictEqual(validResult.isValid, true, "Valid roadmap must pass validation");
  assert.strictEqual(validResult.errors.length, 0);
  assert.ok(validResult.data);
  console.log("✔ Valid roadmap passed.");

  // 2. Markdown Code Fence Stripping
  console.log("2. Testing markdown code fence stripping in raw JSON strings...");
  const fencedJson = "```json\n" + JSON.stringify(validBaseRoadmap) + "\n```";
  const fencedResult = RoadmapValidator.validate(fencedJson);
  assert.strictEqual(fencedResult.isValid, true, "Fenced JSON must be cleaned and parsed");
  console.log("✔ Fenced JSON passed.");

  // 3. Rejection of Empty Nodes
  console.log("3. Testing rejection of empty logicalGraph.nodes...");
  const emptyNodesRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: { nodes: [], edges: [] },
  };
  const emptyNodesResult = RoadmapValidator.validate(emptyNodesRoadmap);
  assert.strictEqual(emptyNodesResult.isValid, false);
  assert.ok(emptyNodesResult.errors.some((e) => e.includes("node")));
  console.log("✔ Empty nodes correctly rejected.");

  // 4. Rejection of Duplicate Node IDs
  console.log("4. Testing rejection of duplicate node IDs...");
  const dupNodeRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [
        { id: "same_id", title: "A", description: "Desc A", type: "skill" },
        { id: "same_id", title: "B", description: "Desc B", type: "skill" },
      ],
      edges: [],
    },
  };
  const dupNodeResult = RoadmapValidator.validate(dupNodeRoadmap);
  assert.strictEqual(dupNodeResult.isValid, false);
  assert.ok(dupNodeResult.errors.some((e) => e.includes('Duplicate node ID found: "same_id"')));
  console.log("✔ Duplicate node IDs correctly rejected.");

  // 5. Rejection of Duplicate Edge IDs
  console.log("5. Testing rejection of duplicate edge IDs...");
  const dupEdgeRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [
        { id: "node_1", title: "A", description: "Desc A", type: "skill" },
        { id: "node_2", title: "B", description: "Desc B", type: "skill" },
      ],
      edges: [
        { id: "edge_1", source: "node_1", target: "node_2" },
        { id: "edge_1", source: "node_1", target: "node_2" },
      ],
    },
  };
  const dupEdgeResult = RoadmapValidator.validate(dupEdgeRoadmap);
  assert.strictEqual(dupEdgeResult.isValid, false);
  assert.ok(dupEdgeResult.errors.some((e) => e.includes('Duplicate edge ID found: "edge_1"')));
  console.log("✔ Duplicate edge IDs correctly rejected.");

  // 6. Rejection of Missing Source Node Reference
  console.log("6. Testing rejection of edge with missing source node...");
  const missingSourceRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [{ id: "node_2", title: "B", description: "Desc B", type: "skill" }],
      edges: [{ id: "edge_1", source: "ghost_node", target: "node_2" }],
    },
  };
  const missingSourceResult = RoadmapValidator.validate(missingSourceRoadmap);
  assert.strictEqual(missingSourceResult.isValid, false);
  assert.ok(missingSourceResult.errors.some((e) => e.includes("missing source node ID")));
  console.log("✔ Missing source node reference correctly rejected.");

  // 7. Rejection of Missing Target Node Reference
  console.log("7. Testing rejection of edge with missing target node...");
  const missingTargetRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [{ id: "node_1", title: "A", description: "Desc A", type: "skill" }],
      edges: [{ id: "edge_1", source: "node_1", target: "ghost_node" }],
    },
  };
  const missingTargetResult = RoadmapValidator.validate(missingTargetRoadmap);
  assert.strictEqual(missingTargetResult.isValid, false);
  assert.ok(missingTargetResult.errors.some((e) => e.includes("missing target node ID")));
  console.log("✔ Missing target node reference correctly rejected.");

  // 8. Rejection of Circular Dependency (Cycle Detection)
  console.log("8. Testing circular dependency (cycle) detection...");
  const cyclicRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [
        { id: "node_A", title: "A", description: "Desc A", type: "skill" },
        { id: "node_B", title: "B", description: "Desc B", type: "skill" },
        { id: "node_C", title: "C", description: "Desc C", type: "skill" },
      ],
      edges: [
        { id: "e1", source: "node_A", target: "node_B" },
        { id: "e2", source: "node_B", target: "node_C" },
        { id: "e3", source: "node_C", target: "node_A" }, // Creates cycle A -> B -> C -> A
      ],
    },
  };
  const cyclicResult = RoadmapValidator.validate(cyclicRoadmap);
  assert.strictEqual(cyclicResult.isValid, false);
  assert.ok(cyclicResult.errors.some((e) => e.includes("Circular dependencies detected")));
  console.log("✔ Circular dependencies correctly detected and rejected.");

  // 9. Acceptance of Valid Branching & Merging DAG (Diamond graph)
  console.log("9. Testing valid DAG diamond shape (branching and converging)...");
  const diamondRoadmap = {
    ...validBaseRoadmap,
    logicalGraph: {
      nodes: [
        { id: "start", title: "Start", description: "Desc", type: "skill" },
        { id: "branch1", title: "Branch 1", description: "Desc", type: "skill" },
        { id: "branch2", title: "Branch 2", description: "Desc", type: "skill" },
        { id: "end", title: "End", description: "Desc", type: "skill" },
      ],
      edges: [
        { id: "e1", source: "start", target: "branch1" },
        { id: "e2", source: "start", target: "branch2" },
        { id: "e3", source: "branch1", target: "end" },
        { id: "e4", source: "branch2", target: "end" },
      ],
    },
  };
  const diamondResult = RoadmapValidator.validate(diamondRoadmap);
  assert.strictEqual(diamondResult.isValid, true);
  console.log("✔ Diamond DAG correctly validated without false-positive cycle.");

  // 10. Rejection of Invalid Experience Level Enum
  console.log("10. Testing rejection of invalid experience level enum...");
  const invalidEnumRoadmap = {
    ...validBaseRoadmap,
    metadata: {
      ...validBaseRoadmap.metadata,
      experienceLevel: "SUPER_EXPERT" as any,
    },
  };
  const invalidEnumResult = RoadmapValidator.validate(invalidEnumRoadmap);
  assert.strictEqual(invalidEnumResult.isValid, false);
  console.log("✔ Invalid experience level enum correctly rejected.");

  console.log("\n=========================================");
  console.log("All Extended Roadmap Validator tests passed!");
  console.log("=========================================\n");
}

runExtendedRoadmapValidatorTests().catch((err) => {
  console.error("Extended Roadmap Validator Test Failure:", err);
  process.exit(1);
});
