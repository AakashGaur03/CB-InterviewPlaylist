// // Global Scope

// let globalVar = "Global";

// // Function

// function test() {
// 	let x = 10;
// 	console.log(x);
// 	console.log(globalVar);
// 	globalVar = 20;
// }
// test();
// // console.log(x);
// console.log(globalVar);

// // Block Scope

// {
// 	// Es6
// 	// let aur const
// 	let a = 10;
// 	console.log(a);
// 	var b = 20;
// 	console.log(b);
// }
// // console.log(a);
// console.log(b);

var dummy1 = 10;
let dummy2 = 10;
const dummy3 = 10;

console.log(window.dummy1);
console.log(window.dummy2);
console.log(window.dummy3);
