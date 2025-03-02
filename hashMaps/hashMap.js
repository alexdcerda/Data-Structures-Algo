class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.size = 0;

    // buckets will be arrays or empty arrays for collisions
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 32;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return Math.abs(hashCode) % this.capacity;
  }
  // add and update key values
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // checkn if key exists and updtes its value
    for (let i = 0; i < bucket.length; i++) {
      const [existingKey, existingValue] = bucket[i];
      if (existingKey === key) {
        bucket[i][1] = value;
      }
    }
    // if key not found add new key value pair
    bucket.push([key, value]);
    this.size++;

    // check if load factor needs to be increased
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey, value] = buckets[i];
      if (existingKey === key) {
        return value;
      }
    }
    return null;
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < this.buckets.length; i++) {
      const [existingKey] = buckets[i];
      if (existingKey === key) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = buckets[i];
      if (existingKey === key) {
        bucket.splice(i, 1);
        this.size;
        return true;
      }
    }
    return false;
  }
  clear() {
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }
  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        allKeys.push(key);
      }
    }
    return allKeys;
  }
  values() {
    const allValues = [];
    for (const bucket of this.buckets) {
      for (const [value] of bucket) {
        allValues.push(value);
      }
    }
    return allValues;
  }
  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        allEntries.push([key, value]);
      }
    }
    return allEntries;
  }
  // resize and rehash all key value pairs
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    // reset size
    this.size = 0;

    // rehash all key-value pairs from the old buckets into the new buckets
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}
export default HashMap;