// Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);

let guestList1 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList1);
// length
console.log(guestList.length);
console.log(guestList1.length);
//  Accessing characters 
let str = "hello";
console.log(str[1]);
console.log(str[-1]);//undefine
console.log(str[str.length-1]);
console.log(str.at(3))
console.log(str.at(-1))
// using for--of
for(let char of str){
    console.log(char)
}
// strings are immutable

let str2 = "Hi";
str2[0] = "h";
console.log(str2[0]);

// but we can replace string
str2 = "h"+str2[1];
console.log(str2);
// toUpperCase , toLowerCase
// Searching for substring
let str3 = 'Widget with id';
console.log(str3.indexOf('id'));
// .indexOf("character",position) position from where searching should be start
console.log(str3.indexOf('d',3));
// 
let str4 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str4.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

// include

console.log( "Widget with id".includes("Widget") ); 
console.log( "Widget".includes("id", 3) );
 
//  startWith , EndsWith
console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
console.log("widget id".endsWith("get"));

// slicing
let str5 = "stringify";
console.log( str5.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str5.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
// This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
console.log( str5.substring(2, 6) ); // "ring"
// substr --> str.substr(start,length)
console.log(str5.substr(3,4))
// Returns a decimal number representing the code for the character at position pos:
// .codePointAt(pos)
console.log( "Z".codePointAt(0) ); // 90
console.log("aZ".codePointAt(0));
// create character use its code 
console.log(String.fromCodePoint(90));
// trim
console.log("  id  ".trim())
console.log("id".repeat(2))
// task1 

let ucFirst=(a)=>{
    return a[0].toUpperCase() + a.slice(1);
}
console.log(ucFirst("john") == "John");

// task2 

function checkSpam(str){
    str = str.toLowerCase();
    return (str.includes("viagra")? true : str.includes("xxx")?true:false)
}
console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);

// task3 

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
console.log(truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…");
console.log(truncate("Hi everyone!", 20) == "Hi everyone!");