// Shadowing

// let x = 20;

// function test() {
// 	let x = 35;
// 	console.log(x);
// }
// test();
// console.log(x);

// var a = 10;

// {
// 	var a = 20;
// 	console.log(a);
// }
// console.log(a);

// const a = 20;
// const a = 10;

// Variable Lookup
let x = 10;

function outer() {
	function inner() {
		console.log(x);
	}
	inner();
}
outer();
