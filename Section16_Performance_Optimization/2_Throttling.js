// Throttling

// window.addEventListener("scroll", () => {
// 	console.log("Scrolling...");
// });

function throttle(func, limit) {
	let lastCall = 0;

	return function (...args) {
		const now = Date.now();

		if (now - lastCall >= limit) {
			lastCall = now;
			func.apply(this, args);
		}
	};
}

// limit = 1000
// last call = 5000
// now = 5500

const optimizedScroll = throttle(() => {
	console.log("Scrolling");
}, 1000);

window.addEventListener("scroll", optimizedScroll);
