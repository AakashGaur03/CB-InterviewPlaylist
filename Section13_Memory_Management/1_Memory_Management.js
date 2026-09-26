// // variables , objects, array

// // MEMORY ALLOCATION -> MEMORY USAGE -> MEMORY RECLAMATION

// // MEMORY ALLOCATION
// let age = 25;
// let user = {
// 	name: "Rahul",
// };

// // MEMORY USAGE
// console.log(age);
// console.log(user.name);
// user.name = "Rohit";

// // MEMORY RECLAMATION

// // Stack And Heap
// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10
// console.log(b); // 20

// let user1 = {
// 	name: "Alice",
// };
// let user2 = user1;
// user2.name = "Bob";
// console.log(user1);
// console.log(user2);

// Reachability

let user = {
	name: "Alice",
	address: {
		city: "Delhi",
	},
};

let user2 = user;
// user = null;
// user2 = null;

// Mark and Sweep

function createObjects() {
	let obj1 = {};
	let obj2 = {};
	obj1.ref = obj2;
	obj2.ref = obj1;
}
createObjects();

// Common Memory Leaks Example
// 1st Example

function createUser() {
	userData = {
		name: "Alice",
	};
}
createUser();

// 2nd Example
const interval = setInterval(() => {
	console.log("Running...");
}, 1000);
clearInterval(interval);

// 3rd Example
function handleClick() {
	console.log("Clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// 4th Cache
const cache = newMap();
function storeData(id, data) {
	cache.set(id, data);
}

// 5th Closure
function createHandler() {
	const hugeData = newArray(1000000).fill("data");
	return function () {
		console.log(hugeData[0]);
	};
}
let handler = createHandler();

handler = null;
