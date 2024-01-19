// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith

// Ignore elements using commas
// second element is not needed
let [firstName1, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); // Consul
// rest '...'
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest,rest.length); // 2

