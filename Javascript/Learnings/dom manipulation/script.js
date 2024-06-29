const body = document.body;

// adding elements
body.append("hello World");

const div = document.createElement("div");
div.innerText = "Hello World";
div.textContent = "HEllo World";

body.append(div);

// modify element
const strong = document.createElement("strong");
strong.innerHTML = "<br>Hello World 2";
div.append(strong);

//remove Element
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove();
div.append(spanBye);

document.querySelector("body > div").removeChild(spanHi);

//modify element attribute
const spanHello = document.getElementById("hello");
console.log(spanHello.getAttribute("title"));
console.log(spanHello.setAttribute("title", "hihi"));

// remove attriubute
spanHello.removeAttribute("id");

//data attribute
console.log(spanHello.dataset);
console.log(spanHello.dataset.longerName);
//add data attibute
spanHello.dataset.newName = "hello name";

//modifying element class
spanHello.classList.add("new-class");
spanHello.classList.remove("hi1");
spanHello.classList.toggle("hi3");

//modify style
spanHello.style.backgroundColor = "red";
