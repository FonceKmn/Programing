// Variables      
 //                                                                       camel casing. 
//  In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).

var favoriteFood = 'pizza'
console.log(favoriteFood);

//  Variable names cannot start with numbers.
//  Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
//  Variable names cannot be the same as keywords. For a comprehensive list of keywords.

//The let keyword signals that the variable can be reassigned a different value
// let deyishen; the variable will be automatically initialized with a value of undefined

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito


//const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
//Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto


//Other mathematical assignment operators include the increment operator (++) and decrement operator (--).

let a = 10;
a++;
console.log(a); // Output: 11


// String interpolation
let myName = 'Kamran';
let myCity = 'Baki';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
// Output: I own a pet armadillo.

// typeof  datalarin tiplerini tapmaq ucun
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

// 