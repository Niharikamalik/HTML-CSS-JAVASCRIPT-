//  spread operator on arr 
let arr = [3, 5, 1];
let arr2 = [1, -2, 3, 6];
console.log(Math.max(...arr,...arr2));

// spread on string

let str = "hello";
console.log([...str])

//  add element in array
arr = [...arr2,8,10]
console.log(arr);

// object 
let obj = { a: 1, b: 2, c: 3 };
let objCopy= {...obj};
console.log(objCopy);
console.log(obj == objCopy);//false (not same reference)
console.log(JSON.stringify(obj));
//add key value in object using spread operator
let objadd = {...obj,d:12};
console.log(objadd);