const marvelHeroes = ["Ironman", "Spiderman", "Wanda", "Thor", "Captain America"]

const dcHeroes = ["Batman", "Superman", "Flash", "Wonder Women", "Black Adam"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[5][1])


const multiVerse = marvelHeroes.concat(dcHeroes)        //concat is easy way to combine but the more easier way to combine array is spread
// console.log(multiVerse[9])

const wholeUniverse = [...marvelHeroes, ...dcHeroes]    //spread is used to combine two arrays elements wihtout making the array inside array unlike push
console.log(wholeUniverse[8])


const newArray = [1,2,3,4,[7,8],12,[4,6,[88,14]]]       
console.log(newArray.flat(Infinity))            //Flat spread the mulitple arrays into single array ..but have to give depth like how many arrays inside it.... 
                                               //...if not than can use infinity inside parenthese of flat



console.log(Array.isArray("Ishwor"))        //isArray returns boolean value if its not an array

console.log(Array.from("Ishwor"))           //from makes the new array with given value


console.log(Array.from({name: "Ishwor"}))   //should define clearly what to make array of key or value...
                                            //if it wont able to make array then the empty bracket will be displayed..


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3)) //(of) returns the array same like the (from)..however the]re is differences between