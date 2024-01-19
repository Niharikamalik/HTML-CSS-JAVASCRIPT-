// compare two objects

let obj1 = {
    str :"string1",
    str2:"string2",
    str3:"string3",
}
let obj2 = {
    str :"string1",
    str2:"string2",
    str3:"string3",
}
function compare(obj1,obj2){
    let flag = true
    out:for (let key in obj1){
        if(obj1[key]!=obj2[key]){
            flag = false;
            break out;
        }
    }
    return flag;
}
console.log(compare(obj1,obj2));

// number into array
/*
let a = +prompt("a",);
a=String(a)
console.log(Array.from(a))
*/
// 

