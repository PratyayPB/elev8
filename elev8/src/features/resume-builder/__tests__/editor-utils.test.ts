import assert from "node:assert";
import { moveUp, moveDown, generateEntryId } from "../utils/editor-utils";

export async function runEditorUtilsTests() {
  console.log("Running editor utils tests...");

  // Test 1: generateEntryId generates stable looking IDs
  const id1 = generateEntryId("edu");
  assert.ok(id1.startsWith("edu_"));
  const id2 = generateEntryId("edu");
  assert.notStrictEqual(id1, id2);

  // Test 2: moveUp reorders correctly
  const items = [
    { id: "1", val: "A" },
    { id: "2", val: "B" },
    { id: "3", val: "C" },
  ];

  // Moving item with ID "2" up
  const movedUp2 = moveUp(items, "2");
  assert.deepStrictEqual(movedUp2, [
    { id: "2", val: "B" },
    { id: "1", val: "A" },
    { id: "3", val: "C" },
  ]);

  // Moving first item up does nothing
  const movedUpFirst = moveUp(items, "1");
  assert.deepStrictEqual(movedUpFirst, items);

  // Moving non-existent item does nothing
  const movedUpNonExistent = moveUp(items, "99");
  assert.deepStrictEqual(movedUpNonExistent, items);

  // Test 3: moveDown reorders correctly
  // Moving item with ID "2" down
  const movedDown2 = moveDown(items, "2");
  assert.deepStrictEqual(movedDown2, [
    { id: "1", val: "A" },
    { id: "3", val: "C" },
    { id: "2", val: "B" },
  ]);

  // Moving last item down does nothing
  const movedDownLast = moveDown(items, "3");
  assert.deepStrictEqual(movedDownLast, items);

  // Moving non-existent item does nothing
  const movedDownNonExistent = moveDown(items, "99");
  assert.deepStrictEqual(movedDownNonExistent, items);

  console.log("All editor utils tests passed!");
}

if (require.main === module) {
  runEditorUtilsTests().catch((err) => {
    console.error("Test failure:", err);
    process.exit(1);
  });
}
