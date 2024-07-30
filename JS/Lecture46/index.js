// We conclude that 
// 1)Global Scoped : var, let, const
// 2)Function Scoped : var, let, const
// 3)Block Scoped : let, const

// 1) Global Scoped: It is not mostly used.
// var, let, const : Any variable created using any of the keyword in global, its value can be accessed anywhere.
// var age = 15;
// console.log(age);
// {
//     console.log(age);
// }
// if(true){
//     console.log(age);
// }
// for(let i=0;i<2;i++){
//     console.log(age)
// }

// function sayHello(){
//     console.log("Hi",age);
// }
// sayHello();


// 2) Function Scoped

// function sayHello(){
//     var fullName = "earth";    //Here var is function scoped, that's why it can't be used outside function
//     // Same response will be for let, const also, because all of the three are function scoped
//     console.log("Hello Dunia",fullName);
// }
// console.log(fullName)
// sayHello();


// 3) Block Scoped
// i) var is not block scoped
// console.log(height);    //This  gives undefined because, it executes but , here it does variable hoisting, which takes only variable declaration
// {
//     var height= 190;
//     // var is not Block Scoped 
// }

// console.log(height);     //This gives the value.

// ii) let and const are block scoped
// {
//     let age = 12;
// }
// console.log(age);

// {
//     const age = 12;
// }
// console.log(age);
// Both let and const give Reference error 


// Temporal DEAD Zone in JS

// console.log(marks);        //Gives error because let OR const keywords are used which does not allow HOISTING
// console.log("Love");
// console.log("Rohit");
// console.log("Chauhan");       //These lines 63,64,65 does not execute
// const marks = 80;
// console.log(marks);

// The above scene creates a TEMPORAL DEAD ZONE from line 62 to 66
// In this temporal zone you can't access the value of marks


// To avoid all these, best practice is 
// 1) Avoid Creating Global variables 
// 2) Try to use 'let' and 'const' keywords rather than 'var'


//************ Set-timer Function in Js ************/
// setTimeout(function(){
//     console.log("Task 1"),3000;
// })

// console.log("Task 2");
// console.log("Task 3");


//************ Promise Function in Js ************/

// const myPromise = new Promise(function(resolve,reject){
//   // Here we write a Asychronous function
//   setTimeout(function(){
//     console.log("Task2");
//     resolve();
//   },3000)
// })

// myPromise.then(function(){
//   console.log("Promise Resolved!!");
// })

// new Promise((resolve,reject)=>{
//   let fileLoader = false;
//   if(fileLoader){
//     resolve("File loaded!!");
//   }
//   else{
//     reject("File Not Loaded!!!");
//   }
// })

// myPromise.then(value => console.log("value")).catch(error =>console.log(error));


// function loadFile(){
//     return new Promise((resolve,reject)=>{
//       let fileLoader = false;
//       if(fileLoader){
//         resolve("File loaded!!");
//       }
//       else{
//         reject("File Not Loaded!!!");
//       }
//   })
//   }
  
//   async function myFunction(){
//     try{
//       const value = await loadFile();
//       console.log(value);
//     }
//     catch(error){
//       console.log(error);
//     }
//   }
  
//   myFunction();