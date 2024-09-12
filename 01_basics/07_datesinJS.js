//++++++++++++++++++++++++++++++++++++++++ Date ++++++++++++++++++++++++++++++++++++++++++++++++



let myDate = new Date();
// console.log(myDate);                      //Result => 2024-09-12T10:00:56.182Z
// console.log(myDate.toString());          //Result => Thu Sep 12 2024 10:00:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());     //Result => Thu Sep 12 2024
// console.log(myDate.toLocaleString());  //Result => 9/12/2024, 10:04:07 AM
// console.log(typeof(myDate));          //Expected Result => object


// let myCreatedDate = new Date(2024, 8, 12);                //Months starts from 0 => JAN ..that's why  SEP => 8 
// let myCreatedDate = new Date(2024, 8, 12, 3, 53, 28 );      //Its applied only in single digit. as array starts from 0.

// let myCreatedDate = new Date('2024-00-12');     //The output here will be => Invalid Date because here months start from 1 unlike above single digit.

// let myCreatedDate = new Date('2024-09-12');     //Formant => ("YYYY-MM-DD").  Here month is defined as it's in current date.
let myCreatedDate = new Date('09-12-2023');        //Format => ("MM-DD-YYYY")
// console.log(myCreatedDate.toDateString());          
// console.log(myCreatedDate.toLocaleString());  


//+++++++++++++++++++++++++++++++++ TimeStamps +++++++++++++++++++++++++++++++++++++++++++++

let myTimeStamps = Date.now();      //TimeStamp give a output in millisecond.
// console.log(myTimeStamps);         //yesle dekahune millisecond vaneko 1 Jan,1970's dekhi aile ko date samma ko ho or diyeko date samma ko.
// console.log(Math.floor(myTimeStamps/1000));  //converting the millisecond to second .Also using the math library floor or round.
// console.log(Math.floor(Date.now()/1000));
// console.log(myCreatedDate.getTime());


let newDate = new Date();
// console.log(newDate.getDay());  //Expected Result => 4. As Day starts from (Monday == 01).
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getMinutes()); 


// console.log(`Hello! The day of today is ${newDate.getDay() + 1}`);



//We can customize the LocaleString to get more date information. 
// newDate.toLocaleString('default', {
//     weekday:"long",
//     timeZone:""
// })