// // // // async
// // // async function greet() {
// // // 	// return "Hello";
// // // 	throw new Error("Something went wrong");
// // // }
// // // // console.log(greet());

// // // // function greet() {
// // // // 	return Promise.resolve("Hello");
// // // // }

// // // greet()
// // // 	.then((msg) => {
// // // 		console.log(msg);
// // // 	})
// // // 	.catch((error) => {
// // // 		console.log(error.message);
// // // 	});

// // const fetchData = new Promise((resolve) => {
// // 	setTimeout(() => {
// // 		resolve("User Data");
// // 	}, 2000);
// // });
// // async function getData() {
// // 	console.log("Start");
// // 	const data = await fetchData;
// // 	console.log(data);
// // }
// // console.log("Before");
// // getData();
// // console.log("After");

// // const result = await Promise.resolve("Hello");
// // console.log(result);

// // fetchUser()
// // 	.then((user) => {
// // 		return fetchPosts(user.id);
// // 	})
// // 	.then((posts) => {
// // 		console.log(posts);
// // 	})
// // 	.catch((error) => {
// // 		console.error(error);
// // 	});

// // async function fetchUserPosts() {
// // 	try {
// // 		const user = await Promise.resolve({ id: 123, name: "Rahul" });
// // 		const posts = await Promise.reject("Error: API Failed");
// // 		console.log(posts);
// // 	} catch (error) {
// // 		console.log(error);
// // 	} finally {
// // 		console.log("Operation Completed");
// // 	}
// // }

// // Sequential
// async function fetchUserPosts() {
// 	try {
// 		const user = await fetchUerData(); // 2 sec
// 		const userposts = await fetchPostData(user.id); // 3 sec
// 		console.log(userposts);
// 	} catch (error) {
// 		console.log(error);
// 	} finally {
// 		console.log("Operation Completed");
// 	}
// }
// // Parallel
// async function fetchUserPosts() {
// 	try {
// 		const userPromise = fetchUerData(); // 2 sec
// 		const postsPromise = fetchPostData(); // 3 sec
// 		const user = await userPromise;
// 		const post = await postsPromise;
// 		console.log(user);
// 		console.log(post);
// 	} catch (error) {
// 		console.log(error);
// 	} finally {
// 		console.log("Operation Completed");
// 	}
// }
// fetchUserPosts();

// // async function getData() {
// // 	try {
// // 		const data = await fetchData();
// // 		console.log(data);
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }
// // getData();
// async function fetchData() {
// 	try {
// 		const [user, posts] = await Promise.allSettled([getUser(), getPosts()]);
// 		console.log(user);
// 		console.log(posts);
// 	} catch (error) {}
// }

for (const id of userIds) {
	const user = await fetchUser(id);
	console.log(user);
}
// User 1 -> Data
// User 2 -> Data

const promises = userIds.map((id) => fetchUser(id));
const users = await Promise.all(promises);
