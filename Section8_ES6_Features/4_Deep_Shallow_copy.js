// const user1 = {
// 	name: "Rahul",
// 	age: 25,
// };

// const user2 = user1;
// user2.name = "Rohit";
// console.log(user1);
// console.log(user2);

// let a = 10;
// let b = a;
// b = 20;
// console.log(a);
// console.log(b);

// const user1 = {
// 	name: "Rahul",
// 	age: 25,
// 	address: {
// 		city: "Delhi",
// 		pincode: 110001,
// 	},
// };

// const user2 = { ...user1 };
// user2.name = "Rohit";
// user2.address.city = "Mumbai";
// console.log(user1);
// console.log(user2);

// user1
//    │
//    ▼
//   name: "Rahul",
//   address ─────────┐
//                    ▼
//               { city: "Delhi" }
//                    ▲
//                    │
// user2───────────────
//   name: "Rohit",

// Deep Copy
const user1 = {
	name: "Rahul",
	age: 25,
	address: {
		city: "Delhi",
		pincode: 110001,
	},
};

const user2 = structuredClone(user1);
user2.name = "Rohit";
user2.address.city = "Mumbai";
console.log(user1);
console.log(user2);

const user2 = JSON.parse(JSON.stringify(user1));
// Date, Map, Set , Functions
