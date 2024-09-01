const name = "Ishwor";
const age = 20;

// String Interpolation
console.log(`Hello! my name is ${name}, and my age is ${age}.`);


const gameName = new String(`Honkobon-kobonks`);
// console.log(gameName[9]);   //Expected result => o 

// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());              //convert to lowercase while considering basic unicode rules
console.log(gameName.toLocaleLowerCase());       //convert to lowercase while considering local host envoironment's locale..which provides better language-specific conversion
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const anotherGameName = gameName.substring(0, 5);
console.log(anotherGameName);

const newGameName = gameName.slice(-5,-3);
console.log(newGameName);



const adminName = "  Jonathan  ";

console.log(adminName);
console.log(adminName.trim());

const url = "https//ishwor/bloodbridge/open.com"
console.log(url.replace('.', '-'));

console.log(url.includes('ishwor'));            //the name is included or not in url string...shows true if included and false if not


console.log(gameName.split('-'));
console.log(gameName[0]);