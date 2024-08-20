/*
console.log("hello") // how to write in js
console.log(`i like burgers`)

//window.alert("This is an alert") // pop up

document.getElementById("header").textContent="hello"

// let x;
let x = 100; // made a variable and declared it

let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName = "benjamin buttons";

console.log(typeof firstName);

console.log(firstName)

console.log(typeof age); // shows data type of var
console.log(gpa)
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`); // has to be backticks `` to do ${}
console.log(`Your gpa is ${gpa}`)

let online = true;

console.log(typeof online);

document.getElementById("p1").textContent = price;

let students = 30;

students = students +1

console.log(students);


// ways to accept user input
// easy way = window prompt
// professional way = html textbox

let username;

// username = window.prompt("Whats your username?")
document.getElementById("mySubmit").onclick = function() { // handling inputs with a  button click
    username = document.getElementById("mytext").value;
    document.getElementById("header").textContent = `Hello ${username}`;

}

/* 
// type conversion

let years = window.prompt("How old are you: ");
age= Number() // func to convert data types into a number
years +=1;

console.log(years);


let a = "pizza";
a = Boolean(a);

let b = 20;
b = String(b);

let c = "pizza";
c = Number(c); // Nan - not a number

console.log(a,b, c);




// const = a variable that cannot be changed

const pi = 3.14159;
let radius;
let circumference;

// pi = 420.69 - cant do

radius=window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2  * pi * radius;

console.log(circumference);



// Math = built in object that provides a collection of methods and properties

console.log(Math.PI);
console.log(Math.E);
z = 2.59;
z = Math.round(z);

console.log(z);

// if conditions

let age = 25;
if (age => 18){
    console.log("Old man");

}
else if (age < 0){
    console.log("thats impossible");

}

else{
    console.log("Young man");
}
 

// ternary operator = a shortcut to if{} and else{} by doing:
// condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "your an adult" : "your a minor";



//method chaining = calling one method after another in one line of continuous line of code 

let username = window.prompt("Enter your username: ");

// no method chaining

username=username.trim();
let letter =username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;
console.log(username);

// METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);



// logical operators

// AND = &&
// OR = ||
// NOT = !

// STRICT EQUALITY

// = assignment operator
// = comparison operator
// === strict equality operator(compare if values & datatypes are equal)
//  != inequality operator
// !== strict inequality operator

// WHILE LOOP


let username = "";
while (usernamefddf == "" || username == null){
    username = window.prompt("Enter your name")

}

console.log(`hello ${username}`)



// OR

let username;

do{
    username=window.prompt("enter your name");
} while(username == "" || username== null)

console.log(`hello ${username}`);




// FOR LOOP

// for(variable, condition, increment)

for(let i = 0; i<= 2; i++){
    console.log("hello")
}



// FUNCTION = section of reusable code

function happyBirthday(){
    console.log("happy birthday to you")
}

happyBirthday();



// ARRAYS

let fruits = ["apple", "banana", "lychee"];

fruits[2] = "coconut";

fruits.push("orange");

fruits.pop() // and more and more and more functions to a list

console.log(fruits); 



// FOR EACH

//used to iterate over the elemtns of an arrayu and apply -
// a specified function (callback) to each element

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element){
    console.log(element);
}



// filter() (also a callback)

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log(evenNums)

function isEven(element){
    return element % 2 == 0;
}



// OBJECTS (dictionary in other sense)

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30, 
    isEmployed: true,
    sayHello: function(){console.log("Hi im Spongebob!")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42, 
    isEmployed: false,
}

console.log(person1, firstName) 
console.log(person2, age) 

// THIS

const person3 = {
    name: krabs,
    hobby: money,
    sayHello: function(){console.log(`hi my name is ${this.krabs} and my favourite thing is ${this.hobby}`)} // just saying hobby or krabs wouldnt have worked you need a this. placeholder
}

console.log(sayHello);


// constructor  = a shortcut for dicts aka like self in python

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const myFirstCar = new Car("Toyota", "Corolla", 2023, "white");
console.log(myFirstCar.model);

// CLASS

class Product{
    constructor(name, price){

        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price +(this.price * salesTax)
    }
}

const salesTax = 0.05

const product1 = new Product("Shirt", 19.99); // name, price
const product2 = new Product("Pants", 22.49);

product2.displayProduct();

const total = product1.calculateTotal(salesTax)
console.log(`Total price with tax: $${total.toFixed(2)}`)



// Fisher-Yates Algorithm - good for games and elements of randomness

const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}



// try, catch, and finalize error values

try{
    console.log("hello");
}

catch(error){
    console.error(error);
}

finally{
    console.log("This always executes");

}

console.log("You have reached the end");

*/

