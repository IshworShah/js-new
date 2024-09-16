// {} => its called object declaration when its comes with object.... 
// {} => its called scope when its use with function and if/else or anything in programming language ....eg: scope of function or program


//global scope          // Variables declared outside the {} block called global scope.
//Global scope variables are available on block scope, but the value written inside block scope should not go outside, i.e., global scope.
     
let a = 500
const b = 600
var c = 400     

//block scope       // Variables declared inside the {} block called block scope.
//Variables declared inside a { } block cannot be accessed from outside the block:

if(true){
let a = 10
const b = 20   
// var c = 30          // Variables declared with the var keyword can NOT have block scope. 

// console.log(a);
// console.log(b);
// console.log(c);

}

// In simpler terms, the code written inside the block scope {} should operate inside the block scope only...
// But code written in the global scope i.e. outside of block scope { } can also be accessed and operated on from within the block scope.
// console.log(a);
// console.log(b);
// console.log(c);

//Notes : The global scope you check in the browser console and the example you run in Node.js in your code environment are different.


//nested function => function inside function
function one(){                 //declaring function one
    // const age = 21           //this age is declared outside the block scope of function one() .THRF: this variables can be access through fuction two() and function one() also
    const username = "Ishwor"
    function two(){                //declaring function two 

        const age = 20
    
        // console.log(username)       //can access the parent function variables
    }
    two()                           //two() runs successfully but wont show result until function one() is called.
    // console.log(age)             //cannot access the child function variables...the block scope concept applies here in the nested functions

}
one()




//learning basic concepts of scope through if statement 

if(true){
    const firstName = "Ishwor"
    if(firstName === "Ishwor"){
        const schoolName = "Phewa"
        // console.log(firstName + " " +schoolName)
        
    }
    // console.log(schoolName);         //shows error in this line because of outside of block scope..should print in respective scope
}
// console.log(firstName)              //shows error in this line because of outside of block scope..should print in respective scope



//++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(one(2))     //thats called hoisting => In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared...declaration vandha agadi nae value used gariracha tei nae ho hoisting...

function one(num){
    return num + 1
}l



console.log(anotherFunction(2))     //this wont run because the function is declared and holds at one variable i.e. anotherFunction....So, there is a difference in function declaration and holding the function declaration in a variables..
const anotherFunction = function(num2){
    return num2 + 2
}


