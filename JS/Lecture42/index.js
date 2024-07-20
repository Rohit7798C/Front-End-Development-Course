// A) For Loop
// for (let i =1;i<=10;i++){
//     console.log("Rohit");
// }

// for (let i =1;i<=5;i++){
//     console.log(i);
// }

//Reverse Counting

// for(let i=5;i>=1;i--){
//     console.log(i);
// }

//Using Break Keyword
// for (let i =1;i<=5;i++){
//     if(i==4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//Using Continue Keyword : Skip the current iteration and move to the next iteration

// for(let i=1;i<=5;i++){
//     if(i==3)
//         continue;     //directly moves to increment part from here
//     else
//         console.log(i);
// }


// B) While Loop

// let i=1;              //initialization
// while(i<=10){         //condition
//     console.log("Rohit");
//     i++;              //updation
// }

// i=1;
// while(i<=6){
//     console.log(i);
//     i++;
// }

//Reverse 

// i=5;
// while(i>=1){
//     console.log(i);
//     i--;     
// }

//Break in while loop

// let i=1;
// while(i<6){
//     if(i==4)
//         break;
//     else
//         console.log(i);
//     i++;
// }

// let i = 1;
// while(i<=6){
//     console.log("Inside the loop")
//     if(i==5){
//         i++;              // To deal with the infinite loop we insert here increment to go to next iteration
//         continue;         //This tells to again check the condition ,
//         // Here we check for condition again and again which goes into infinite loop
//     }
//     else
//         console.log(i);
//     i++;
// }


// C) Do-while Loop

// let i=1;                  //initialization
// do{
//     console.log("Rohit");
//     i++;                  //updation
// }
// while(i<=10);             //condition


// let i=1;

// do{                             //For 1st iteration no condition is checked 
//     console.log(i);             //Which is why 1st iteration is guaranteed 
//     i++;                        //This is why do-while loop will execute at least once ,
// }                               //irrespective of whether condition is true or false 
// while(i<=6);


// Reverse in do-while loop

// let i=5;
// do{
//     console.log(i);
//     i--;
// }
// while(i>=1);



// C) Strings : Sequence of Characters written using "" OR ''

// let firstName = "Love Babbar";
// let lastName = 'Rohit';

// console.log(firstName);
// console.log(typeof(firstName));

// let name = "Rohit      //We cannot write the strings on separate lines using any of the "" OR ''
// Chauhan";

// But we can write it using Backticks (Template literals)
// we can write multi-line strings (it preserves the line breaks)

// let name = `Love 
// Rohit This is 
// my 
// hello`;
// console.log(name);

// Strings declared using "",'',``, are called as [String Literals]
// 1) It creates a primitive String
// 2) They are immutable (their values cannot be changed once created)
// 3) Faster and memory efficient as they are stored as primitive values

// Strings declared using 'new String()' are called [String Objects]
// 1) It creates an object wrapper around a primitive string
// 2) They are immutable , but object's properties can be changed
// 3) Slower and less memory-efficient because they involve object

// let firstName = new String("Rohit Chauhan");
// console.log(firstName);


// Operations on Strings

// 1) Concatenation using + operator

// let op1 = 'English ';
// let op2 = 'Hindi';

// let ans = op1 + op2;
// console.log(ans);


// 2) Concatenation using `` backticks
// let op1 = 'English ';
// let op2 = 'Hindi';
// We need to use $ sign to concatenate inside `` backticks 
// without which it prints the string as it is i.e. if we use + operator , it will print the + sign as it is 
// There is no need to use + operator inside backticks

// let finalAns = `${op1}${op2}`;
// console.log(finalAns);


// 3) Length of String
// let op1 = 'English ';
// let op2 = 'Hindi';

// console.log(op1.length);     //It also includes the blank space
// console.log(op2.length);


// 4) toUpperCase AND toLowerCase ( .toUpperCase and .toLowerCase )
// let op1 = 'English ';
// let op2 = 'HINDI';

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


// 5) Finding the SubString  (str.substring(start point(inclusive) , end point(exclusive)))

// let str = "Rohit";

// console.log(str.substring(2));     //starting from index 2

// console.log(str.substring(2,4));   //Giving both start and end points
// For 2nd method ending index is excluded


// 6) Using Duoble inverted ("") commas inside a String
    // let sentence  = "Hey this is Rohit here";
    // console.log(sentence);
    // But if we want "" in out output , then we use backslash(\)
    // let sentence  = "Hey this is \"Rohit\" here";
    // console.log(sentence);

    // Backslash(\) says that any character("") after me should be treated as a normal character and not as a special character
    // Backslash(\) apne baad wale character ki shaktiyan chiin leta hai
    // As String treats "" double quotes as a Special character

// 7) Splitting of Strings (sentence.split(' '))

// let sentence  = "Heythis is Rohit here";

// let words = sentence.split(' ');
// // Splitting on basis of Space 
// console.log(words);

let sent1 = "Hello \ji \kaise \ho \saare";
// For above 1st case '\j','\k','\h','\s' are considered, as escape sequence character , but since they are not , backslash(\) is ignored.
// So, it returns a simple string ignoring the backslash(\).
// It executes but no splitting is done, because the split() does'nt find any actual separate single literal backslash(\) to escape.

let sent2 = "Hello \\ji \\kaise \\ho \\saare";
// For 2nd case , first backslash(\) escapes the second, so first one becomes a single literal backslash(\).
// So the split function splits the string on basis of the remaining single literal backslash(\).

let splitUsingBackSlash1 = sent1.split('\\');
let splitUsingBackSlash2 = sent2.split('\\');
// We cannot split on basis of single backslash because it is treated as a special character
// We have to use \\ double backslash , because Backslash(\) apne baad wale character ki shaktiyan chiin leta hai
// each '\\' represents a single backslash character because the backslash itself needs to be escaped.
// This ensures that the backslash is treated as a literal character rather than an escape character.
console.log(splitUsingBackSlash1);
console.log(splitUsingBackSlash2);


// 8) Joining of Words to form a String (sentence.join('separator'))

// console.log(splitUsingBackSlash.join(','));
// console.log(splitUsingBackSlash.join('-'));


// let newSentence = "This is Rohit Chauhan";
// console.log(newSentence.split(' '));
// let splitted = newSentence.split(' ');
// console.log(splitted.join(''));
