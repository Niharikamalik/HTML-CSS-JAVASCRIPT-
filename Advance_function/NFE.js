// There are two special things about the name func, that are the reasons for it:

//     It allows the function to reference itself internally.
//     It is not visible outside of the function.

let sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };
  
  sayHi(); // Hello, Guest
  
  // But this won't work:
//   func(); 
  // Error, func is not defined (not visible outside of the function)


//------------------ And at the moment of the call that outer sayHi is null.-------------------------

  let sayHi1 = function(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      sayHi1("Guest"); // Error: sayHi is not a function
    }
  };
  
  let welcome = sayHi1;
  sayHi1 = null;
  
//   welcome();
   // Error, the nested sayHi call doesn't work any more!

//-----------------Let’s use it to fix our code:----------
let sayHi2 = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // Now all fine
    }
  };
  
  let welcome2 = sayHi2;
  sayHi2 = null;
  
  welcome2(); // Hello, Guest (nested call works)
//   ---------------------
function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }
