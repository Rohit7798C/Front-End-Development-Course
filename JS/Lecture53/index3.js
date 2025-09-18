//- Default Action -

// Default Action of Anchor tag is link 
// <a> -> Anchor tag -> Takes us to a certain link.
// How can we change the Default behaviour of our anchor tag?

let anchorElement = document.getElementById('fanchor');

//Creating a function for the event
function changeDefault(event){
    // Preventing the Default behaviour of the Anchor tag.
    event.preventDefault();
    //changing the text content when clicked.
    anchorElement.textContent = "Click Done Bhai!";
}
//Using the above function below as a parameter.
anchorElement.addEventListener('click', changeDefault);









