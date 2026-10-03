// Q1 What does fetch Return
async function fetchData() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
		console.log(response);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
fetchData();

// Q2 Does 404 goes in Catch Automatically

try {
	const response = await fetch("/users/123");
	if (!response.ok) {
		thrownewError(`HTTP Error:${response.status}`);
	}
} catch (error) {
	console.log(error);
}

// Q3 Will this settimeout execute immediately
console.log("A");
setTimeout(() => {
	console.log("B");
}, 0);
console.log("C");

// Q4 Will setinterval runs automatically exactly every 2 seconds
setInterval(() => {
	console.log("Running");
}, 2000);

// Q5 Why Function Reference Imp in Event Listener
function handleClick() {
	console.log("Clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

button.removeEventListener("click", () => {
	console.log("Clicked");
});
