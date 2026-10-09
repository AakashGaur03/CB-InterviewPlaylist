// Same Output for Same Input
// There should be no Side Effect of the Function

function add(a, b) {
	return a + b;
}
// console.log(add(3, 5)); // 8
// console.log(add(3, 5)); // 8

let total = 0;
function addToTotal(num) {
	total += num;
	return total;
}

// console.log(addToTotal(5)); // 5
// console.log(addToTotal(5)); // 10

// let user = {
// 	id: 2,
// 	age: 35,
// };

// function updateUser(user) {
// 	user.age = 30;
// 	return user;
// }

// function updateUserPurely(user) {
// 	return {
// 		...user,
// 		age: 30,
// 	};
// }

// function calculateDiscount(price, discount) {
// 	return price - (price * discount) / 100;
// }

// const user = {
// 	name: "Alice",
// 	age: 25,
// };
// user.age = 26;
// console.log(user);

// const updatedUser = {
// 	...user,
// 	age: 26,
// };

// console.log(user);
// console.log(updatedUser);

// user.name = "Bob";

const numbers = [1, 2, 3, 4];
// numbers.push(5);
const newNumbers = [...numbers, 5];

// Object.freeze()

const person = {
	name: "Alice",
	age: 25,
};
Object.freeze(person);
person.age = 30;
console.log(person.age);

const user = {
	name: "Alice",
	age: 25,
};

function updateAge(user, newAge) {
	return {
		...user,
		age: newAge,
	};
}
const updatedUser2 = updateAge(user, 30);
console.log(user);
console.log(updatedUser2);
