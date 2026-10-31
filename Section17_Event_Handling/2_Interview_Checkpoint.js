// <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
// </div>

// Q1 Predict The Output
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
	console.log("Parent");
});

child.addEventListener("click", () => {
	console.log("Child");
});

// <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
// </div>

// Q2 Predict the Output
parent.addEventListener(
	"click",
	() => {
		console.log("Parent");
	},
	true,
);

child.addEventListener("click", () => {
	console.log("Child");
});

// Q3 what does stopPropogation Do

// <div id="parent">
//     Parent
//     <button id="child">Click Me</button>
// </div>
parent.addEventListener("click", () => {
	console.log("Parent");
});

child.addEventListener("click", (event) => {
	console.log("Child");
	event.stopPropagation();
});

// Q4 Difference btw event.target and event.currentTarget

// Q5 Why Does Event Delegation Work?
