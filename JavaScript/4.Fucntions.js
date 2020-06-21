//  duzbucaqlinin sahesi  bele yaradanda funksiya bu define olunan qabagda cagrila biler // function decleration
const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

// funksiya duzeldib cagirilmasi
function greetWorld() {
    console.log('Hello World!')
}

greetWorld() // yada
console.log(greetWorld()); // Output: Hello, World!


// Parameters and Arguments

function sahe(en, uzun) {
    console.log(en * uzun)
}

sahe(4, 5)


// Default Parameters

function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


// Rectangelin sahesin hesablama 
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}

// funksiya icinde funksiya 
function multiplyByNineFifths(number) {
    return number * (9 / 5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

//  Funcksiya yaratmag ucun 2. usul bu usulda ferqli olaraq funksiya duzelmemishden qabag cagrila bilmez  // funcsion expression

const calculateArea = function (width, height) {
    const area = width * height;
    return area;
};

console.log(calculateArea(4, 5))


// anonymous funksiyalardan isdifade

const plantNeedsWater = function (day) {  //=> ile ES6 da isdifade oluna biler: const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//  Qisaca 
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
};

// Fucntion with O parameters
const functionName = () => {};

// Fucntion with 1 parameters
const functionName = paramOne => {};

//Fcuntion with 2 or more parameters
const functionName = (paramOne,paramTwo) => {};

//Single Line Block
const sumNumber = number => number + number;
//Multi Line Block
const sumNumber = number => {
    const sum = number + number;
    return sum;
}

// Misal Sulamaga 
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

