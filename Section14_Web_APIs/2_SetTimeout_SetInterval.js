// setTimeout
// console.log("Start");
// setTimeout(() => {
// 	console.log("Executed after 2 seconds");
// }, 2000);
// console.log("End");

// Passing an Argument
function greet(name) {
	console.log(`Hello,${name}`);
}
// setTimeout(greet, 3000, "John");

// Cancelling a Timeout
const timer = setTimeout(() => {
	console.log("This will not run");
}, 5000);

clearTimeout(timer);

// setInterval()

// let count = 1;
// const interval = setInterval(() => {
// 	console.log(`Executed${count} times`);
// 	count++;
// }, 2000);

// let counter = 0;
// const intervalId = setInterval(() => {
// 	console.log("Running...");
// 	counter++;
// 	if (counter === 5) {
// 		clearInterval(intervalId);
// 		console.log("Stopped after 5 times");
// 	}
// }, 1000);

function runTask() {
	console.log("Running...");
	setTimeout(runTask, 2000);
}
runTask();
