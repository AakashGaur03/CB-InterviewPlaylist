// WeakMap
let user = {
	name: "Alice",
};
const userData = new WeakMap();
userData.set(user, {
	role: "admin",
});

user = null;

// Map and WeakMap

// **`Map`**
// Keys can be any value
// Keys are strongly held
// Iterable
// `.size` available

// **`WeakMap`**
// Keys are objects
// Keys are weakly held
// Not iterable
// `.size` not available

// WeakSet
const processedUsers = new WeakSet();
const user1 = {
	name: "Alice",
};
const user2 = {
	name: "Bob",
};
processedUsers.add(user1);
console.log(processedUsers.has(user1));
console.log(processedUsers.has(user2));

// Set and WeakSet

// **`Set`**
// Keys can be any value
// Keys are strongly held
// Iterable
// `.size` available

// **`WeakSet`**
// Keys are objects
// Keys are weakly held
// Not iterable
// `.size` not available
