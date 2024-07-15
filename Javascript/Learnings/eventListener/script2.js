const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// remove event listener
parent.addEventListener("click",printHi);
parent.addEventListener("click",()=>{
    console.log("Only Once")
},{once:true});
setTimeout(()=>{
    parent.removeEventListener("click",printHi);
},3000);
function printHi(){
    console.log("Hi");
}

//event delegation
const divs = document.querySelectorAll('div');

// divs.forEach(div=>{
//     div.addEventListener("click",()=>{
//         console.log("div hi");
//     })
// })

//click only the div
// document.addEventListener("click", e=>{
//     if(e.target.matches("div")){
//         console.log("hi");
//     }
// })

// Function definition for adding a global event listener
function addGlobalEventListener(type, selector, callback) {
    // Adding an event listener to the entire document for the specified event type
    document.addEventListener(type, e => {
        // Checking if the event target matches the provided selector
        if (e.target.matches(selector)) {
            // If the target matches, invoke the callback function
            callback(e);
        }
    });
}

// Example usage:
addGlobalEventListener('click', 'div', e => {
    // Callback function that logs 'hi' to the console when a div is clicked
    console.log('hi');
});


const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);