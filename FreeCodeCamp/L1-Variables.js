var myName = "Chloe";
//var is used to declare a variable
//used throughout the entire program

myName = 8;

let outName = "Chloe";
//will only be used witin the scope it is declared in

const pi = 3.14;
//const should never change

//---Declaring and Assigning Variables---

var a;
//declaration

console.log(a);
//outputs: undefined
//since a has not been assigned a value yet

var b = 3;
//assigning a value

console.log(b);
//outputs: 3
//this is before the reassignment therefore outputs the original value

a = 7;
//assigning a value

b = a;
//assigning the value of a to b

console.log(a);
console.log(b);

//Initializing Variables with the Assignment Operator

var c = 9;
//variable declaration and assignment in one step
// = is the assignment operator
//initializing c with a value of 9

//---Uninitialized Variables---

/*uninitialized variables
var d;
var e;
var f;

variables that have been declared but not assigned a value
*/

//initialized variables
var d = 5;
var e = 6;
var f = "I am a";
//variables that have been declared and assigned a value

d = d + 10;
e = e + 5;
f = f + " String!";

console.log(d);
console.log(e);
console.log(f);

