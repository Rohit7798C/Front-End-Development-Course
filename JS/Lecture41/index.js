// A) Arithmetic operator

let a=2;
let b=5;

// a)Binary Operators (Having two operands)
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// b)Unary Operators (Having single operands)
// let c=5;
// console.log(++c);       //Pre-increment
// 1)Pehele increment karo
// 2)fir use karo

// let d=10;
// console.log(d++);       //Post-increment
// 1)Pehele use karo
// 2)fir increment karo

// let e=12;
// console.log(--e);       //Pre-decrement
// 1)Pehele decrement karo
// 2)fir use karo

// let f=1;
// console.log(f--);       //Post-decrement
// 1)Pehele use karo
// 2)fir decrement karo


// B)Assignment Operator

// let a=2;
// let b=5;
// a=a+10; 
// a+=10;    //Short-hand Notation
// console.log(a);

// a=a-2;
// a-=2;     //Short-hand Notation
// console.log(a);

// C)Comparison Operators (True or False)

// console.log(10>5);
// console.log(10<5);
// console.log(10>=5);
// console.log(5<=5);
// console.log(50<=5);

// D) Loose Equality '=='(Only checks for the value and not for the datatype)
// console.log('5'==5);
// Loose Not Equal (!=)
// console.log(5!='5');


// E) Strict Equality '==='(Both datatype and value should be same)
// console.log('5'===5);
// Strict Not Equal (!==)
// console.log('5'!=='3');

// F) Ternary Operator 
// let age=25;
// let status1 =    (age>18)?  'I can vote' : 'I cannot Vote';
// variable       //condition   //output1      //output2
/* to store the 
 output string */
// console.log(status1);

// F) Logical Operator  (Merging of multiple logical conditions)
// 1) AND (&&)
// let ans = (true && true && true)
// console.log(ans);

// 2) OR (||)
// let ans = (false || false || true)
// console.log(ans);
// let ans = (false || false || false)
// console.log(ans);

// 3) NOT (!)
// let ans = !(false);
// console.log(ans);

// Working of Logical operator with Non-Booleans
// It works on only two values 
// 1)Falsey values               //2)Truthy values
/*  a)undefined                     -anything which is not falsey
    b)null
    c)0
    d)false
    e)NaN
    f)''
*/
// console.log(false||7);            //Output : 7
// console.log(false||7||11||18);    //Output : 7
// console.log(false || 'Rohit');    //Output : Rohit
// here 'false' is falsey value and remaining are truthy values 
// but the output in both cases will be 7 , because the compiler goes step by step 
// first it checks for the false , then 7 , then 11 and so on
// It continues to check until it finds a truthy value for '||' operator

// Short Circuiting :- As soon as it finds the first truthy value as 7 , it stops there and gives output as 7

// G) Bitwise Operator
// 1) Bitwise AND (&)
// console.log(2&5);
// Output : 0

// 2) Bitwise OR (|)
// console.log(2|5);
// Output : 7

// 3) Bitwise NOT (~ -> Flipping at bit level)                              
// console.log(~0);              /* Binary representation of ~0 : 11111111111111111111 (Here most significant bit(Leftmost) is 1)
// Output : -1                      this indicates that it is a (-ve) number, so to represent a (-ve) number we use 2's compliment
//                                  1's compliment : flipping all the bits to 0
//                                  2's compliment : Adding 1 to 1's compliment
//                                  So it gives 1 as output and with (-ve) sign   */

// 4) Bitwise XOR (^);
//when things are same they will cancel out (0), otherwise 1
// 0^0 = 1^1 = 0
// console.log(2^3);
// console.log(0^0);

// 5) LeftShift Operator (<<)
// We shift the bits to left by one place and put a 0 at the vacant space to the right
// This results in multiplying the number by 2 once
// console.log(5<<1);
// console.log(5<<2);
// This results in multiplying the number by 2 twice

// 5) RightShift Operator (>>)
// We shift the bits to right by one place and the last bit placed to right will be lost
// This results in dividing the number by 2 once
// console.log(10>>1);
// console.log(40>>2);
// This results in dividing the number by 2 twice


//CONDITIONALS (if-else)

// If condition is True then we enter the first block of Code 
// If condition is false then we directly enter the second block (else block) of code and exit
// let age = 23;
// if(age>=18){
//     console.log("You can Vote")
// }
// else{
//     console.log("You cannot vote");
// }

// if-else statement
// If one of the statements gets 'true' then it gets executed and we exit
// let num = 4;
// let age=104
// if(num==1){
//     console.log('A');
// }
// else if(num==2){
//     console.log('B');
// }
// else if(num==3){
//     console.log('C');
// }
// else if(num==4){
//     if(age>18){            //nested if-statement
//         console.log("I can vote!")
//     }
//     console.log('D');
// }
// else if(num==5){
//     console.log('E');
// }
// else { 
//     console.log('F')
// }


//SWITCH STATEMENT

// let num=3;

// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     break;
//     default: console.log('E');
// }

