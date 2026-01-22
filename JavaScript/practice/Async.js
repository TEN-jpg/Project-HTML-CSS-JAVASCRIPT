// setTimeout(() => {
//     console.log("hello");
// }, 4000) // timeout = 4s = 4000ms

// // Will print the hello after 4s


// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000)

// console.log("three");
// console.log("four");  // These two code will be excuted while the hello is being processed and after 4s hello will be printed this is called Asynchronous Programming

//----------------------------------------------------------------------------------------
//Callback - Are functions send as an argument in another function

// let sum = (a,b) => {
//     console.log(a + b);
// };

// let display = (a, b, sumCallback) => {
//     sumCallback(a, b);
// };

// display(1, 2, sum); // sum function passed as argument

//------------------------------------------------------------------------------
//Callback Hell - Neseted callbacks stacked below one another forming a pyramid like structure(Pyramid of Doom) makes the code difficult to understand

// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

//callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

//-------------------------------------------------------------------------------
//Promises - Promise is for "eventual" completion of task. It is an object in JS and is solution to callback hell
//resolve & reject are callbacks provided by JS

// let promise = new Promise((resolve, reject) => {
//     console.log("hello");
//     resolve("completed");
// })

// let promise = new Promise((resolve, reject) => {
//     console.log("hello");
//     reject("some error ocurred!");
// })


//Promises has three states 
//pendig, fullfilled and rejected
//Below are just example of how promises are created in real-life we get them from the API

// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", dataID);
//         resolve("Completed");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);  //First the promise is returned to us so we can store it and if we print promise it's status will be pending but after 5s if we print promise it is Completed
//     });
// }

// function getData(dataID, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         // console.log("data", dataID);
//         reject("error");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);  //First the promise is returned to us so we can store it and if we print promise it's status will be pending but after 5s if no data is recevied the promise gives an error as the reject will run
//     });
// }

//.then and catch

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         // resolve("completed");
//         reject("due to network");
//     });
// }; 

// let promise = getPromise();
// promise.then((res) => {  --> This will only run when a promise is FullFilled
//     console.log("Promise Completed", res);
// });
    
// promise.catch((err) => {  THis will only run when a promisse is Rejected
//     console.log("Error Ocurred", err);
// });


//Promise Chain

// const asynFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };

// const asynFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data1...");
// let p1 = asynFunc1();
// p1.then(() => {
//     console.log("fetching data2...");
//     let p2 = asynFunc2();
//     p2.then(() => {});
// });

//Compact way of writing the above code

// console.log("fetching data1...");
// asynFunc1().then(() => {
//     console.log("fetching data2...");
//     asynFunc2().then(() => {});
// });

//Above Callback hell example with Promise Chain

// function getData(dataID) {                   // No need to use the getNextData as we are using Promise Chain
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("data", dataID);
//            resolve("Completed");
//         }, 2000);
//     });
// }

// getData(1)
//     .then(() => {  //So if fullfilled this .then() is returning us getData(2) that means a new Promise so to check if it is fullfilled or not we can just use another .then() on it to get the res
//         return getData(2);
//     })
//     .then(() => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })

//----------------------------------------------------------------------------------

//Async-Await - async function always returns a promise
//await - await pause the execution of its surrounding async function until the promise is settled

// async function hello() {
//     console.log("hello")  --> This function when will also give us a Promise who's status is fullfilled
// }


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("success");
//         }, 3000);
//     });
// }

// async function getWeatherData() {  --> When this function is called 1st await will execute first and then 2nd await
//     await api(); //1st this will be completed
//     await api(); //2nd this will be completed and then our promise is fullfilled
// }

//Above Promise Chain example with Async-Await

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("data", dataID);
//            resolve("Completed");
//         }, 2000);
//     });
// }

// async function getALlData() {        // IF we call this function all the awaits will start to execute one-by-one
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
// }

//-----------------------------------------------------------------------

//IIFE - Immediately Invoked function Expression
//They are immediately called as soon as defined
//They don't have a name
//They can't be called again because they don't have a name so to call them we have to copy-paste them again

//SO the above Async-Await function is something we have to call to get all the await inside it to execute so we can make it a IIFE function so it executes as soon as define

// (async function () {                   --> This will execute without any call as soon as defined
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
//     console.log("Getting data 3...");
//     await getData(3);
// })();