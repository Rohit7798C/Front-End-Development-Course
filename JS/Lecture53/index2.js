// - Event Object -

function changeText(event){
    //This prints the type of event in the Console.
    console.log(event);

    let para = document.getElementById('fpara');
    fpara.textContent = "Hello Babbar";
}

let para = document.getElementById('fpara');

fpara.addEventListener('click', changeText);
