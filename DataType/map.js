let map = new Map();
map.set("1",'str1');
map.set(1,'num1');
map.set(true,'bool1');
console.log(map.get(1));
console.log(map.get('1'));
console.log(map);
console.log(map.size);
console.log(map.has(1))

//  iteration over map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50],
    ["onion",20]
  ]);
//  keys()
for(let vegetable of recipeMap.keys() ){
    console.log(vegetable);
}
// values()
for(let vegetable of recipeMap.values() ){
    console.log(vegetable);
}
//  entries()
for(let vegetable of recipeMap.entries() ){
    console.log(vegetable);
}
for(let vegetable of recipeMap){
    console.log(vegetable);
}

// forEach
// runs the function for each (key, value) pair
recipeMap.forEach( (value, key) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });
// object from map

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
console.log(prices);
//------------------- set -----------------------------
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log(set.size);

for(let user of set){
    console.log(user.name);
}

// iteration over set --> for..of , forEach
let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});

// task1 
function unique(arr){
    let set = new Set();
   for(let i of arr) set.add(i);
    return set; /// another anwers --> return Array.From(new Set(arr))
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values))

