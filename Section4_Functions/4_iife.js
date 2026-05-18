// // IIFE
// // Self Executing Function it is called as soon as they are defined

// (function (name) {
// 	console.log(`Heelo ${name}`);
// })("Dave");

// // function greet() {
// // 	console.log("Hello");
// // }

// // greet();

const counter = (function () {
	let count = 0;
	return {
		increment: function () {
			count++;
			console.log(count);
		},
	};
})();

counter.increment();
counter.increment();
