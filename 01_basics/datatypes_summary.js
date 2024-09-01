// Primitive Datatype => call by value

// 7 types: String, Number, Boolean, null, undefined, BigInt, Symbol


//String
const userName = "Ishwor";

//Number
const score = 100;
const scoreValue = 100.3;

//Boolean
const isLoggedIn = true;

//null
const outSideTemp = null;

//undefined
let userEmail;
let userPhone = undefined;  //no need to assigned undefined, the above line(16) will work


//BigInt
const bigId = 8745399992345689897n;

//Symbol

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);   //the return value won't be same so expected result => false


// Non Primitive Datatype => call by reference

// Array, Objects, Functions

//Array
const marvelHeroes = ["IronMan", "Thor", "Captain America"];


//Object => the data inside the curly braces { } is called a ojects.
let myInfo = {
    name: "ishwor",
    age: 20,
    address: "kerbari"
}


//Function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myInfo));
