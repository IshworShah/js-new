// let name = "ishwor";
// let address = "kerabari";
// console.log(`my name is ${name} and i live in ${address}.` );


//++++++++++++++++++++++++++++++++ Number +++++++++++++++++++++++++++++++++++++++++++++++++++++

const score = 400;                            //Without defining a number however js treats automatically as a number. 
// console.log(score);                          //Expected result => 100

const balance = new Number(100 );           //Defining a number. We can write like this to specifically define datatypes.
// console.log(balance);                     //Expected result => [Number: 100]


//For String
// const ownerName = new String("Ishwor");
// console.log(ownerName);                                  //Expected result => [String: 'Ishwor']


// console.log(balance.toString());            //converts the number  to string

// console.log(balance.toFixed(2));         //The floating number will be shown based on the number given inside bracket of toFixed().
//Expected result => 100.00 because of the number given inside bracket 2. if given (3). Expected result => 100.000 

const otherBalance = new Number(298.98);
// console.log(otherBalance.toPrecision(4));   //The answer will be shown on the digits given inside brakcets. For eg: 298.89 will be 299 if its (3) .If its (4) => 298.9
//the roundoff concepts will be applied here .

const anotherNumber = new Number(100000);
// console.log(anotherNumber.toLocaleString());         //It shows the USA standard counting of 100000. As its predefined but we can change to other country standard too.
// console.log(anotherNumber.toLocaleString('en-IN')); //changes from USA standard to Indian standard.






//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-0));         //Converts negative to positive .[ (-4) => 4 ]
// console.log(Math.round(5.6));     //simple round off concepts 
// console.log(Math.ceil(5.2));     //Expected result => 6
// console.log(Math.floor(5.9));   //Expected result => 5
// console.log(Math.sqrt(35));     //Expected result => 5.916079783099616
// console.log(Math.sqrt(35).toFixed(2));  ////Expected result => 5.92

console.log(Math.random());     //ranom gives output of (0 to between 10)
console.log(Math.floor((Math.random() * 10) + 1));


const max = 20
const min = 10

console.log(Math.floor((Math.random() * (max - min + 1)) + min));