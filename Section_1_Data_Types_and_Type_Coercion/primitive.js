let a = "Hello";
let b = a;
b = "World";
console.log(a);
console.log(b);

let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false

let id = Symbol("id");

let user = {
	name: "John",
	[id]: 123,
};

console.log(user[id]);

Number.MAX_SAFE_INTEGER;
console.log(Number.MAX_SAFE_INTEGER);

let bign = 9007199254740995n;

let d = Number(1n) + 1;
