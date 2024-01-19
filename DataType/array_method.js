// splice(start,deletecount)
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log( arr ); // ["I", "JavaScript"]

let arr1 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
let remove = arr1.splice(0, 3, "Let's", "dance");
console.log(remove)
console.log(arr1);
// concat
console.log(arr1.concat(remove));
// 
let arr2 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
// Object.values() can also be used instead of this
console.log( arr2.concat(arrayLike) ); // 1,2,something,else

// forEach
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
//------------searching methods--------------------
//   indexOf
//   include
//   lastIndexOf
// find

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
  ];
  let user = users.find(item => item.id == 1);
  console.log(user.name); // John
  
// findIndex
console.log(users.findIndex(users => users.name == "John"));
//  findLastIndex 
console.log(users.findLastIndex(users => users.name == "John"));
// filter
users = users.filter(item => item.name != "John")
console.log(users)
// transform array 
// into map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
// sort 
console.log(lengths.sort()); //all elements are converted to strings for comparisons
// reverse
console.log(lengths.reverse());
// split
let str = "test";
console.log(str.split(""));

// join
let str1 = ['Bilbo', 'Gandalf', 'Nazgul'].join(';'); // glue the array into a string using ;
console.log(str1)

// let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
//   }, [initial]);

let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

// typeof
console.log(typeof {})
console.log(typeof [])
// isArray
console.log(Array.isArray({}));
console.log(Array.isArray([]));


