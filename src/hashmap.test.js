import { HashMap } from "./hashmap.js";

describe("testing method `set`", () => {
  test("should add first node to a empty bucket", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    const bucketIndex = hashMap.hash("John") % hashMap.capacity;

    expect(hashMap.buckets[bucketIndex].contains("John")).toBe(true);
  });
});

describe("testing method `get`", () => {
  test("should return the value assigned to the given key", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.get("John")).toBe(25);
  });

  test("should return null if the the given key is not found", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.get("Joe")).toBeNull();
  });
});
