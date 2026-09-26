// 1st Question Example
let user1 = {
	name: "Alice",
};

let user2 = user1;

user1 = null;

// 2nd Question Example
let obj1 = {};
let obj2 = {};

obj1.ref = obj2;
obj2.ref = obj1;

// 3rd Question Example

let user = {
	name: "Alice",
};

const map = new Map();
map.set(user, "Admin");

user = null;
