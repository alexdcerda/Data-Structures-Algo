import HashMap from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Before overwriting:");
console.log("Entries:", test.entries());
console.log("Size:", test.size);
console.log("Capacity:", test.capacity);

test.set("banana", "green");
test.set("apple", "blue");
test.set("moon", "silver")

console.log("\nAfter overwriting:");
console.log("Entries:", test.entries());
console.log("Size:", test.size);
console.log("Capacity:", test.capacity);
