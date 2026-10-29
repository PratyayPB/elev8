import assert from "node:assert";
import { describe, it } from "node:test";
import { moveUp, moveDown, generateEntryId } from "../utils/editor-utils";

describe("Resume Editor Utils", () => {
  it("generates stable-looking prefixed IDs", () => {
    const id1 = generateEntryId("edu");
    assert.ok(id1.startsWith("edu_"));
    const id2 = generateEntryId("edu");
    assert.notStrictEqual(id1, id2);
  });

  it("moveUp reorders correctly", () => {
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
  });

  it("moveDown reorders correctly", () => {
    const items = [
      { id: "1", val: "A" },
      { id: "2", val: "B" },
      { id: "3", val: "C" },
    ];

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
  });
});
