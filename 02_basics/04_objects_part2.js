// Objects

// const tinderUser = new Object()      //just know that this is singlton object
const tinderUser = {}                   //just know that this in non singleton object
tinderUser.userName = " Ishwor Shah"
tinderUser.age  = 20
tinderUser.isLoggedIn = false
// console.log(tinderUser.userName);


const instaUser = {
    fullName : {                                    //object ko bitra objects create gareko
        userFullName : {
            firstName : "Ishwor",
            lastName : "Shah"
        }
    },
    address :  "kerabari",
    isLoggedIn : true
}

// console.log(instaUser.fullName.userFullName.lastName)           //accessing the multi-objects value like this...




//combine the objects like arrays..

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}


const obj3 = {obj1,obj2}            //its gives the result like in the way => object inside objects => { {} }
// console.log(obj3);                  //That's not the good way to combine multiple objects since it gives objects inside objects. We have to spread the object elements into one single object.=> {a,b,c,d}like this... not this => {a,b,b,{a,b}}


// const obj4 = Object.assign(obj1,obj2)    //That's the method Object.assign() to comnbine multiple objects...and the code will combine the whole object into intial object i.e. obj1 here.. you include in ()
// ......                                   //The obj1 will be used as a container to combine the other object..so that the obj1 will be equal to the obj3...
const obj4 = Object.assign({},obj1,obj2)    //If you put {} braces initially inside (), than the object will be comnined inside that {} braces ..therfore obj1 will not be equal to obj3 here..
// console.log(obj3);
// console.log(obj3 == obj1)                   //Expected Result: fale..if used {} first but if not used {} first than the Expected Result: true...
 

//We can combine the objects like arrays by using the spread (...)
const obj5 = {...obj1, ...obj2}         
// console.log(obj5);                          //The result will be same ...we can use Object.assign() and also (...obj1, ...obj2)


// suppose users info from database..as it will be array of objects, which will look like below.

const users = [
    {
        id:"123abc",
        email:"ishworshah050@gmail.com"
    },
    {
        id:"123abcd",
        email:"ishworshah054@gmail.com"
    },
    {
        id:"123abce",
        email:"ishworshah055@gmail.com"
    },
    {
        id:"123abcf",
        email:"ishworshah056@gmail.com"
    },

] 

// since array will be accessed with index and object will be accessed with (.)
console.log(users[0].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser))        //prints the keys of object in the form of array
console.log(Object.values(tinderUser))      //prints the values of object in the form of array
console.log(Object.entries(tinderUser))     //prints the keys and values in an array inside of single array

console.log(tinderUser.hasOwnProperty('username'))  //checks whether the object has given value or not...give result in form of true/false