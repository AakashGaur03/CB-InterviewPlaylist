let obj1 = { name: "John" };
let obj2 = obj1;
obj2 = { name: "New" };
obj2.name = "Doe";
console.log(obj1.name); // "John"
console.log(obj2.name);
