// var age = 25;  // globally scoped
// if(true){
//     console.log(age);
       // will execute
// }

// function solve(){
//     var age = 25;
//     // function scoped
//     console.log(age);
// }
// console.log(age);     // throws error , because age is function scoped
     
// solve();
// We are calling the function

// 'var' is function scoped and becomes global if declared outside function
// It is not block scoped

var x = 10;
x = "String";
// This is called redefined, in case of 'redeclaration' the 'datatype' may change 

var y = 20;
var y = 30;
console.log(y);
// This is called redeclaration, this is allowed only in case of 'var'

var x = 10;
x = 20;
// This is called reassigned, in case of 'reassigned' the 'datatype' will not change 

// variable can be redefined, redeclared, reassigned without errors
// But it can cause debugging problems

// let age = 10;
// console.log(age);
// simply runs

{
let age = 10;
// console.log(age);           // this console will give output

}
// But if we put braces around the variable, it will throw errors because 'let' is blocked scoped
// console.log(age);           // this console will not give output
   

// let a = 20;
// let a = 30;
// Redeclaration is not possible
// But we can manipulate the 'value'
// a=30;

let b = 20;
b= "Rohit";
console.log(b);
// This is called Dynamically typed language

// We cannot redefine, redeclare, reassign 'const'
// const a =25;
// console.log(a);

// a = 2 ;
// console.log(a);


// DATATYPES

// let marks = 20.2345;  //number
// marks = "Rohit";      //string
// marks = true;         //boolean
// console.log(marks);   

// let marks;            //only declaration gives undefined      
// console.log(marks);

// let marks = null;     //null      
// console.log(marks);


// let marks=56165654848498757879531259331;   //bigint                  
// console.log(marks);

// let marks;                //gives typeof as undefined
// console.log(typeof(marks));
// 'typeof' can be used to get the datatype of variable


// marks=null;            //gives 'typeof' as object
// console.log(typeof(marks));
