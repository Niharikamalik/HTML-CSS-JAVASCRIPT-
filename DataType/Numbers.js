// More ways to write a number
let billion1 = 1000000000; 
let billion2 = 1_000_000_000; 
console.log(billion1);
console.log(billion2);//JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.
// -------------- e is for zeors and number after  e is count of zeros-----------
console.log( 73e9 ); // 73 billions (same as 73000000000 or 73_000_000_000) 73 and 9zeors after it 
console.log( 7.3e9 );
//---------------------------toString(base)---------------------------
// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z.

let num = 255;
console.log(num.toString(16))
// ------------------ Rounding---------------------
// floor --> rounds down 
console.log(Math.floor(3.1));

// ceil --> rounds up
console.log(Math.ceil(3.1));

// round --> nearest integer
console.log(Math.round(3.1));
console.log(Math.round(3.6));

// trunc --> remove anything after decimal point 
console.log(Math.trunc(3.1234))

// toFixed --> rounds the number to n digits after the point and returns
let num1 = 12.3264754
console.log(num1.toFixed(1))
console.log(num1.toFixed(2))
console.log(num1.toFixed(4))

// parseInt and parseFloat 
console.log(parseInt("100abc"));
console.log(parseFloat("102.234asg"));

// random, max, min, pow
console.log(Math.random());
console.log(Math.max(10.3, 12,11.5,13.5,13.56));
console.log(Math.min(12,-12,10));
console.log(Math.pow(2,3));
//task1 
let a = +prompt("a:",);
let b = +prompt("b : ",);
console.log(a+b);
