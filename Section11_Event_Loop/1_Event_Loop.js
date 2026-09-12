// // // Single Threaded
// // // setTimout
// // function greet() {
// // 	console.log("Hello");
// // }
// // function main() {
// // 	greet();
// // 	console.log("World");
// // }
// // // main();

// // console.log("Start");
// // setTimeout(() => {
// // 	console.log("Timeout");
// // }, 0);
// // console.log("End");

// console.log("Start");
// setTimeout(() => {
// 	console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
// 	console.log("Promise");
// });
// console.log("End");

// console.log("Start");
// setTimeout(() => {
// 	console.log("Timeout");
// }, 0);
// function createMicrotask() {
// 	Promise.resolve().then(() => {
// 		console.log("Microtask");
// 		createMicrotask();
// 	});
// }
// createMicrotask();
// console.log("End");

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// A D C B
