class human{
    // A) Properties
    // Since we have not given the access modifiers such as public , private , protected 
    // These members are explicitly marked as public
    
    // Public
    age = 21;
    #wt = 80;     //Private : Here we can mark private using '#'.Private members can be accessed inside the class curly braces only 
    ht = 160;

    // Initializing the members
    constructor(newAge,newHeight,newWeight){
        this.age = newAge;       //Assigning the value of newAge to the property age
        this.ht = newHeight;
        this.#wt = newWeight;    //initializing private members
    }

    // B)Behaviour
    walking(){
        // console.log("I am Walking");
        console.log("I am Walking",this.#wt);
        // Here 'this' represents the current obj to access the private member inside a class.
    }
    running(){
        console.log("I am Running");
    }
    
    // To get the value of private members we use getters and setters 
    // getters : Use to fetch the value of private members outside the class.
    // setters : Use to update, set , modify the value of private members outside the class.

    // This increases the Encapsulation and creates an abstraction layer.
    // Encapsulation: Bundling data and its operations together for protection and organization.
    // Abstraction: Hiding complexity and exposing essential functionalities for simpler interaction.
    
    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt = val;
    }
}

let obj = new human(50, 190, 101);
// console.log(obj.age);
// console.log(obj.ht);
// console.log(obj.fetchWeight);          //Cannot be accessed(as it is private),but it can be accessed after using get and set.
// obj.walking();


// ***DEFAULT Parameters in Js***
//                   Default Parameter <---------------------------------------------------------
// function sayName(myName = "Rohit"){                                                      //   |
//     console.log("My name is : ",myName);                                                 //   |
// }                                                                                        //   |
//                                                                                          //   |
// sayName();                 //If we are not passing the value it will take the default value-->|
// sayName("Love");        //If we are passing the value it will print Love. 


// A)fName and lName are multiple default parameters
// function sayName(fName="Rohit",lName = "Chauhan"){
//     console.log("My name is : ",fName," ",lName);
// }

// sayName();

// B)Last Name dependent on first name
// function sayName(fName="Rohit",lName= fName.toUpperCase()){
//     console.log("My name is : ",fName," ",lName);
// }
// sayName();
// sayName("Love");


// C)Exploring the case where the Default Parameter is an Object

// function solve(value ={age:25,wt:90,ht:190}){
//     console.log("Hello Ji",value.wt);
// }

// // solve(15);
// solve();

// D)Array as a Default Parameter 
// function solve(value=["Love","Rohit","Preetam"]){
//     console.log("Hello Ji",value);
// }

// solve(15);
// solve();

// E) Null as a Default Parameter

// function solve(value="Rahul"){
//     console.log("Hello Ji",value);
// }
// solve(null);                    //Rahul is Replaced by null


// F) Undefined as a Default Parameter (undefined does not replace the default parameter)
// function solve(value="Rahul"){
//     console.log("Hello Ji",value);
// }
// solve(undefined);                 //Rahul is NOT Replaced by udefined


// G) Function as a Default Parameter

// function getAge(){
//     return 190;
// }

// function utility(name="Love",age= getAge()){
//     console.log(name," ",age);
// }

// utility();

