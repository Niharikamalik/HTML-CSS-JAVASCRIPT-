// --------------------Array-----------------------
let arr = ["Apple", "Orange", "Plum"];
console.log(arr);
console.log(arr[1]);
// replace
arr[2] = "Pear";
// add 
arr[3] ="Lemon";
console.log(arr);

// An array can store elements of any type.

// mix of values
let arr1 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr1[1].name ); // John

// get the function at index 3 and run it
arr1[3](); // hello

// javascript won't use negative indexes for access arr element 
console.log(arr1[-1]); //undefine 

console.log(arr.at(-1));

// Queue --> push and shift

// push --> append new element at the end of the array
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits);

//  shift --> extract first element of the array anf return it.
console.log(fruits.shift());

// stack --> unshift and pop 
// pop --> extract last element of the array and retutn it
fruits.push("apple");
console.log(fruits.pop());

// unshift--> add element at the begining of array

console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);

// task1

let fruit = ["Apples", "Pear", "Orange"];
// push a new value into the "copy"
let shoppingCart = fruit;
shoppingCart.push("Banana");
// what's in fruits?
console.log( fruit.length ); 

// task2 

let style = ["Jazz","Blues"];
console.log(style);

style.push("Rock-n-Roll");
console.log(style);

for(let i=0; i <style.length ; i++){
    if(i == Math.floor((style.length-1)/2)){
        style[i] = "Classics";
    }
}
console.log(style);

console.log(style.shift());
console.log(style);

style.unshift("Rap","Reggae");
console.log(style);




