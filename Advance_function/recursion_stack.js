// Recursion
function pow(a,n){
    return (n==1)?a:a*pow(a,n-1);
}
console.log(pow(2,4))
// reduce

let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 7700

//   linkedList 

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
function printList(list) {

    while(list) {
      console.log(list.value);
      list = list.next;
    }
  
  }
printList(list);
//  task1 - sumTo
function sumTo(n){
    return (n==1)? 1:n+sumTo(n-1);
}
console.log(sumTo(100));

// task2 - factorial
function factorial(n){
    return (n==1)? 1:n*factorial(n-1);
}
console.log(factorial(5));

// task3 - fibonacci number
function fibonacci(n){
    return n<=1?n : fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(7));