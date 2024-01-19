let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
//   
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1