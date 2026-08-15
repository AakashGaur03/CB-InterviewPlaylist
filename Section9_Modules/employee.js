export default function addEmployee(name) {
	console.log(`${name} added successfully`);
}
export function removeEmployee(name) {
	console.log(`${name} removed successfully`);
}
export function updateEmployee(name, updateName) {
	console.log(`${name} updated successfully to ${updateName}`);
}

export const employeeData = {
	profile: {
		name: "Rahul",
		department: "Engineering",
	},
};
