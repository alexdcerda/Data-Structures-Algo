
class HashMap {
    constructor(initialCapacity = 16, loadFactor = 75) {
        this.capacity = initialCapacity 
        this.loadFactor = loadFactor
        this.size = 0

        // buckets will be arrays or empty arrays for collisions
        this.buckets = new Array(this.capacity).fill(null).map(() => [])
    }
    hash(key) {
        let hashCode = 0
        const primeNumber = 32
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return Math.abs(hashCode) % this.capacity
    }
    // add and update key values
    set(key, value) {
        const index = this.hash(key)
        const bucket = this.buckets[index]

        // checkn if key exists and updtes its value
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, existingValue] = bucket[i]
            if (existingKey === key) {
                bucket[i][1] = value
            }
        }
        // if key not found add new key value pair
        bucket.push([key, value])
        this.size++

        // check if load factor needs to be increased
        if (this.size / this.capacity > this.loadFactor) {
            this.resize()
        }
    }
    // resize and rehash all key value pairs
    resize() {
        const oldBucket = this.buckets
        this.capacity *= 2
        this.buckets = new Array(this.capacity).fill(null).map(() => [])
        // reset size
        this.size = 0
    }
    // rehash all key-value pairs from the old buckets into the new buckets
    

}
