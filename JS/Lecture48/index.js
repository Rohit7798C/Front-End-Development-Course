// Using MATH object in JS

console.log("babbar");

console.log(Math.PI);

console.log(Math.max(60,30,24,500,712,89));

console.log(Math.min(60,30,24,500,712,89));

console.log(Math.round(1.4));           //Rounds off to the nearest integer.

console.log(Math.floor(1.9));    //1    //floor gives the Just smallest value.

console.log(Math.ceil(1.1));     //2    //ceil gives the Just greater value.

console.log(Math.abs(-5.5));     //5.5  //abs converts -ve to +ve and keeps +ve as it is.

console.log(Math.random());             //Prints any random number between 0 to 1 (0 an 1 inclusive).

console.log(Math.sqrt(5.5));            //Gives the Square root of any number.

console.log(Math.pow(2,10));    //1024  //Gives 2 power 10.


// Using DATE object in Js

// 1) Method-1
let curr = new Date();
console.log(curr);

// 2) Method-2
let date = new Date('June 20 1998 07:15');
console.log(date);

// 3) Method-3
let newDate = new Date(1998, 5, 20, 7,15,20);       //Month in Date is Zero-indexed (Starts from 0).
console.log(newDate);

// Getting the Day of a Particular Date.
console.log(newDate.getDay());       //6-Saturday              //Day is also Zero-indexed

//Getting the year of Particular Date.
console.log(newDate.getFullYear());

// Setting the year of a particular Date
console.log(newDate.setFullYear(2001));

console.log(newDate);













