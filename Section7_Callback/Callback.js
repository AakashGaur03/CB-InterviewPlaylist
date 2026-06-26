// // function sayHello() {
// // 	console.log("Hello");
// // }
// // sayHello();

// // function greet(name, callback) {
// // 	callback();
// // 	console.log(`${name}`);
// // }

// // greet("Dave", sayHello);

// // // Why do we need Callback

// // // Custom Behaviour
// // // Async JS

// // Synchronous Callback

// // function syncCall(callback) {
// // 	console.log("Before Callback");
// // 	callback();
// // 	console.log("After Callback");
// // }

// // syncCall(() => {
// // 	console.log("Executing Callback");
// // });

// // Asynchronous Callback

// function fetchData(callback) {
// 	console.log("Fetching Data...");

// 	setTimeout(() => {
// 		console.log("Data Received");
// 		callback("Data from Server");
// 	}, 1000);
// }

// function processData(data) {
// 	console.log(`Processing ${data}`);
// }

// fetchData(processData);

// Callback in Event Listener

// button.addEventListener("click", () => {
// 	console.log("Button Clicked");
// });

// Callback Hell

function step1(callback) {
	setTimeout(() => {
		console.log("step 1 Completed");
		callback();
	}, 2000);
}

function step2(callback) {
	setTimeout(() => {
		console.log("step 2 Completed");
		callback();
	}, 2000);
}

function step3(callback) {
	setTimeout(() => {
		console.log("step 3 Completed");
		callback();
	}, 2000);
}

step1(() => {
	step2(() => {
		step3(() => {
			console.log("All Steps Completed");
		});
	});
});
