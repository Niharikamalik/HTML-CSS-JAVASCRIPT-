let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
//   Properties options.title, options.width and options.height are assigned to the corresponding variables.
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200

  let {width: w, height: h, title:t} = options;
  console.log(t);
  console.log(w);
  console.log(h);
// rest'...'
// title = property named title
// rest = object with the rest of properties
let {title2, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100