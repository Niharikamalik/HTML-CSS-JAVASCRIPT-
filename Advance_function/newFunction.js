// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();\
let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) ); // 3