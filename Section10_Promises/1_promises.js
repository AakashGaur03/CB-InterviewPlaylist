// const myPromise = new Promise((resolve, reject) =>
// 	setTimeout(() => {
// 		resolve("Data Fetched");
// 	}, 2000),
// );
// console.log(myPromise);

// Pending -> Fulfilled
// Pending -> Rejected

// const myPromise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Data Fetched");
// 		// reject("Failed to Fetch Data");
// 	}, 2000);
// });
// const myPromise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("Failed to Fetch Data");
// 	}, 2000);
// });
// myPromise2
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((data) => {
// 		console.log(data);
// 	})
// 	.finally(() => {
// 		console.log("Operation Completed");
// 	});
// myPromise3.catch((data) => {
// 	console.log(data);
// });

// Promise Chaining

// new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve(10);
// 	}, 1000);
// })
// 	.then((num) => {
// 		console.log(num); // 10
// 		return num * 2; // 20
// 	})
// 	.then((num) => {
// 		console.log(num); // 20
// 		return num * 3; // 60
// 	})
// 	.then((num) => {
// 		console.log(num); // 60
// 	});

const p1 = new Promise((resolve, reject) => setTimeout(() => reject("One"), 1000));

const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("Two"), 2000));

const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Three"), 3000));

// Promise.all()
// Promise.all([p1, p2, p3])
// 	.then((values) => {
// 		console.log(values);
// 	})
// 	.catch((error) => {
// 		console.log("Something went Worng");
// 	});
// Promise.race()
// Promise.race([p1, p2, p3])
// 	.then((values) => {
// 		console.log(values);
// 	})
// 	.catch((error) => {
// 		console.log("Error in Some Promise");
// 	});
// Promise.allSettled()

Promise.allSettled([p1, p2, p3])
	.then((values) => {
		console.log(values);
	})
	.catch((error) => {
		console.log("Error in Some Promise");
	});
