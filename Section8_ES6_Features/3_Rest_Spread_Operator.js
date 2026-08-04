// function sum(...numbers) {
// 	console.log(numbers);
// }

// const numbers = [10, 20, 30];
// const copy = [...numbers];

// Rest Operator

// function sum() {
// 	console.log(arguments);
// 	console.log(Array.isArray(arguments));
// 	const nums = Array.from(arguments);
// 	nums.forEach((num) => console.log(num));
// }

// function sum2(...numbers) {
// 	console.log(numbers);
// 	numbers.forEach((num) => console.log(num));
// }

// sum2(30, 10, 5);

// Spread Operator

// const numbers = [10, 20, 30, 40];
// console.log(...numbers);

// const skills = ["JS", "React", "Node"];
// const copiedSkills = [...skills];
// console.log(copiedSkills);

// Real Case 2
// const frontend = ["React", "Vue"];
// const backend = ["Node", "Express", "NestJS"];

// const fullStack = [...frontend, ...backend];
// console.log(fullStack);

// // Real Case 3
// function add(a, b, c) {
// 	return a + b + c;
// }

// const numbers = [10, 20, 30];
// console.log(add(...numbers));

// // Challenge 1
// function print(...args) {
// 	console.log(args);
// }

// // Challenge 2
// const arr = [...arr1, ...arr2];

// Challenge 3
function sum(a, b, ...commentName) {
	console.log(commentName);
}
