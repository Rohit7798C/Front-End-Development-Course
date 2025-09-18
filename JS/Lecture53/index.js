//Creating a function to apply on an Event
function changeText(){
    let para = document.getElementById('fpara');
    fpara.textContent = "Hello Babbar";
    //Changing the text
}
//getting the element
let para = document.getElementById('fpara');

//konse element par eventListener() apply karna chahate ho -> fpara
fpara.addEventListener('click', changeText);
//Kiss event ke liye apply karna chahate ho -> 'click'
//Aur yeh event hone par kya action perform karna chahate ho -> changText().

// Syntax : 
// <event-target>.addEventListener(<event-type>,<function->action>)


//Removing the EventListener
// fpara.removeEventListener('click', changeText);
//Condition : The listener(function) - (changeText) that we have passed in the remove should be as same as in the Add.

//Here we are able to remove the eventListener function because, the function is written separately, from both adding and removing.
//But, if we insert the function in the add and delete syntax itself then we will not be able to remove the eventListener function.
//Like below,
                //Adding the function 
                // fpara.addEventListener('click', function(){
                //     let para = document.getElementById('fpara');
                //     fpara.textContent = "Hello Babbar";
                //     //Changing the text
                // });
                //Removing the function 
                // fpara.removeEventListener('click', function(){
                //     let para = document.getElementById('fpara');
                //     fpara.textContent = "Hello Babbar";
                //     //Changing the text
                // });
//This forces the same function to act as a different object in both the eventListeners.
//Whereas, in the previous case a single function was created and it was acting as a same object in both the eventListeners, due to which we were able to remove the function after adding for the same event.
