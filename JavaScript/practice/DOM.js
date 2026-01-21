//----------------------------------------------------------------------------
// Window Object :- Represents an open a window on browser. It is browser's object(Not Javascript's) & automatically created by the browser
// It is a global Object with lots of properties & methods
//console.dir(window) -> prints are window objects

// console.log("hello!")
// window.console.log("hello2!") -- console is an object of window so it works but we use it without specifying the window as are script 
// knows what window is as it a global object


// ----------------------------------------------------------------------------------
// Document :- When a web page is loaded the browser creates a Document object Model(DOM) of the page 
// Documents is basically a HTML model which stores objects used in our html
//Document is the major reason why we write our script tag before the end of the body tag as if we write it in head tag the document is read before the body tag so it will be null.
// console.dir(window.document) -> Prints the documents -> properties and attributes used in the html file like html,p,body,h1


//-----------------------------------------------------------------------------------
//Documents Manipulation
//Selectors

// let heading = document.getElementById("heading");
// console.dir(heading);

// let paragraphs = document.getElementsByClassName("lorem");
// console.dir(paragraphs); --> HTML COLLECTION is like an array with length

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let firstELemnent = document.querySelector("p"); --> Can take id,class or p and returns the firstElement matching it 
// console.dir(firstELemnent);

// let allELements = document.querySelectorAll("p"); --> Returns all the elements matching it
// console.dir(allELements);

// let firstElementclass = document.querySelector(".lorem"); --> when selecting class use "."
// console.dir(firstElementclass);

// let allElementclass = document.querySelectorAll(".lorem"); --> when selecting class use "."
// console.dir(allElementclass);

// let onlyElements = document.querySelector("#heading");
// console.dir(onlyElements);

//-----------------------------------------------------------------------------
//Domcument Manipulation
//Properties
 
// onlyElements.tagName; -> 'H1'

// let fruits = document.querySelector("div");
// console.dir(fruits);

// fruits.innerText; -> 
// 'Fruits\nmango\nbanana\napple'

// fruits.innerHTML; ->
// '\n        <h2>Fruits</h2>\n        <ul>\n            <li>mango</li>\n            <li>banana</li>\n            <li>apple</li>\n        </ul>\n    '

// let heading = document.querySelector("h2");

// heading.innerText = "abcd";
// heading.innerHTML = "<i>Fruits</i>"

//heading.textContent; -> Gives the innerText of hidden elements


//PRACTICE

// let text = document.querySelector("h2");

// text.innerText = text.innerText + "from TEN"
// console.dir(text.innerText);

// ----------------------------------------------------
 
// let boxs = document.querySelectorAll(".box");
// box[0].innerText = "div1";
// box[1].innerText = "div2";
// box[2].innerText = "div3";

// let idx = 1;
// for (box of boxs){
//     box.innerText = `div${idx}`;
//     idx++;
// }


// -----------------------------------------------------------------------
//Document Manipulation
//Attributes

// let head = document.querySelector("h1");
// console.log(head.getAttribute("id")); --> heading

// let para = document.querySelector("p");
// console.log(para.getAttribute("class")); --> lorem

// let head = document.querySelector("h1");
// console.log(head.setAttribute("id", "heading1"));  --> Change the attribute value

// --------------------------------------------------------------
//Style

// let div = document.querySelector(".box");

// div.style.backgroundColor = "green";
// div.style.border = "2px solid black";
// div.style.fontSize = "26px";

// ------------------------------------------------------------------
//Insert ELements

// let newBtn = document.createElement("button");
// newBtn.innerText = "click Me!";

// let div = document.querySelector(".list");
// div.append(newBtn);

// let div = document.querySelector(".list");
// div.prepend(newBtn);

// let div = document.querySelector(".list");
// div.after(newBtn);

// let div = document.querySelector(".list");
// div.before(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hello!</i>"

// document.querySelector("body").prepend(newHeading);


// newHeading.remove();
// newBtn.remove();


// ------------------------------------------------------------------
// PRACTICE

// let newBtn = document.createElement("button");
// newBtn.innerText = "click Me!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// document.querySelector("body").prepend(newBtn);

// let para = document.querySelector(".para");
// para.classList.add("newClass");   --> This helps in adding a new class to the element while keeping the CSS and other property of the element and the apply the property of the class being added.
// para.classList.remove("newClass");



//LEARN firstchild, lastChild and appendChild and removeChild