// Function as an Argument

function greetUser(name, callback) {
	console.log(`Hello,${name}`);
	callback();
}
function sayGoodbye() {
	console.log("Goodbye!");
}
// greetUser("Alice", sayGoodbye);

// Built in HOF

// map()
// filter()
// reduce()
// forEach()
// find()
// sort()

// map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => {
	return num * 2;
});
// console.log(doubled);

//  filter()
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((num) => {
	return num % 2 === 0;
});
// console.log(evenNumbers);

// reduce()
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((total, current) => {
	return total + current;
}, 0);
// console.log(sum);

// forEach()
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach((fruit) => {
// 	console.log(fruit);
// });

// find()
const users = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];
const user = users.find((user) => user.age >= 30);
const user2 = users.filter((user) => user.age >= 30);
// console.log(user);
// console.log(user2);

// sort()
const numbers4 = [3, 1, 4, 2];
numbers4.sort((a, b) => a - b); // 6 6
// console.log(numbers4);

// HOF : Returning a Function
function multiplier(factor) {
	return function (num) {
		return num * factor;
	};
}
const double = multiplier(2);
// console.log(double(5));

// Custom Higher Order Function
function processArray(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i], i);
	}
}
processArray(["A", "B", "C"], (item, index) => {
	console.log(`Index${index}:${item}`);
});
