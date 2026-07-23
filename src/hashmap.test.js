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

describe("testing method `has`", () => {
  test("should return true if the given key exists", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.has("John")).toBe(true);
  });

  test("should return false if the the given key is not found", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.has("Joe")).toBe(false);
  });
});

describe("testing method `remove`", () => {
  test("should remove the entry with the given key and return true", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.has("John")).toBe(true);
    expect(hashMap.remove("John")).toBe(true);
    expect(hashMap.has("John")).toBe(false);
  });

  test("should return false if a entry with the the given key is not found", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);

    expect(hashMap.remove("Joe")).toBe(false);
  });
});
