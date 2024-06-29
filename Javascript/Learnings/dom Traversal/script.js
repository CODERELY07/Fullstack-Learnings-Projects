const grandparent = document.getElementById('grandparent-id');
const parents = document.querySelectorAll(".parent");
// you can also use this
// const parents = Array.from(document.getElementsByClassName("parent"));

//selecting children element
//in order to use foreach method we need to use Array.from
//we will select the parents again but other method
const otherMethodParents = Array.from(grandparent.children);

otherMethodParents.forEach(changeColor);

//selecting the parentOne
const parentOne = otherMethodParents[0];
const children = parentOne.children[0];
console.log(children)
changeColor(children);

//call the function changeColor to change the background color
changeColor(grandparent);

//foreach element with class parent wil change color 
parents.forEach(changeColor);
   
//function to changeColor
function changeColor(element){
    element.style.backgroundColor = '#333';
}

//we can select element with variable
const childrens = grandparent.querySelectorAll('.child');

console.log(childrens);

//Selecting Parents
const childone = document.querySelector("#childone"); 
const parent3 = childone.parentElement;
const grandparent3 = parent3.parentElement;

parent3.style.background='red';
grandparent3.style.background='blue';

//Selecting Ancestors
const grandparent4 = childone.closest('.grandparent');
grandparent4.style.background='violet';

// select siblings
const childtwo = childone.nextElementSibling;
childtwo.style.background='yellow';

//previous
childtwo.previousElementSibling.style.background="green";