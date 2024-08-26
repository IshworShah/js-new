const accountId = 289123 
let accountEmail = "ishworshah050@gmail.com"
var accountPassword = "12345"
accountCountry = "Nepal"
let accountState;


// accountId = 12345   // not allowed as the variables is mentioned as const


/*
accountEmail = "ishwors720@gmail.com"
accountPassword = "98253"
accountCountry = "India"
*/


/*
console.log(accountId,accountEmail)
console.log(accountCountry)
*/


/* 
Prefer not to use Var 
because of issue in block scope and functional scope 
*/



/* console.table is used for displaying the all variables without using multiple console.log */

console.table({accountId, accountEmail, accountPassword, accountCountry, accountState})