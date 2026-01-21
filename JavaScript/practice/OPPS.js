// let student = {
//     fullName : "ten",
//     marks : 94.4,
//     display: function() {
//        console.log("marks is", this.marks);  --> student.display() when called will give the marks if we don't use the "this." keyword the object is not accessible
//     }
// };
        
        
//Protoypes 
//An JS object is an  entity having state and behaviour
//JS object have a special property called prototypes -- refrences to an object
//We can set prototype of an object wiht __proto__ keyword


// const employee = {
//     calTax() {
//         console.log("the tax is 10%");
//     }
// }

// const karan = {
//     salary: 50000
// }

// const arjun = {
//     salary: 60000,
//     calTax () {
//         console.log("the tax is 20%");
//     }      
// }

// karan.__proto__ = employee; --> This allows us to use the methods and function of employee in karan by using the prototype which give the refernce or address of the employee which allow us to acces it
//arjun.__proto__ = employee;  --> Since arjun has its own calTax and one from prototype if we call the function the objects function will be called i.e "the tax is 20%" instead of the prototype function
 

//---------------------------------------------------------------------------

//Class 

// class ToyotaCar {
//     start() {
//         console.log("Car started");
//     }

//     stop() {
//         console.log("Car stopped");
//     }

//     setBrand(brand) {
//         this.brand = brand; --> This takes a argument brand which we pass in line 56 and creates a new property "brand: Toyota" for the same object which is landCrusier 
//     }
// }

// let landCrusier = new ToyotaCar(); --> The new keyword is used create object through classes
// landCrusier.setBrand("Toyota");


//Constructor - Creates object when we use new keyword is automatically created if not there and we can create our own constructor too

// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("Object Created");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("Car started");
//     }

//     stop() {
//         console.log("Car stopped");
//     }
// }

// let Vellfire = new ToyotaCar("Toyota", 12); --> This will create brand and mileage property for the object which is going to be created by the constructor


//-------------------------------------------------------------------------------

//Inheritance --> passing down of properties and methods from the parent to child
//If parent and child have same method the child's method will be used[Method Overriding]


// class Person {
//     eat() {
//         console.log("eat");
//     }
    
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work() {
//         console.log("solve problems");
//     }
// }


// let engineer = new Engineer(); --> The extends keyword allows us to inherit the eat and work method from Person Class into Engineer.


//---------------------------------------------------------------------------

//Super Keyword - Used to call the consturctor of the parent class to acess it's properties and methods

// class Person {
//     constructor() {
//         this.species = "Homospanies";
//     }
//     eat() {
//         console.log("eat");
//     }
    
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     constructor(branch) {
//         super(); //we get error if we don't use it which is used to invoke the parent contructor that means take the properties from the parent constructor first and then complete the child constructor
//         this.branch = branch
//     }
//     work() {
//         console.log("solve problems");
//     }
// }

// let engObj = new Engineer("chemical eng");


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
    
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         super(name); // This will send the name to the parent constructor too.
//     }
//     work() {
//         super.eat(); // This will make the eat method to run first from the parent class and then the work we run. When we call the work function 
//         console.log("solve problems");
//     }

// }

// let engObj = new Engineer("TEN");


//----------------------------------------------------------------------------
//ERROR Handling

// let a = 5
// let b = 10
// console.log(a+b);
// console.log(a+b);
// try {
//     console.log(a+c);
// } catch(err) { 
//     console.log(err); --> ReferenceError: c is not defined at OPPS.js:171:19
// }
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);

//---------------------------------------------------------------------------
//PRACTICE

// let DATA = "secret info"

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super();
//         this.name = name;
//         this.email = email;
//     }

//     editData(data) {
//         DATA = "edited DATA"    
//     }
// }

// let stuObj = new User("Ten", "ten@gmail.com");
// let admin1 = new Admin("admin", "admin@gmail.com");