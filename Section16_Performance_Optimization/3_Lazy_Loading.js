// Lazy Loading
// import { sayHello } from "./utils.js";

document.getElementById("loadModuleBtn").addEventListener("click", async () => {
	const module = await import("./utils.js");

	module.sayHello();
});
