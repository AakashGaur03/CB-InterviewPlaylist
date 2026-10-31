// Debouncing

// const searchHandler = () => {
// 	console.log("Fetching search results...");
// };

// document.getElementById("search").addEventListener("keyup", searchHandler);

function debounce(func, delay) {
	let timer;

	return function (...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

const optimizedSearch = debounce(() => {
	console.log("Fetching search results...");
}, 1000);

document.getElementById("search").addEventListener("keyup", optimizedSearch);
	