// Basic Syntax of function

// function definition
// function sayMyName(){
//     console.log("Rohit");
// }

// function calling
// sayMyName();

// function printCounting(){
//     for (let i =0;i<=100; i++){
//         console.log(i);
//     }
// }

// printCounting();


// Creating function with a parameter
/** @parameter = num */
/** @argument = 5 */   

// function printNumber(num){
//     console.log("Printing Number : ",num);
// }

// printNumber(5);
// 5 is an Argument for function call

// function getAverage(num1,num2){
//     let avg = (num1+num2)/2;
//     console.log("Average of numbers is : ",avg);
// }

// getAverage(3,70);



// Return functions: That return something 

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// getSum(1,2,3);        //No output , if we directly call the function 
// the 'return' keyword gives something to the caller that we have to store somewhere
// We store that value into a variable as follows

// let ans  = getSum(1,2,3);
// console.log("sum is :" ,ans);


// function getMyName(firstName,lastName){
//     let fullName = firstName+" "+lastName;
//     return fullName;
    // unreachable statements: No statement works after return statement
    // let a = 10;
    // let b = 5;
    // let sum = a+b;
    // console.log(sum);
// }
// let ans = getMyName("Rohit","Chauhan");
// console.log("Name is :",ans);

// let ans = getMyName(7,"Chauhan");       //Even if we input 7 , js treats it as a String because , We have given " " in the above statement 
// console.log("Name is :",ans);


// function getMyName(firstName,lastName){
//     let fullName = firstName+lastName;
//     return fullName;
// }

// let ans = getMyName(7,7);      //If we remove the " " from above statement then it treats the input as integer
// console.log("Name is :",ans);


// function getMultiplication(a,b){
//     // let multi = a*b;
//     return a*b;     //we can directly return the required operation without using a variable. 
// }
// // let ans = getMultiplication(2,20); 
// // console.log(ans);
// console.log(getMultiplication(2,20));    //we can directly print the returned value without storing it into a variable. 



//Function Expression :  Storing the function inside a variable 

// const getMultiplication = function(a,b) { 
//     return a*b;
// }
// let ans = getMultiplication(2,4);
// console.log(ans);

// let squareNumber = function(num){
//     let ans = num**2;
//     return ans;
// }

// let ans = squareNumber(4);
// console.log(ans);


// Arrow Function : Remove the function keyword , and insert an arrow (=>)

// let getExp =(x,y) => {
//     let ans = x**y;
//     return ans;
// }
// console.log(getExp(2,4));























