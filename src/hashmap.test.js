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

describe("testing method `length`", () => {
  test("should return the number of stored keys in the hash map", () => {
    const hashMap = new HashMap();

    expect(hashMap.length()).toBe(0);

    hashMap.set("John", 25);
    hashMap.set("Ron", 21);
    hashMap.set("Harry", 30);

    expect(hashMap.length()).toBe(3);
  });
});

describe("testing method `clear`", () => {
  test("should clean the hash map", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);
    hashMap.set("Ron", 21);
    hashMap.set("Harry", 30);

    hashMap.clear();

    expect(hashMap.size).toBe(0);
  });
});

describe("testing method `keys`", () => {
  test("should return an array of all the keys of the hash map", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);
    hashMap.set("Ron", 21);
    hashMap.set("Harry", 30);

    const keys = hashMap.keys();

    expect(keys).toContain("John");
    expect(keys).toContain("Ron");
    expect(keys).toContain("Harry");
    expect(keys).toHaveLength(3);
  });
});

describe("testing method `values`", () => {
  test("should return an array of all the values of the hash map", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);
    hashMap.set("Ron", 21);
    hashMap.set("Harry", 30);

    const keys = hashMap.values();

    expect(keys).toContain(25);
    expect(keys).toContain(21);
    expect(keys).toContain(30);
    expect(keys).toHaveLength(3);
  });
});

describe("testing method `entries`", () => {
  test("should return an array of all the pairs of key and value of the hash map", () => {
    const hashMap = new HashMap();

    hashMap.set("John", 25);
    hashMap.set("Ron", 21);
    hashMap.set("Harry", 30);

    const pairs = hashMap.entries();

    expect(pairs).toContainEqual(["John", 25]);
    expect(pairs).toContainEqual(["Ron", 21]);
    expect(pairs).toContainEqual(["Harry", 30]);
    expect(pairs).toHaveLength(3);
  });
});

describe("testing method `resize`", () => {
  test("should double the capacity of the hash map", () => {
    const hashMap = new HashMap();

    expect(hashMap.capacity).toBe(16);

    hashMap.resize();

    expect(hashMap.capacity).toBe(32);
  });
});
