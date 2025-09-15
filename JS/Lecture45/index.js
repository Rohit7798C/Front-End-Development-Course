// A)Function Hoisting (Using plain function definition)
// {         
// Suppose we have these two imaginary brackets(first and last) i.e. current scope
// The function moves to the top within these two brackets
// sayMyName("Rohit");

// function sayMyName(finalName){
//     console.log(finalName);
// }
// }


// B)Function Hoisting (Using function Expression)
// - Hoisting doesn't work for function Expression.
// - Gives Reference Error.
// sayHello();
// let sayHello = function(){
//     console.log("Hi , all of you!!");
// }


// C) Variable Hoisting (using 'var' keyword)
// var age;           //Only declaration moves to top
// console.log(age);        //Calling the variable before its declaration and definition, gives undefined error
// var age = 25;


// D) Variable Hoisting (using 'let' and 'const' keyword)

// console.log(age);         // printing before, gives reference error (cannot access before initialization)
// let age = 25;             //using 'let' keyword

// console.log(age);         // printing before, gives reference error (cannot access before initialization)
// const age = 25;           //using 'const' keyword


// Difference betw Variable Hoisting and function Hoisting
// 1)function Hoisting
// - In case of function Hoisting, function definition also moves to top along with function declaration,that is why we get the output
// 1)variable Hoisting
// - In case of variable Hoisting, only variable declaration moves to top and not the definition, that is why we get the output as undefined.


// E) Hoisting on class (Class level Hoisting is not possible)
//    i) Class : It is a blue print, which tells that i have created a high level entity which contains a certain properties.
//    ii) Object : The actual output(instance) that we will get after executing the blue print is called the object. It is also called as Instance of the class.
//    e.g. 2D sketch of a house on paper is called class, while actual house constructed is called Object.

// const obj = new Human();        //creating the Object before class creation, gives Reference error
// class Human{

// }
// const obj = new Human();     //creating the Object after class creation, executes



// F) Function Call stack
// => Stack:- Stack is a Data Structure, in which the data is stored in a LIFO (Last in First Out) manner


// D(){
//     _____;
//     C();                    |_____|
//     _____;                  |__D__|<- When function D is called , D goes into stack
// }                           |__C__|<- When function C is called , C goes into stack  
// C(){                        |__B__|<- When function B is called , B goes into stack
//     _____;                  |__A__|<- When function A is called , A goes into stack
//     D();
//     _____;                  |_____|
// }                      -----|_____|<- When function D gets executed ,D returns back to function from where it is called
//                        |--->|__C__|    D is removed from the stack  
//                             |__B__|                             
// B(){                        |__A__|
//     _____;
//     C();                    |_____|
// }                           |_____|    C is removed from the stack
//                        -----|_____|<- When function C gets executed ,C returns back to function from where it is called  
//                        |--->|__B__|<-Same for B and A                             
// A(){                        |__A__|
//     _____;
//     B();
//     _____;
// }
// A() <- Function A is called

// Whenever any function is called , it returns back to its earlier function, and it is popped from the stack.
// So Stack keeps track of the sequence in which the functions are called & executed.

// Functions : Functions are called first class citizens in Js. This is because functions plays multiple roles in Js.
            // 1)Functions can be assigned to variables.
            // 2)Functions can be passed as an argument
            // 3)We can return functions,just like we return values of integer,string,etc.
            // 4)Can be used in Data Structure, like we create array of integers, so we can create array of functions.
            // 5)We can define function as a property in Object

// 1)Functions can be assigned to variables.
// let greet = function(){
//     console.log("Greetings for the day!!");
// }
// greet();


// 2)Functions can be passed as an argument
// function greetMe(greet,fullName)
// {
//     console.log("Hello" , fullName);
//     greet();
// }
// greetMe(greet,"Rohit");


// 3) Returning Functions
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);            //The returned function(inner function) from solve is stored in the ans, this treats the variable 'ans' as new function ans().

// let finalAns = ans(10);        //the new function is then called with parameter as 'ans(10)'.
// console.log(finalAns);


// 4) Storing function in Data Structure
// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
//     // Here multiple functions are stored inside Data Structure Array at indexes 0,1,2 resp.
// ]
// let first = arr[0];           //storing the 1st func of the array in the variable first.
// let ans = first(5,10);        //passing the parameters to the newly created function
// console.log(ans);

// let second = arr[1];           
// let ans2 = second(5,10);        
// console.log(ans2);

// let third = arr[2];           
// let ans3 = third(5,10);        
// console.log(ans3);


// 5) Function inside an Object

// let obj = {
//     name : "Rohit",
//     age : 22,
//     ht : 172,
//     greet : ()=>{
//         console.log("Hello !!",obj.name);
//     }
// }
// console.log(obj.age);
// obj.greet();


// console.log(greet);  // printing the reference of the variable 'greet', but it gives error because it has been declared using let.
// greet();             // Calling the function before definition gives error

// let greet = function(){
//     console.log("Hello world!!");
// }

// console.log(greet);      //Now if we print the reference of the variable greet, it gives undefined and not any error, because it has been declared using var.
// var greet = function(){
//     console.log("Hello world!!");
// }























































































































