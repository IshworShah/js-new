//Functions

function myFirstFunction() {

    // console.log("I")
    // console.log("S")
    // console.log("H")
    // console.log("W")
    // console.log("O")
    // console.log("R")
}
myFirstFunction()




//function to add two numbers
function addTwoNumbers(num1, num2){         //the two nums i.e. numm1 and num2 passing in () is called parameters..
    // console.log(`The sum of two nunbers is ${num1+num2}`)   //string interpolation
}
addTwoNumbers(2,3)                          //the two nums i.e. 2 and 3 passing in () is called agrumnents.

//The difference between parameters and arguments in functions => parameters is called when function is defined  and input is passed.
//The difference between parameters and arguments in functions => arguments is called when function is called and value is passed.





//function to divide two numbers
function divideTwoNumbers(number1, number2){
    // console.log(number1/number2)             //not the right way to perform operations inside function
    // let result = number1 / number2              //its the right way to perform operations inside function with return
    return number1 / number2                       //short code of above line code
}
const result = divideTwoNumbers(20,5)              //returns Nan if value wasn't passed.
// console.log("Result:",result);



//Other ways to pass parameters and arguments
function busInfo(busname,departuretime,arrivaltime){
    return `The name of bus is ${busname} and the arrival & departure time are ${arrivaltime} & ${departuretime}.`
}

// console.log(busInfo("HighTech","4:00 AM","5:00 AM"))




function loginUserMessage(username,time){
   
    return `${username} just logged in and the time of login is ${time}`
    
}
const logInfo = loginUserMessage("Ishwor","5AM")
// console.log(logInfo);





function loginAdminMessage(username = "Jonas"){ //here we are giving the default parameter if incase empty argument is passed than this default value will be used as username.
    //! => not ..this symbol converts true to false and vice versa
    if(!username){                             //checking the empty argument or not.. (username === indefined)... treats " ", undefined as false boolean value..
        // console.log("Please enter the username.");
        return                               //return stops the code and wont print below code...
        
    }
    return `${username} just logged in.`
    
}
const logAdminInfo = loginAdminMessage()
// console.log(logAdminInfo);



//rest symbol => ... allows function to accept indefinite number of arguments as an array.
//rest symbol is same as spread symbol but its usecase make its different..


//First way to define function, paraneter,arguments
function calculateCartPrice1(value1,...nums){       //here (...) make the arguments in an array.
    // console.log(value1)  //Expected result => 200...value1 will reserve the first value of arguments ..if value 2 will be included in parameters than 300 will be value2
    return nums
}
// console.log(calculateCartPrice1(200,300,400,500))





//Seccond way to define function, paraneter,arguments
function calculateCartPrice2(...nums){
// function calculateCartPrice(value1,value2,...num){
    
    return nums
}
const cartPrice = calculateCartPrice2(200,400,600,800,1000)
// console.log("The array of Cart Price:",cartPrice);






//Third way to define function, paraneter,arguments
function calculateCartPrice3(...nums){
    return `Array of Cart Price: ${nums}`               //String Interpolation doesnot show array of price...
}
// console.log(calculateCartPrice3(200,400,500,700))



//object inside the function
// const username = {                           //can be done in this way also of accessing the object inside from function
//     firstname: "Ishwor",
//     email: "ishworshah050@gmail.com"
// }

function handleObject(anyObject){
    console.log(`${anyObject.firstname} is the name and email is ${anyObject.email}`)


}
// handleObject(username)
handleObject(username = {                                     //this is another way of accessing object inside from function
    firstname: "Ishwor",                  
    email: "ishworshah050@gmail.com"
})


const newArray = [200,400,300]
// function returnSecondIndex(getArray){
// console.log(`${getArray[0]}`)

// }
// returnSecondIndex(newArray)

function returnSecondIndex(getArray){
    return getArray[2]
    
    }
// console.log(returnSecondIndex(newArray));
console.log(returnSecondIndex([200,400,300]));
 