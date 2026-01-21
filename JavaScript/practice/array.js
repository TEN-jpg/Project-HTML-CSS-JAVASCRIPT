// let marks = [45,20,23,80,47];
// console.log(marks.length); --> 5
// console.log(typeof(marks)); --> Object 
// So array is a object only internally but instead of key : values like in object here we use index : values


//Loop over an array
// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }

// With for-of loop
// for(let mark of marks){
//     console.log(mark)
// }

// let total = 0;
// let cnt = 0;
// let avg = 0;
// for(let mark of marks){
//     total += mark;
//     cnt += 1
// }

// avg = (total / cnt)
// console.log(avg)

let prices = [250, 600, 300, 900, 50];

// for(let i = 0; i < prices.length; i++){
//     let disc = prices[i] / 10;
//     prices[i] -= disc;
//     disc = 0;
// }
// console.log(prices)


//Methods

// unshift - add the values in start
// shift - delete from the start & return

// splice - change the original Array(add, remove, replace) --> three parameters
// splice(startidx, deletecount, newE1...)

// prices.splice(2, 3, 400,800)
// console.log(prices)

// let companies = ["Uber", "Zomata", "Bajaj"]
// companies.splice(0, 1, "Ola")
// companies.push("Amazon")
// console.log(companies)