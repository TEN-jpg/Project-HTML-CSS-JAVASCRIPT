//Event Function - Can handle one Event
// let btn = document.querySelector("#btn1");
// btn.onclick = () => {
//     console.log("This the JS Event ");
// };

//JS Events overwrite Inline Events

//-------------------------------------------------------------------------
//Event Object
// let div = document.querySelector(".div");
// div.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

//----------------------------------------------------------------------------
//Event listner - Can perform multiple Events

// let btn = document.querySelector("#btn1");
// btn.addEventListener("click", () =>{
//     console.log("button 1");
// });

// const handler2 = () => {
//     console.log("button 2");
// };
// btn.addEventListener("click", handler2);

// btn.addEventListener("click", () =>{
//     console.log("button 3");
// });

// //To remove the callback function should have the same referneces so we store the event that need to be removed in a variable 

// btn.removeEventListener("click", handler2);

//---------------------------------------------------------------------------
//Pratice
// let mode = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// mode.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else {
//         currMode = "light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });


