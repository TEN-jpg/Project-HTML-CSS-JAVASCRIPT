// const page = {
//     personName : "Ten",
//     isFollow : true,
//     posts : 195,
//     followers : 569000,
//     following : 4,
//     Bio : "I need a j*b"
// };

// console.log(page);

// post and pre Increment and Decrement

/*a++ :- Means first if any operation is to done it will be performed the a value will be incremented
++a :- Means first the value will increment by 1 the the operation will be done
let a = 5;
console.log(++a) -- 6
But console.log(a++) -- 5 after if we print the a value it will be 6
Same of Decrement*/


//Comparsion Operator
/*So if we compare a = 5 which a number and b = "5" which is a string what JS does is it will first convert the b which is a number to string and then compare it with a 
SO, 
console.log(a == b) -- true
console.log(a != b) -- false
But, if we want to check it with out any conversion of datatype so we use strict comparasion operators
console.log(a === b) -- false    Equal to & type
console.log(a !== b) -- true     Not Equal to & type
So what it does is it doesn't convert the string to number rather directly compare two things is the value equal to and is the datatype same*/

// let n = 3;

// if (n % 2 == 0){
//     console.log("Even")
// } else {
//     console.log("odd")
// }

/* If we want only one condition to run after the check we can use this syntax but it is not a good practice
let mode = "dark";

if (mode === "dark") console.log("dark")*/


/* Ternary Operators

let age = 16;

let result = age > 18 ? "adult" : "not adult"
console.log(result)

Can write like this to 
age > 18 ? console.log("adult") : console.log("not adult) But this is not good practice as the line becomes big and unreadable and here we should instead use if-else as ternary operator are use as a simple and compact if-else*/

// alert("Warning!");  Gives a alert on our page

/*let input = prompt("hello");   Used to take input for the user
console.log(input); */

// let num = prompt("Enter a number");

// if (num % 5 == 0){
//     console.log("True")
// } else {
//     console.log("False")
// }

// let score = prompt("Enter Your Score");

// if (score <= 100 && score >= 90){
//     console.log("Grade : A")
// } 
// else if (score <= 89 && score >= 70){
//     console.log("Grade : B")
// }
// else if (score <= 69 && score >= 60){
//     console.log("Grade : C")
// }
// else if (score <= 59 && score >= 50){
//     console.log("Grade : D")
// }
// else {
//     console.log("Grade : F")
// }


/*FOR - LOOP */

// for (let i=1; i<=5; i++){      HERE if we declared the i variable like var i then the i variable will be accessible outside the for-loop block
//     console.log("i = ", i);
// }

// let i = 1;
// while (i <= 5){
//     console.log("i = ", i);
//     i++;
// }

// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// }while(i<=5);


/*For-of loop
Used in strings and arrays
*/

// let str = "Ten";
// let size = 0;
// for (let val of str){
//     console.log("val=", val);
//     size++;
// }
// console.log(size);

//For-in loop -- Used in strings and Objects

// let student = {
//     name : "Ten",
//     roll : 3,
//     age : 21,
//     cgpa : 8.5
// }

// for (let key in student){
//     console.log("key=", key, "value=", student[key]) //Here we don't use student["key"] otherwise it will find for a key in name "key" in the object
// }

// let guess = 80;
// let ask = prompt("Guess a number");     //THE PROMPT gives us the value by default in a string form like "45" so we don't compare the datatype !== jsut compare the values
// while (ask != guess){
//     ask = prompt("You guessed wrong, Guess again");
// }

// console.log("Congrats You Guessed the right number")



//Strings in JS

//let str = "ten"
//str.length --> 3
//str[0] --> t


//Template Literals in JS
//These are strings only but are written in back-ticks (``) and are used to write embedded expression in strings
 
// let specialString = `This is a template`

// // Eg :- 
// let obj = {
//     item: "pen",
//     price: 10
// }
// console.log("this is a", obj.item, "and it's price is", obj.price) //This is in efficient and hard to write with strings

// console.log(`this is is ${obj.item} and it's price is ${obj.price}`) 
// Eaiser and understandable to write and read ALSO the price 10 in the above it's datatype is number but in the back-ticks it becomes part of string so it will be not highlighted on the console

// console.log(`This is the sum ${1 + 2 + 3}`); --> 6
//Can wrtie any expression in the embedded expression as the expression values will be first calculated and the printed this is process of adding embedded expression is know as "STRING INTERPOLATION"

// console.log(`Ten\nTative`); Ten
//                             Tative


// let str = "TEN\tTATIVE";
// console.log(str.length)  --> 10 as the escape character length is counted as 1 for and isntead of 2 for \ and t individually 

//STRING METHODS

// str = "Tentative";
// str.toUppercase();
// str.toLowerCase();
// str.trim(); --> REMOVES THE EXTRA SPACE FROM THE START AND END THE MIDDLE SPACE WILL BE LEFT AS IT IS
// str.slice(1, 8); --> THE End value is not inclusive so the output is "entativ"
// str.slice(0); --> Will give the enter string
// str1.concat(str2); --> Same as str1 + str2

// str = "hello"
// console.log(str.replace("lo", "p")); --> help
// str = "hellololo"
// console.log(str.replace("lo", "p")); --> helplolo ONLY ONE TIME REPLACING
// console.log(str.replaceAll("lo", "p")); --> helppp for multiple use replaceAll()
// str.charAt(2); --> n

// let ask = prompt("Enter your full-name");
// let userName = "@" + ask + ask.length;
// console.log(userName);

