function myFunction() {
    console.log("Hello from myFunction!");
}

myFunction();

//---Function with Parameters---

function math(a, b) {
    c = a + b;
    console.log("Sum of a and b:");
    console.log(c);
}

math(5, 10); //returns 15

//---Global Scope and Functions---

var global = 10;

function fun1(){
    local = 5;
    //this automatically becomes a global variable if it is not declared with var, let, or const
}

function fun2(){
    var output = "";
    if (typeof global != "undefined") {
        output += "global: " + global;
    }
    if (typeof local != "undefined") {
        output += " local: " + local;
    }
    console.log("Output from fun2:");
    console.log(output);
}

fun1();
fun2();

//---Local Scope and Functions---

function local2(){
    var myVar = 5;
    console.log("Value of myVar inside local():");
    console.log(myVar);
}

local2();

//---Global vs. Local Scope in Functions---

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    console.log("My outfit:");
    console.log(outerWear);
}

myOutfit();
console.log("Outer wear variable outside function:");
console.log(outerWear);

//---Return a Value from a Function with Return---

function returnFun(text){
    return text + " world";
}

console.log("Return value from returnFun():");
console.log(returnFun("Hello")); //outputs: Hello world

//---Understanding Undefined Value returned from a Functioan---

var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}
//functions are undefined because they do not return a value

//---Assignment with a Returned Value---

var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log("Value of changed after assignment with returned value:");
console.log(changed); //outputs: 5

//---Stand in Line---
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
  //adds the item to the end of the array and removes the first element, returning it
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6));
console.log("After: " + testArr);
