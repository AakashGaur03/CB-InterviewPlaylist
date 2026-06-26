// const user1 = {
// 	name: "Alice",
// };
// const user2 = {
// 	name: "Bob",
// };

// function greet(age, city) {
// 	console.log(this.name);
// 	console.log(`${this.name} is ${age} years and from ${city}`);
// }

// // greet();

// // call
// // greet.call(user1);

// Funtion Borrowing
// // greet.call(user1, 23, "NY");
// // greet.call(user2, 34, "New Delhi");

// // apply

// // greet.apply(user1, [23, "Mumbai"]);

// // const nums = [10, 20, 30, 40];
// // console.log(Math.max.apply(null, nums));
// // console.log(Math.max(...nums));

// // bind()

// const newFn = greet.bind(user1, 24, "Delhi");
// newFn();

const user = {
	name: "Dev",

	handleClick() {
		console.log(this.name);
	},
};

setTimeout(user.handleClick.bind(user), 1000);
