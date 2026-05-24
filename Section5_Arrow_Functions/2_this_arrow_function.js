// // const obj = {
// // 	name: "Dave",
// // 	showName: function () {
// // 		console.log(this.name);
// // 	},
// // };

// const obj = {
// 	name: "Dave",
// 	showName: () => {
// 		console.log(this.name);
// 	},
// };
// obj.showName();
// // const refObj = obj.showName;
// // refObj();

const obj = {
	name: "Dave",
	showName: function () {
		setTimeout(() => {
			console.log(this.name);
		}, 1000);
	},
};
obj.showName();
