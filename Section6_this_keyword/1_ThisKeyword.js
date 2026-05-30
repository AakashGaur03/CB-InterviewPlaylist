// console.log(this)
// console.log(this === module.exports)
// "use strict";

// Inside Regular Function
// function test() {
// 	console.log(this);
// }
// test();

// this Inside Object Method

// const user = {
// 	name: "Dave",
// 	greet() {
// 		console.log(this.name);
// 		console.log(this === user);
// 	},
// };

// // user.greet();
// const fn = user.greet;
// fn();

// Constructor Function and new keyword

// function Person(name) {
// 	this.name = name;
// }

// // const user1 = new Person("John");
// // console.log(user1.name);

// // const obj= {}
// // obj.name = "John"

// const user2 = Person("Doe");
// console.log(user2.name);

// this inside class Method

class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(this.name);
	}
}
const user3 = new Person("Nova");
user3.greet();
