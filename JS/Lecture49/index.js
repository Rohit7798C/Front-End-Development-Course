// Object is called Dynamic because we can change the properties of Object at run time

let obj = {
    age : 22,
    wt : 68,
    ht : 180
};

let obj2 = {
    value : 101,
    name : "Rohit"
}

// console.log(obj);
// obj.color = "white";          //We are adding a new property to the object.
// console.log(obj);

// Object Cloning

// 1) Using Spread Operator

// let dest = {...obj};         {...} this is a spread operator.
// // let dest = obj;           //This does not clone, it only copies the reference of the obj and changes are visible in both.
// obj.age = 90;

// console.log("obj : ",obj);
// console.log("dest : ",dest);

// Thus we have successfully cloned the object,
// because here we are changing the age value in obj after cloning but it is not changing in dest.
// And thus the original value is cloned in the dest.


// 2) Assign Method 

// let dest1 = Object.assign({},obj);
// Giving the empty object {} and copying the original object 'obj' into it.

// let dest1 = Object.assign({},obj,obj2);
// Copying obj into obj2

// obj.age = 90;

// console.log("obj : ",obj);
// console.log("dest : ",dest1);


// 3) Iteration Method

let dest3 = {};          //An empty object in which we will clone the properties of 'obj'.
// Cloning using iteration
for(let key in obj){
    let newKey = key;
    let newValue = obj[key];
    //insert the new 'key' and 'value' in dest and create a clone.
    dest3[newKey] = newValue;
}
obj.age = 90;

console.log("obj : ",obj);
console.log("dest : ",dest3);


// GARBAGE COLLECTOR : It helps in freeing the memory which is no longer in use to increase the application performance.
// There are two things : Garbage and memory leak
// **Garbage : Memory which is used and but not emptied.(Use karne ke baad delete karna chahiye tha garbage par nahi kiya)
// **Memory Leak : Memory which is not used still it is full.(Use hi nahi hua fir bhi memory full hai).

// We have no control over Garbage collector and it always runs in the background.







