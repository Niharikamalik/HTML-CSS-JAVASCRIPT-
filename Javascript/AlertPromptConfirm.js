// We covered 3 browser-specific functions to interact with visitors:
// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
let age = prompt("enter your Age");
alert(age);
let correct = confirm(age);
alert(correct);

