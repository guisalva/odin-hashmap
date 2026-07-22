import { LinkedList } from "./linked-lists";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (!this.buckets[bucketIndex]) {
      const list = new LinkedList();

      list.append(key, value);

      this.buckets[bucketIndex] = list;
      this.size++;
      return;
    }

    const updated = this.buckets[bucketIndex].update(key, value);

    if (!updated) {
      this.buckets[bucketIndex].append(key, value);
      this.size++;
    }
  }
}
