// function greet() {
// 	return "Hello";
// }
// ES6
// () => {}

// Implicit
// const greet = () => "Hello";
// const sum = (a, b) => a + b;
// const sum = a => a * a;

// console.log(greet());
// console.log(sum(4, 5));

const user = () => ({
	name: "John",
});
console.log(user());

// Difference

// Syntax
// AF -> Shorter
// RF -> Verbose

// Hoisting
// RF -> Completely Hoist
// AF -> Hoist

// Argument Object
// function sum() {
// 	console.log(arguments);
// 	const args = Array.from(arguments);
// 	console.log(args);
// }

const sum = (...args) => {
	console.log(args);
};
sum(3, 4, 5, 6, 7);
