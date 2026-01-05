//---Adding Numbers---

var sum = 10 + 10;
console.log("Adding Numbers");
console.log(sum);
//outputs: 20

//---Subtracting Numbers---

var difference = 22 - 10;
console.log("Subtracting Numbers");
console.log(difference);
//outputs: 12

//---Multiplying Numbers---

var product = 3 * 10;
console.log("Multiplying Numbers");
console.log(product);
//outputs: 30

//---Dividing Numbers---

var quotient = 30 / 3;
console.log("Dividing Numbers");
console.log(quotient);
//outputs: 10

//---Incrementing Numbers---

var myVar = 29;

//incrementing a value means adding 1
//intead of writing myVar = myVar + 1;
//we can use the ++ operator

myVar++;
console.log("Incrementing Numbers");
console.log(myVar);
//outputs: 30

//---Decrementing Numbers---

var myVar2 = 16;

//decrementing a value means subtracting 1
//instead of writing myVar2 = myVar2 - 1;
//we can use the -- operator

myVar2--;
console.log("Decrementing Numbers");
console.log(myVar2);
//outputs: 17 

//---Decimal Numbers---

var ourDecimal = 5.7;
console.log("Decimal Numbers");
console.log(ourDecimal);
//outputs: 5.7

//---Multiplying Decimals---

var product2 = 2.0 * 2.5;
//multyplying two decimal numbers
//is the same as multiplying whole numbers
//just remember to place the decimal
//in the correct spot in the answer
console.log("Multiplying Decimals");
console.log(product2);
//outputs: 5.0

//---Dividing Decimals---

var quotient2 = 4.4 / 2.0;
//dividing two decimal numbers
//is the same as dividing whole numbers
console.log("Dividing Decimals");
console.log(quotient2);
//outputs: 2.2

//---Finding a Remainder---

var remainder;
remainder = 10 % 3;
//the remainder operator % gives the remainder of
//the division of two numbers
console.log("Finding a Remainder");
console.log(remainder);
//outputs: 1

//---Compound Assignment with Augmented Addition---

var a = 3;
var b = 17;
var c = 12;

//a = a + 12;
a += 12;
//b = b + 9;
b += 9;
//c = c + 7;
c += 7;

console.log("Compound Assignment with Augmented Addition");
console.log(a);
console.log(b);
console.log(c);

//this method is the same to other arithmetic operations