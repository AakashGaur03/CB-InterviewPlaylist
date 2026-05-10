// Hoisting Function Declaration

greet();

function greet() {
	console.log("Hello");
}

greet();

// Function Expression

// greetName();
console.log(greetName);

const greetName = function () {
	console.log("Hello User");
};

greetName();

// console.log(greetUSer);
// greetUSer();

// var greetUSer = function () {
// 	console.log("Hello User From Var");
// };

// greetUSer();
