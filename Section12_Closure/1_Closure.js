// let x = 10;
// function outer() {
// 	function inner() {
// 		console.log(x);
// 	}
// 	inner();
// }
// outer();
// // Inner -> Outer -> Global

function outerFunction() {
	let count = 0;
	return function innerFunction() {
		count++;
		console.log(`Count:${count}`);
	};
}
// const counter = outerFunction();
// counter();
// counter();
// counter();

// Closure is a function that retains access to variables from its surrounding lexical scope, even when that function is executed later or outside that original function call.

// Example 1 Data Encapsulation
function createCounter() {
	let count = 0;
	return {
		increment() {
			count++;
			console.log(count);
		},

		decrement() {
			count--;
			console.log(count);
		},
	};
}

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.count);

// Example 2 Function Factories
function createGreeting(greeting) {
	return function (name) {
		console.log(`${greeting},${name}!`);
	};
}
// const sayHello = createGreeting("Hello");
// sayHello("Rahul");
// sayHello("Rohit");
// const sayHola = createGreeting("Hola");
// sayHola("Alice");

// Example 3 Event Listeners
function createClickCounter() {
	let count = 0;
	return function () {
		count++;
		console.log(`Clicked${count} times`);
	};
}
// const button = document.querySelector("button");
// const clickHandler = createClickCounter();
// button.addEventListener("click", clickHandler);

// Example 4 Memoization
function memoize() {
	const cache = {};
	return function (n) {
		if (n in cache) {
			console.log("Cached Value");
			return cache[n];
		}
		const result = n * 10;
		console.log("Calculating");
		cache[n] = result;
		return result;
	};
}
// const calculate = memoize();
// console.log(calculate(5));
// console.log(calculate(5));

// Interview Trap
for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

// With var, the callbacks share the same loop variable binding, and by the time they execute, the loop has already finished and i is 3. With let, each iteration gets its own binding, so the callbacks access 0, 1, and 2.

// Interview Questions
// Q1 What is a Closure in JavaScript?

// A closure is a function that retains access to variables from its surrounding lexical scope, even when the function is executed later or outside that original scope.

// Q2 Why does JavaScript need closures?
// Closures allow functions to retain state and access to variables from their surrounding scope. This is useful for data encapsulation, function factories, event callbacks, and memoization.
