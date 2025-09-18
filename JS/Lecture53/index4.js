// Interview Question
// Avoiding too many eventListeners
// Now we have four paragraphs inside a single div
// And now we want that whenever we click on a particular para, it will print.
// For this, we will have to insert an eventListener for each of the paras, but it will not be efficient and become bulky
// So, the solution is selecting all the paras at once using document.querySelectorAll('p').
// And applying for loop on the addeventListener().

//Selecting all the paras at once
let paras = document.querySelectorAll('p');

// for(let i = 0;i<paras.length; i++){
//     //picking one para at a time.
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("You have clicked on para : " + (i+1));
//     });
// }


//But as we know that using the function inside the addeventListener() is a bad practice, and due to loop we are creating that function again & again for each para.
//So, to avoid this we have to create the function outside the addeventListener().
function alertPara(){
    //Niche diye gaye 'if-statement' ki madat se
    //Agar hum span tag ke content par click karenge to sirf Span tag ka hi content dikhega
    //Baki paragraph ke content pe click karne se kuch nahi hoga
    // In this way we can setup a conditional behaviour using 'event.target.nodeName'.
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on para : " + event.target.textContent);
    }
                                        //'event' jo aya hai uske andar jo 'target' hai, uss target ke andar 
                                        //tumhare pass jo bhi 'information' (textContent) hai woh print kar sakte hai.
}
// - target property -
//Jaise hamare addeventListener ko 'event' mil raha tha, isi event ke through hum ek 'target' property ka use kar sakte hai.
//'target' property hamare event ke baare mein aur information provide karti hai.
//'target' matlab jiss element pe click karoge woh element bata dega yeh.
//Agar hum paragraph par click karte hai, toh pura statement(span + para) print hoga, aur agar hum sirf span tag ke content pe click karte hai toh sirf wahi print hoga.
//This is how target works.


// for(let i = 0;i<paras.length; i++){
//     //picking one para at a time.
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }


//But here, as we can see that we are mapping each and every para to the addeventListener() which is a lot.
//Rather we can pick the div itself and apply addeventListener() on it only.
//Optimal Solution
let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);