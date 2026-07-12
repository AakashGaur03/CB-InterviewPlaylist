// const employeeName = "Rahul";
// const department = "Engineering";
// const employeeId = 101;
// // const message = "Hello " + employeeName + " ,Welcome to " + department + " Your Employee ID is: " + employeeId;

// const message = `Hello ${employeeName} ,Welcome to ${department} your Employee Id is ${employeeId}`;

// // console.log(message);

// const price = 50000;
// const tax = 5000;

// // console.log(`Total Amount is: ${price + tax}`);
// // ${}
// function greet(name) {
// 	return `Hello ${name}`;
// }

// console.log(`${greet("Rahul")}`);

// // const message2 =
// // 	"Hello " + employeeName + "\n" + " ,Welcome to " + department + "\n" + " Your Employee ID is: " + employeeId;

// const message2 = `Hello ${employeeName}
// Welcome to ${department}
// Your Employee Id is ${employeeId}`;

// console.log(message2);

// Default Parameters
// function greet(name = "Guest") {
// 	// name = name || "Guest"
// 	console.log(`Hello ${name}`);
// }

// // greet("Rahul");
// greet();
// greet(undefined);
// greet(null);

// Destructuring

const employee = {
	id: 101,
	name: "Rahul",
	department: "Engineering",
};

// const id = employee.id;
// const name = employee.name;
// const department = employee.department;

// console.log(id);
// console.log(name);
// console.log(department);

// const { id, name, department } = employee;
// console.log(id);
// console.log(name);
// console.log(department);

// // Aliases

// const { name: employeeName } = employee;
// console.log(employeeName);

// Array

const skills = ["Javascript", "React", "Node"];
// const firstSkill = skills[0];
// const SecondSkill = skills[1];
// console.log(firstSkill);
// console.log(SecondSkill);

const [firstSkill, secondSkill] = skills;
console.log(firstSkill);
console.log(secondSkill);
