// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// // parent.addEventListener("click", () => {
// // 	console.log("Parent clicked");
// // });

// // child.addEventListener("click", () => {
// // 	console.log("Button clicked");
// // });

// // Capturing Phase: Ancestors to Target Element
// // Target Phase : On Events Target Element
// // Bubbling Phase: Target Element to Ancestors

// // Capturing
// // parent.addEventListener(
// // 	"click",
// // 	() => {
// // 		console.log("Parent clicked");
// // 	},
// // 	true,
// // );

// // child.addEventListener("click", () => {
// // 	console.log("Button clicked");
// // });

// // Bubbling
// grandparent.addEventListener("click", () => {
// 	console.log("Grandparent clicked");
// });

// parent.addEventListener("click", () => {
// 	console.log("Parent clicked");
// });

// child.addEventListener("click", (event) => {
// 	console.log("Button clicked");
// 	event.stopPropagation();
// });

// // link.addEventListener("click", (event) => {
// //   event.preventDefault();
// // });

// const parent = document.getElementById("parent");

// parent.addEventListener("click", (event) => {
// 	console.log("Target:", event.target);
// 	console.log("Current Target:", event.currentTarget);
// });

// event.target: Element from where Event Originates
// event.currentTarget: Element Whose Listener Code is Currently being Executed

const container = document.getElementById("button-container");

container.addEventListener("click", (event) => {
	const button = event.target.closest("button");

	if (!button || !container.contains(button)) {
		return;
	}
	console.log(event.target.textContent);
});

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
	const newButton = document.createElement("button");
	newButton.textContent = "NEW Button";
	container.appendChild(newButton);
});
