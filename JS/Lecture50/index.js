// A) Compile-time error.
// a) Syntax error
// console.log(1;      //Bracket is not complete which is visible before execution.

// B) Run-time error.
// a) Reference error
// console.log(x);       //x is not declared , it gives error after we execute the code.


// Error saare systems, softwares, programs mein aate hain , imp yeh hai ki hum errors ko kitne acche se handle kar paate hai.

// ERROR HANDLING IN JS

// Using try-catch block
/*try{
    // Hum 'try' block mein woh code rakhte hai jisme error aa sakta hai
    // Agar try mein kuch error aata hai toh woh error catch block pakad lega.
    console.log("try block starts here!!");
    // error -> reference error
    console.log(x);
    // agar line 19 mein kuch error ataa hai toh aage ke lines execute nahi honge.
    console.log("try block ends here");
    // a

    // b

    // c

}
catch(err){
    // Here we define the logic about what we are going to do with the error.
    //We can have the following 
    // 1) Retry Logic
    // 2) Fallback mechanism
    // 3) Logging
    // 4) Custom Error

    console.log('I am inside catch block');
    console.log("Your error is here!!",err);
}

// finally block : This will run everytime irrespective of whether error is there or not.


finally{
    console.log("I will run everytime as I am  finally block!!");
}
*/

// let's create a Custom error

// try{
//     console.log(x);
// }
// catch(e){
//     throw new Error("Bhai pehele declare karo , phir print karna!!");
// }


let errorCode = 100;
if(errorCode==100){
    throw new Error("Invalid JSON");
}




