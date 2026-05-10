// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope before execution.

// var

console.log(a); // undefined
var a = 10;
console.log(a);

// Interpreted As
// var a;
// console.log(a); // undefined
// a = 10;
// console.log(a);

// let const

console.log(b);
let b = 10;
console.log(b);

console.log(c);
const c = 10;
console.log(c);
