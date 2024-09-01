//  ==      =>  equal to
//  ===     =>  equal value and type (strict check)
//  !=      =>  not equal to 
//  !==     =>  not equal value and type
//  <       =>  less than
//  >       =>  greater than 
//  <=      =>  less than equal to
//  >=      =>  greater than equal to
//  ?:      =>  trenary






// console.log(2 > ishwor);        // gives error ...the string value should write in " "
// console.log("2" > "2");
// console.log("02" > "1");        //JS converts the string value ("2")/("02") to a number, thfr: => true



// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);l
/* here the reason is that an equality check ( == ) and comparisions ( < > <= >= ) work differently. Conversion 
converts null to a number, treating it as 0. That's why line(22) 0 > 0 => false and line(24) 0 >= 0 => true  */

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
// here incase of undefined it's always gives => false.