// import { addEmployee as AddEmp, removeEmployee, updateEmployee } from "./employee.js";
// AddEmp("Rahul");
// removeEmployee("Rahul");

import adddEmp, { removeEmployee, updateEmployee, employeeData } from "./employee.js";
// addEmployee("Rahul");
adddEmp("Rahul New");
removeEmployee("Rahul New");
// function calculateSalary() {}
// function sendEmail() {}
// function generateReport() {}

console.log(employeeData.profile.name);

// if (employeeData && employeeData.address && employeeData.address.city) {
// 	console.log(employeeData.address.city);
// }
console.log(employeeData?.address?.city ?? "City Not Available");
// ||
// ??
const age = 0;
console.log(age || 18);
console.log(age ?? 18);
