var myArray = ["Hello", 42];
//elements are separated by commas

console.log("Arrays:");
console.log(myArray);
//outputs: ["Hello", 42]

//you can also output specific elements in an array using their index
//you can either assignin it to a variable or output it directly

var firstElement = myArray[0];
console.log("Array assigned to variable to find first element:");
console.log(firstElement);

console.log("Finding second element directly from array:");
console.log(myArray[1]);
//outputs: 42

//---Nested Arrays---

var nestedArray = [["Chloe", 7], ["Max", 5]];
console.log("Nested Arrays:");
console.log(nestedArray);
//outputs: [["Chloe", 7], ["Max", 5]]
console.log("Finding any of nested array:");
console.log(nestedArray[0]);

console.log("Finding an element within an array within a nested array:");
console.log(nestedArray[1][0]);
//outputs: "Max"

//---Modifying Arrays---

var array = [10, 30, 17];
array[1] = 20;
console.log("Modified Array:");
console.log(array);
//outputs: [10, 20, 17]
//you can change any element in an array by accessing its index and assigning it a new value

//---Manipulating Arrays with push() and pop()---

var arr = [1, 2, 3];
arr.push(4);
console.log("Array after push():");
console.log(arr);
//outputs: [1, 2, 3, 4]
//push() adds an element to the end of an array

arr.pop();
console.log("Array after pop():");
console.log(arr);
//outputs: [1, 2, 3]
//pop() removes the last element from an array

//---Manipulating Arrays with shift() and unshift()---

var arrayShift = [["John", 23], ["dog", 3]];
var removedFromFront = arrayShift.shift();
console.log("Array after shift():");
console.log(arrayShift);
console.log("Removed element from front:");
console.log(removedFromFront);
//outputs: [["dog", 3]]
//shift() removes the first element from an array and returns it

var arrayUnshift = [["John", 23], ["dog", 3]];
arrayUnshift.unshift(["Chloe", 10]);
console.log("Array after unshift():");
console.log(arrayUnshift);
//outputs: [["Chloe", 10], ["John", 23], ["dog", 3]]
//unshift() adds an element to the beginning of an array