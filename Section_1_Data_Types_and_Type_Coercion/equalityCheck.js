console.log([] == false); // true

// false -> 0
// [] -> "" -> 0
// 0 == 0

console.log({} == false); // false
// false -> 0
// {} -> [object object] -> Number([object object]) -> NaN

console.log(NaN == NaN);
console.log(NaN === NaN);
