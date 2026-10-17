// // Currying

// function multiply(a, b, c) {
// 	return a * b * c;
// }
// // console.log(multiply(2, 3, 4));

// function multiplyCurry(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a * b * c;
// 		};
// 	};
// }

// // console.log(multiplyCurry(2)(3)(4));

// const curriedMultiply = (a) => (b) => (c) => a * b * c;
// // console.log(curriedMultiply(2)(3)(4));

// const logger = (level) => (message) => {
// 	return `[${level.toUpperCase()}]:${message}`;
// };

// const info = logger("info");
// const error = logger("error");
// console.log(info("App Started"));
// console.log(error("Something went wrong"));

// Partial Application

function multiply(a, b, c) {
	return a * b * c;
}

const multiplyByTwo = multiply.bind(null, 2);

console.log(multiplyByTwo(3, 4));
console.log(multiply(2, 3, 4));

function calculateTax(rate, amount) {
	return amount * rate;
}

const calculate20Percentage = calculateTax.bind(null, 0.2);
console.log(calculate20Percentage(1000));

// f(a,b,c) => f(a)(b)(c)
// f(a,b,c) => fix a => newFunction(b,c)

// Currying Function that Can accept Any Number of Argument

function sum(a) {
	// 15
	return function (b) {
		if (b === undefined) {
			return a;
		}

		return sum(a + b);
	};
}

console.log(sum(1)(2)(3)(4)(5)());
