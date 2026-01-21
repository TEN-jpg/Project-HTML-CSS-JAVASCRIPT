// function hello(para1, para2){
//     console.log("Hello Wrold");
// }
// hello();

// //Arrow Functions - Can be stored in a constant variable is most common in Modern JS
// const arrowMul = (a, b) => {
//     console.log(a * b); or return a*b
// }

// console.log(arrowMul) --> (a, b) => {
//                               console.log(a * b);
//                            }

// console.log(arrowMul(3, 2)) --> 6

// const printHello = () => console.log("Hello");     NON-Paramitarized and Single-line Arrow Functions 


// const vowels = (str) => {
//     let cnt = 0;
//     for(const n of str){
//         if(n === "a" || n === "e"|| n === "i"|| n === "o"|| n === "u"){
//             cnt++;
//         }
//     }
//     return cnt;
// }


//Higher order function/Method are those who take another function as their parameter or they either return a function as their output

//Eg:- 
//fucntion abc(){
//   console.log("hello");
// }

//function anotherFUN(abc){  --- Takes another function as a parameter
//     return abc;
// }
    
    
//For Each loop
//arr.forEach(callBackfunction) -- A callBackfunction is a function passed as an arguments to another function

// let arr = [1, 3, 4, 5];
// arr.forEach((val, idx, arr) => {   --- Here the callBackFunction is function to execute for each element in array
//     console.log(val, idx, arr)     --- For each generally take 3 parameter value, index, arr(Array itself)
// })

// arr.forEach((val) => {
//     console.log(val**2);
// })


//Map
//Same as forEcah it also take three parameter but generally used only val is used as parameter. And it's main purpose is that an forEach is used only to perform a operation on our array val and map can be used for the same but it can return a new array of the operation performed values

// let arr = [1, 3, 4, 5];
// let newArray = arr.map((val) => {
//     return val**2;
// })
// console.log(newArray);


//filter 
//Creates a new array of elements that gives true for a condition/filter


// let arr = [1, 3, 4, 5];
// let even = arr.filter((val) => {
//     return val%2 === 0;
// })
// console.log(even);


//Reduce -- Many input but single output
// let arr = [1, 3, 4, 5, 2, 9, 6];   The res is the first value(1) and curr is the second val(3) after the calculation res becomes 3 and then curr moves forward and so if the curr is greater the res gets updated
// const output = arr.reduce((res, curr) => {               
//     return res > curr ? res : curr;
// })
// console.log(output);  --- 9 -> single output


// let marks = [50, 98, 97, 23, 40];
// let mark = marks.filter((val) => {
//     return val > 90;
// })
// console.log(mark);  --> [98, 97]


// let input= prompt("Enter number")
// let arr = [];
// function built(arr){
//     for(let i=1; i <= input; i++){
//     arr.push(i);       or arr[i-1] = i;
// }}
// built(arr);
// console.log(arr);

// const sum = arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log(sum);

// const factorial = arr.reduce((res, curr) => {
//     return res * curr;
// })
// console.log(factorial);







