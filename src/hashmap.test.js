import { HashMap } from "./hashmap.js";

describe("testing method `set`", () => {
  test("should add first node to a empty bucket", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    const bucketIndex = hashMap.hash("John") % hashMap.capacity;

    expect(hashMap.buckets[bucketIndex].contains("John")).toBe(true);
  });
});
