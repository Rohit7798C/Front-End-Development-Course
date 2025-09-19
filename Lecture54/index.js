//Code 1 

const t1 = performance.now();
for(let i = 1;i<=100;i++){
    //generating the paragraph
    let para = document.createElement('p');

    //Insert some text content into it
    para.textContent = "This is para" + i;

    //Inserted it into the body
    document.body.appendChild(para);
    //attaching directly to the document.
}
const t2 = performance.now();
// We have a standard way in Js, using which we can find out how much time my code is taking to run.
// The method is : performance.now() method -> It gives a timestamp.
// We have to find the timestamp at the start of the code as above(t1) and then find the timestamp at the end of the code(t2).
// And then we can finally find the difference of the two, which gives us the exact time of execution of the code.
// And we can print it on the console a below.
// It gives us very much accurate values, that's why it is a Standard way.
console.log("Total time by code 1 : " + (t2 - t1));    
// Output : 1.4 sec





//Code 2
const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i = 1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    //Rather than appending this 'para' directly into the 'body' as we have done in the above code 1
    //We are adding it into the 'mydiv'
    mydiv.appendChild(para);
}
//And after coming out of the above we are attaching the 'div' into the 'body'.
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time by code 2 : " + (t4 - t3));
// Output : 0.4 sec

// So, from the comparison of above two codes, we can see that second code is more faster.
