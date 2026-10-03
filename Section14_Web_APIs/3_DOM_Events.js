// const button = document.querySelector("button");
// button.addEventListener("click", () => {
// 	console.log("Button clicked!");
// });

// // click
// // input
// // change
// // submit
// // keydown
// // keyup
// // mouseover

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
	console.log(event.target.value);
});

// function handleClick() {
// 	console.log("Clicked");
// }
// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
	console.log(event);
});

document.addEventListener("keydown", (event) => {
	console.log(event.key);
});
