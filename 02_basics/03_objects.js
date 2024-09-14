// object lae declare garne two ways i.e. literal or constructor
// singleton => object lae literal way ma declare garo vane singleton  ek object create hudeina
// but constructor bata declare garo vane singleton ek object create huncha For eg: (Object.create)

// object literals

const mySym = Symbol("key1")           //Defining Symbol in constant.. .this is the symbol of ("key1")


const JsUser = {
    "full name": "Ishwor Shah",
    // mySym: "mykey1",                  //this is not the correct syntax to write ..however the output wil be "mykey1" same as below...but use below line syntax for better code
    [mySym]: "mykey1",                    //Making the symbol as a keys here..and have to put in brackets [] in case of symbol in objects.
    //check output by using brackets and not in above line to clarify differences ....
    age: 20,
    address: "kerabari",
    email: "ishworshah050@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]

}




// console.log(JsUser.email)               //common way to access object
// console.log(JsUser["email"])           // but in some case if its given sring values in keys then it makes the acessing difficult like above way, so use the below way of acessing object
// console.log(JsUser["full name"])         //other way to access object
// console.log(JsUser.mySym)       //this is not the way to print symbol so the follow the below line to print symbol
// console.log(JsUser[mySym])      //use bracket to print without giving " ".this is the correct syntax 


JsUser.email = "ishwors720@gmail.com"        //changing the email of object JsUser/override the email value
// Object.freeze(JsUser)                       //freeze is used to lock the value . so that the value won't change 
JsUser.email = "NP05CP4A220052@iic.edu.np" //This wont run because freeze stops to change the email in the line 34.
console.log(JsUser)


//declare function inside variable getFunction...
JsUser.getFunction = function(){            //created function inside object
    console.log("Hello I am Mr.Unknown")
}




JsUser.getAnotherFunction = function(){     //created another function inside object and prints the same objects => full name in string interpolation
    console.log(`Hello I am ${this["full name"]}`)
}

//Note: If freeze is used in the above line, then make that line comment so that only this below line will work.
console.log(JsUser.getAnotherFunction())
    console.log(JsUser.getFunction())           // Note: () use huncha with function name..function lae print garda but object lae garda use hudeina just object name use huncha ..
    console.log(JsUser)