// Q1 When a function accepts another funtion as argument is that an HOF

function process(callback) {
	callback();
}

// Q2 Is this a Pure Function
let count = 0;
function increment() {
	count++;
	return count;
}

// Q3 Does const makes a funciton immutable
constuser = {
	name: "Alice",
};
user.name = "Bob";

// Q4 map() mutable or immutable

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
