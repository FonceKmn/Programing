/*
Arrays with let and const
You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
*/

// item add elemek ucun
itemTracker.push('item 3', 'item 4');

// axrinci itemi silir
newItemTracker.pop();

// 1. itemi silir
groceryList.shift()

//Add to the front of an Array
fruits.unshift('Strawberry')

//Find the index of an item in the Array
fruits.indexOf('Banana')

//Remove an item by index position
//pos hardan bashlamagidi 1 de necesini SubString Kimi
fruits.splice(pos, 1)

//


//For Each
var nomreler =  [1 , 2 , 43, -6, 98 ];
console.log("Array elementleri...");
nomreler.forEach(function(reqem){
 console.log(reqem);
});

// Nested Arrays
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//practice

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)
function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept)
