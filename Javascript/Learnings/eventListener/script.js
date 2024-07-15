const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//add event listener basics
// grandparent.addEventListener("click", e =>{
//     // console.log(e.target);
//     // console.log(e);
//     console.log("Grandparent");
// });

// event bubbling
parent.addEventListener("click", e =>{
    console.log("Parent buuble");
});

child.addEventListener("click", e=>{
    console.log("child buuble");
})

document.addEventListener("click",e=>{
    console.log("Document buuble")
})

//evemt capturing
grandparent.addEventListener("click", e =>{
    // console.log(e.target);
    // console.log(e);
    console.log("Grandparent capturing");
}, {capture: true});

//stopping event propagation
grandparent.addEventListener("click", e =>{
    console.log("Grandparent buuble");
    e.stopPropagation();//stop bubling or capturing
});

//run event only once
parent.addEventListener("click", e =>{
    console.log("Only Once");
},{once:true})

