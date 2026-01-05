var fname = "Chloe";
// "Chloe" is a string literal

var lname = "Camacho";
// "Camacho" is also a string

var fullName = fname + " " + lname;
// string concatenation
// combines fname, a space, and lname into one string using the + operator

console.log("String Variables:");
console.log(fullName);
//outputs: Chloe Camacho

//---Escaping Literal Quotes in Strings---

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
//use backslash (\) to escape double quotes inside a double-quoted string
console.log("Escaping Literal Quotes in Strings:");
console.log(myStr);

//---Quoting Strings with Single Quotes---

var myStr2 = 'I am a "double quoted" string inside "double quotes".';
//single quotes can also be used to enclose strings
console.log("Quoting Strings with Single Quotes:");
console.log(myStr2);

//---Escape Sequences in Strings---

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
// \n is a new line
// \t is a tab
// \\ is a backslash

console.log("Escape Sequences in Strings:");
console.log(myStr3);

//---Concatenating Strings with Plus Operator---

var myStr4 = "This is the start. " + "This is the end.";
//the + operator concatenates (joins) two strings
console.log("Concatenating Strings with Plus Operator:");
console.log(myStr4);

//---Concatenating Strings with Plus Equals Operator---

var myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";
//the += operator appends the second string to the first string
console.log("Concatenating Strings with Plus Equals Operator:");
console.log(myStr5);

//---Constructing Strings with Variables---

var myName = "Chloe";
var myStr6 = "My name is " + myName + " and I am well!";
//the variable myName is concatenated into the string
console.log("Constructing Strings with Variables:");
console.log(myStr6);

//---Appending Variables to Strings---

var someAdjective = "awesome!";
var myStr7 = "Learning to code is ";
myStr7 += someAdjective;
//the variable someAdjective is appended to the string

console.log("Appending Variables to Strings:");
console.log(myStr7);

//---Finding the Length of a String---

var lastName = "Camacho";
var lastNameLength = lastName.length;
//the .length property returns the length of a string
console.log("Finding the Length of a String:");
console.log(lastNameLength);
//outputs: 7

//---Bracket Notation to Find the First Character in a String---

var firstLetterOfLastName = lastName[0];
//bracket notation is used to find the first character in a string
//the first character is at index 0
console.log("Bracket Notation to Find the First Character in a String:");
console.log(firstLetterOfLastName);
//outputs: C

//---String Immutability---

var myStr8 = "Jello World";
//myStr8[0] = "H"; 
//this line will not work because strings are immutable

myStr8 = "Hello World";
//the correct way to change a string is to reassign it

console.log("String Immutability:");
console.log(myStr8);
//outputs: Hello World

//---Bracket Notation to Find the Nth Character in a String---

var thirdLetterOfLastName = lastName[2];
//bracket notation is used to find the third character in a string
//the third character is at index 2
// this can be changed to any index to find the character at that position

console.log("Bracket Notation to Find the Nth Character in a String:");
console.log(thirdLetterOfLastName);
//outputs: m

//You can also compute using .length to find the any character in a string

var lastLetterOfLastName = lastName[lastName.length - 1];
//this finds the last letter of the string
console.log("Finding the Last Character in a String:");
console.log(lastLetterOfLastName);
//outputs: o