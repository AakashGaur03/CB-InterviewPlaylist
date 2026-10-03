// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

async function fetchData() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
// fetchData();

// GET         -> Retrieve Data
// POST        -> New data send/create
// PUT / PATCH -> Update existing data
// DELETE      -> Remove data

async function postData() {
	const newPost = {
		title: "Hello World",
		body: "This is a test post",
		userId: 1,
	};
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newPost),
	});
	const data = await response.json();
	console.log(data);
}
// postData();

// Error handling
async function fetchData() {
	try {
		const response = await fetch("https://example.com/api");
		if (!response.ok) {
			throw new Error(`HTTP Error:${response.status}`);
		}
		const data = await response.json();
		console.log("Data received:", data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
fetchData();
