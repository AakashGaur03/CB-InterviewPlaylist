// Parameters
// Placehodler in FD

// Arguments
// Actual Value when calling the funciton

function sum(a, b) {
	// Parameters
	console.log(a + b);
}

sum(3, 5); // Arguments

// Default Parameter

function greet(name = "Guest") {
	console.log(`Hello ${name}`);
}

greet("Dave");
greet();

// Rest parameters
function sumTest(...nums) {
	console.log(nums);
	return nums.reduce((sum, num) => sum + num, 0);
}

let val = sumTest(1, 2, 3, 4, 5, 6, 7, 8, 8);
console.log(val);
