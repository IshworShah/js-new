let score = "ishwor" 

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// "33" =>33
// "33abc" => NaN
//  true => 1
//  false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true  
// 0 => false
// "ishwor" = true
// " " => false

let someNumber = 33

let stringInNumber = String(someNumber);
// console.log(stringInNumber);
// console.log(typeof(stringInNumber));



// ************************************************Operations**********************************************************************




// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);



let value = 100;
let negValue = -value;
// console.log(negValue);



let str1 = "ishwor"
let str2 =  " shah"
// console.log(str1 + str2);

// console.log("2" + 1);
// console.log(2 + "1");
// console.log("2" + 1 + 1);
// console.log(2 + 1 + "1");

// console.log(+true);
// console.log(+false);
// console.log(-"");



let gameCounter = 100;
--gameCounter;
gameCounter++;

// console.log(gameCounter);

// prefix and postfix increment/decrement
// increment
let b, a = 4;
b = ++a;     // expected result(prefix) => a => 5, b => 5   
// console.log(a,b);

let y, x=7;
y = x++;    // expected result(postfix) => x => 8, y => 7
// console.log(x,y);

// decrement
let d, c = 4;
d = --c;     // expected result(prefix) => c => 3, d => 3   
// console.log(c,d);

let g, f=7;
g = f--;    // expected result(postfix) => f => 6, g => 7
// console.log(f,g);





//  ************************************************ Comparison Operators**********************************************************************


//  ==      =>  equal to
//  ===     =>  equal value and type
//  !=      =>  not equal to 
//  !==     =>  not equal value and type
//  <       =>  less than
//  >       =>  greater than 
//  <=      =>  less than equal to
//  >=      =>  greater than equal to
//  ?:      =>  trenary




// console.log(5 != 5); 
// console.log(5 != "5");
// expected result(not equal to) => false, false

// console.log(0 != undefined)      // (true, null, undefined) value with 0 gives true but it gives false when write (false)




// console.log(!(5 == 5));         //another approach to write not equal to => !(5 == 5)
// console.log(5 !== "5");
// expected result(not equal value and type) => false, true


// console.log(true !== false);           // expected result(not equal value and type) =>  true
// console.log("ishwor" !== 9);           // expected result(not equal value and type) =>  true
// console.log("ishwor" !== "ishwor");    // expected result(not equal value and type) =>  false



// let v, n=5;
// v=n++;
// console.log(`n:${n}, v:${v}`);


// "5"!==5 ? console.log("Its true"):console.log("Its false");  // Its trenary operators => ?:
