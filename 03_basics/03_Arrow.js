
const user = {
    username : "Ishwor",

    welcomeMessage : function(){            //declaring the method welcomeMessage
        console.log(`${this.username}, Welcome to JavaScript`) // //this means..:talking about the current context..i.e: the variables 
        console.log(this);  //talking about the current context..i.e: the variables inside the scope...
        
        
    }
    
}
// user.welcomeMessage()   
// user.username = "Jonas" //changing the  context i.e. the varibales and changes to Jonas.
// user.welcomeMessage()
// console.log(this);          //Expected Result : { } //here, this means that in this global scope there is no any context so it gives { }..



// function newFunction(){  //declaring function only
//     let username = "Ishwor"
//     //Expected Result : undefined
//     console.log(this.username); //context works only in object ....so this will work on objects..
    
// }
// newFunction()


// const newFunction = function(){ //declaring the function and holding it at variables
//     let username = "Ishwor"
//     //Expected Result : undefined
//     console.log(this.username); //context works only in object ....so this will work on objects..
    
// }
// newFunction()



//Array Function...just remove the keyword function & add => after () and boom the above function will be arrow function

const newFunction = () => {
    let username = "Ishwor"
    console.log(this.username);
    
}
// newFunction()

const addTwo = (num1, num2) => {
    return num1 + num2          //explicit return : means have to mention the return keyword inside  { } in function
}

// console.log(addTwo(2,3))

const addThree = (num1,num2,num3) => num1 + num2 + num3
// console.log(addThree(2,3,4))    //implicit return : means don't have to mention the return keyword and also dont have to write { }..we can write in a same declaration line...




//implicit return with ()..mostly use in react..
const userProfile = (username) => ({username:"Ishwor"}) //we are returning the object inside the function..must enclose with parantheses ().
console.log(userProfile()) //Expected Result: {username:"Ishwor"}
console.log(userProfile().username) //Expected Result: Ishwor


const myArray = [1,2,3,4,5]
//Function inside loop
// myArray.forEach(function() {})
// //Arrow Function inside loop
// myArray.forEach(() => ())
// myArray.forEach(() => {})