// Objects in JavaScript

// let obj = {
//     // "name" : "Love"                  //we can use "" for key 
//     name : "Love",                      //but it is not compulsory 

//     // It is compulsory to give comma(,) after every key-value pair

//     // "full name" : "Rohit Chauhan"    //If 'key' is having spaces in it's name then "" is compulsory

//     age : 25,
//     weight : 85,
//     height : "5ft 4in",
//     // Creating function inside a object
//     greet :function(){
//         console.log("Hello Ji Kaise ho saare");
//     }
// };
// // console.log(obj);
// obj.greet();

// console.log(typeof(obj));

// When we try to make a copy of the existing object 
// let obj2 = obj;
// Here , obj2 named reference gets created in the stack memory but NO new object is created in the Heap memory 
// Rather, the new reference created in the stack also points to the same object data in the Heap memory
// This is called as |Shallow Copy| : Copies the object's top-level properties, but nested objects are shared between the original and the copy

// A)Creating a Shallow Copy
// let person = {
//     name : "Alice",
//     age : 30,
//     address : {
//         city : "Wonderland",
//         street : "123 Main strt"
//     }
// };
// You can create a shallow copy of this object using Object.assign() or the spread operator (`...`).
// 1) Using Object.assign():
// let shallowCopy = Object.assign({},person);
// shallowCopy : It is the variable where the copy is stored 
// Object.assign() : Copies the properties from person to {} 
// Target Object `{}` : It is the target object where the properties are stored (empty object)
// Person : It is the source object from which the properties will be copied
// console.log(shallowCopy);
// ** After creating a shallow copy, if you change a primitive property in the copy, it doesn't affect the original object.**
// shallowCopy.name  = "Rohit";
// console.log(person.name);

// **However, if you change a property of the nested object in the copy, it does affect the original object.**
// It does not copy the nested objects as a whole.
// Rather it copies the reference of the nested objects that's why it is able to make changes to the original properties of the nested obj
// shallowCopy.address.city = "Nashik";
// console.log(person.address.city);

// 2)Using Spread Operator (...):
// let shallowCopy = {...person};
// console.log(shallowCopy);

// B) Deep Copy : After creating a deep copy, any changes made to the properties of nested objects in the deep copy do not affect the original object:
// It not only copies the top-level properties of the object but also recursively copies all nested objects and their properties. This means that changes made to the properties of nested objects in the deep copy do not affect the original object or any other copies.


// let people = {
//     name : "Robot",
//     age : 60,
//     address : { 
//         city : "Wonderland",
//         street : "123 Main strt"
//     }
// };
// Creating deep copy using JSON Serialization
// let deepCopy = JSON.parse(JSON.stringify(people));
// console.log(deepCopy);
// deepCopy.name = "rohit";
// console.log(person);                 //Not Affected

// deepCopy.address.city = "Nashik";
// console.log(person.address.city);    //Not Affected


// Arrays : It is a collection of items/elements 
// Items can be anything , it can be object, array, functions, number, string, etc.
// It can store everything , it can be primitive or non-primitive

// Methods of creating array
// 1) Array Literal (using [])
// let arr = [1,2,3,4,5,6];
// console.log(arr);

// 2) Array Constructor

// let brr = new Array('love',1,true);
// console.log(brr);

// console.log(typeof(arr));
// console.log(typeof(brr));

// Accessing the elements of Array
// console.log(brr[0]);
// console.log(brr[1]);
// console.log(brr[2]);

// Methods in Array
// 1) Push Method : Adding at the end(rightmost side) of Array
// brr.push ('Rohit');
// console.log(brr); 

// 2) Pop Method : Removing from the end(rightmost side) of Array
// brr.pop();
// console.log(brr);

// 3) Shift Method : Removing the first element (leftmost side) of Array
// brr.shift();
// console.log(brr);

// 4) UnShift Method : Adding the first element (leftmost side) of Array
// brr.unshift('Babbar');
// console.log(brr);

// 5) Slice : Creating a part of the Array (shallow Copy). It is similar to creating a Substring.
// brr.shift();
// brr.unshift('Love Babbar');
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr.slice(2,4));      //This gives the removed elements 
// including the element at 2nd index and excluding the element at 4th index
// brr.slice(2,4);       //It just picks out the specified elements, and does not modified the actual array
// console.log(brr);     //This gives the modified array, but since the array is not modified, it returns the same array


// 6) Splice : We can change the content of array, we can either insert, replace, remove.
// Syntax : array.splice(start, deleteCount, item1, item2, ...)
// brr.splice(1,2,'Kunal');                //index=1 se do✌ value remove karo aur wahan par Kunal insert karo
// console.log(brr);                       //If we do console.log(brr), it gives the modified array
// console.log(brr.splice(1,2,'Kunal'));   //if we do like this, it gives the removed elements

// brr.splice(1,0,'Kunal');            //Inserting Kunal at index 1 without removing any element
// console.log(brr);


// 7) Map : Picks the elements of an array, process them through a function(inside the Map) and then gives output again in form of Array.
// let arr = [10,20,30,40];
// let ansArray = arr.map((value) =>{    //Here we are storing the ans in resultant array 'ansArray'
//     return value*value;
// })
// console.log(ansArray);                 //Returns the square of each element of the array

// let ansArray = arr.map((number,index) =>{                    
//     console.log(number);     //We can also print inside the Map function
//     console.log(index); 
// })


// 8) Filter : Filtering the elements of the array. filter is in the form of function
//             The filter method tests each element in the array.
//             If the test function returns true, the element is included in the new array.
//             If the test function returns false, the element is excluded from the new array.
// let arr = [10,20,30,11,21,44,51];
// let evenArray  = arr.filter((number)=>{
//     return number%2===0;            //short-hand : directly returning the condition instead of writing the if-else
//     // if(number%2===0){
//         // return true;             //If it returns true for any element then that element will be included in the resultant array
//     // }
//     // else{
//     //     return false;            //If it returns false for any element then that element will be excluded in the resultant array
//     // }
// });
// console.log(evenArray);


// let arr = [1,2,'love','kunal',null];
// let ansArray = arr.filter((value)=>{
//     return typeof(value)==='string';
//     // if(typeof(value) === 'string'){      //Since the output of typeof() is always is a String, so we have to check it with a string type only.
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });
// console.log(ansArray);

// to get the null value as output
// let ansArray = arr.filter((value)=>{
//        return value===null;
// });
// console.log(ansArray);


// to get the number value as output
// let ansArray = arr.filter((value)=>{
//        return typeof(value)==='number';
// });
// console.log(ansArray);


// 9) Reduce() : Reduces an array into a single value. We can apply various mathematical opr on elements to get single value.
// It consists of two variables 'accumulator' and 'currentValue'
// 'Accumulator' by default takes the first element of array as initialization, if we don not initialize it.
// And 'currentValue' takes the second element
// But if we we initialize 'Accumulator' with some value then 'currentValue' takes the first element.

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr;
// }, 0);                 //This 0 is the initialized value of accumulator
// console.log(ans);
// Here we are assigning the value of 'accu', so 'curr' directly goes to the first element and operation is performed. 
// The result of operation is again stored in the 'accu', and 'curr' goes to the second element.
// Again value of 'accu' changes. And when there is no value for 'curr' to go further, then value of 'acc' is returned.

// 10) a) sort() : Sorts the array in increasing order
// let arr = [1,4,2,5,0,3];
// arr.sort();
// console.log(arr);

//     b) sort() + reverse() : Sorts the array in decreasing order
// arr.sort();
// arr.reverse();        //If we only use reverse , it just reverses the array, that's why we should use sort() with reverse() to sort in descending order
// console.log(arr);


// 11) indexOf() : Finds and gives the index of an element in the array
// let arr = [1,4,2,5,0,3];
// console.log(arr.indexOf(3));

// 12) find() : You give find() a set of instructions.These instructions are written in a function that checks each item in the array.
// find() goes through the array, one by one, asking your function if the current item is the one you're looking for (based on your instructions).
// If your function says "YES!" (returns true), find() stops searching and returns that item.
// If find() reaches the end of the array and none of the items matched your instructions, it returns "not found" (technically undefined).

// let fruit = ['apple','banana','cherry','orange'];
// let redFruit = fruit.find((f)=>{           //Here we are creating a func 'f' and giving the condition that the fruit is a 'apple'.
//     return f==='apple';
//     // if (f === 'apple'){
//     //     return true;
//     // };                               
// });
// console.log(redFruit);


// 13) forEach() : If we want to perform a operation on each element in the array.
// let arr = [10,20,30];

// // traditional For loop
// let length = arr.length;
// for (let index = 0; index<length; index++){
//     console.log(arr[index],index);
// };

// // forEach loop
// arr.forEach((value,index) =>{
//     console.log("Number : ",value ,"index : ",index);
// });

// arr.forEach((value,index)=>{
//     console.log(value+index);
// });

// 14)forIn() : Iterating over the enumerable properties of any object.

// let obj = {
     
//     name : "Love",                      
//     age : 25,
//     weight : 85,
//     height : "5ft 4in",
//     greet :function(){
//         console.log("Hello Ji Kaise ho saare");
//     }
// };

// for (let key in obj){       //Iterating over the keys and printing the keys.
//     console.log(key);
// }
// for (let key in obj){       //Iterating over the keys & values and printing both.
//     console.log(key," ",obj[key]);
// }


// 15) forOf() : Iterates over the values of iterable objects like arrays, strings, maps, and sets. 
// Picks and gives us one-one value of the string Or array 
// let arr = [10,20,30,40];
// for (let value of arr){
//     console.log(value);
// }

// let fullName = "Rohit chauhan";
// for (let val of fullName){
//     console.log(val);
// }

// 16) Arrays with Functions
// let arr = [10,20,30,40,50];

// function getSum(arr){
//     let len = arr.length;
//     sum = 0;
//     for (let index = 0; index<len; index++){
//         sum = sum+arr[index];
//     }
//     return sum;
// }
// let total = getSum(arr);
// console.log("Total sum is : ",total);


// Using forEach() in function
// let arr = [10,20,30,40,50];

// function getSum(arr){
//     let sum=0;
//     arr.forEach((value)=>{
//         sum = sum+value;
//     })
//     return sum;
// }
// let total = getSum(arr);
// console.log("Total sum is : ",total);





