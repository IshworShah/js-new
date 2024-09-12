//Arrays 
// [] = brackets
// {} = curly braces/braces
// () = parentheses
// Array is a collection of multiple elements which is declared under a single variable.


const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[4]);          //Expected result => 4
// console.log(myArr.length);      //Expected result => 6

//Other ways to declare arrays:
const myArr2 = new Array("Jonas", "Martha", "William");
// console.log(myArr2);

const myArr3 = ["Raja", "Raani", "Police"];     //Inside of brackets are array elements.
// console.log(myArr3);
// console.log(myArr3.length);

//Arrays Methods
// myArr.push(6);      //push le arrays elements haru ko last index ma concatenate garaucha 
// myArr.push(7);      //Expected Results => [1, 2, 3, 4, 5, 6, 7]
// myArr.unshift(12);  //unshift le arrays elements ko first index ma add gardincha
// myArr.unshift(70);  //Here, 70 is added to first element but shift() deletes the 70 .So, Expected Result => [12, 1, 2, 3, 4, 5, 6, 7]
// myArr.shift();      //shift le first index ma vako elements lae delete garaidincha or hataidincha
// console.log(myArr);





// console.log(myArr.includes(10));    //include returns boolean value if the given value inside the parentheses presents or not
// console.log(myArr.includes(2));     //Expected Result => True and Line 32 => False

// console.log(myArr.indexOf(2));      //indexOf returns the index of given value inside the parentheses..... 
// console.log(myArr.indexOf(20));     //.....and if not than it returns (-1)

//     //.join returns array as a string


//slice , splice

console.log("A: ", myArr);

//Ya slice ko case ma start => 1 and stop => 3 so 1 dekhi 2 index samma jancha 3 exclude huncha...
//For eg:[1,2,3,4] ..slice(1,3) garo vane, Result => (1,2) huncha...
const newA1 = myArr.slice(1,3);     //slice ma chae start dekhi stop bandha one index aghi ko elements samma lae print garcha.....
console.log("B: ", myArr);         // original array manipulate hudeina slice ko use ma
console.log("Slice: ",newA1);      //...ra original array bata slice gareko elenents exclude hudeina




//Ya splice ko case ma start => 1 and stop =>3 so ya chae 1 dekhi 3 index samma nae jancha ...yesma 3 exclude hudeina
//For eg:[1,2,3,4] ..splice(1,3) garo vane, Result => (1,2,4) huncha...
const newA2 = myArr.splice(1,3);  //splice ma chae start dekhi stop samma ko elements lae print garcha.....
console.log("C: ", myArr);       // yesma chae original array manipulate huncha splice ko use ma  
console.log("Splice: ",newA2);   //...ra original array bata splice gareko elenents exclude huncha
