function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

console.log(trueOrFalse(true));  //outputs: Yes, that was true
console.log(trueOrFalse(false)); //outputs: No, that was false

//---Comparison with the Equality Operator---
function testEqual(val) {
  if (val == 12) {
    return "Equal";

    //checks if the value is equal to 12
  }
    return "Not Equal";
}

console.log("Testing equality with == :");
console.log(testEqual(10));

//---Comparison with the Strict Equality Operator---
function testStrict(val) {
  if (val === 7) {
    return "Equal";
    //checks if the value is strictly equal to 7
    //does not perform type conversion
  } else {
    return "Not Equal";
  } 
}

console.log("Testing strict equality with === :");
console.log(testStrict(10));
console.log(testStrict("7"));
console.log(testStrict(7));

//equality operator (==) does type conversion
//strict equality operator (===) does not do type conversion

//---Inequality Operator---

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
    //checks if the value is not equal to 99
    //performs type conversion
  }
  return "Equal";
}
console.log("Testing inequality with != :");
console.log(testNotEqual(10));

function testStrictNotEqual(val) {
  if (val !== 30) {
    return "Not Equal";
    //checks if the value is not equal to 30
    //performs type conversion
  }
  return "Equal";
}
console.log("Testing strict inequality with !== :");
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(30));
console.log(testStrictNotEqual("30"));

//---Comparison with the Logical and Operator---

function greaterThan(val){
  if (val > 100){
    return "Over 100";
  }
  if (val < 10){
    return "Under 10";
  }

}

console.log("Testing greater Than and Less Than function:");
console.log(greaterThan(150));
console.log(greaterThan(5));

//---Comparison with the Greater/Less Than Or Equal To Operator---

function greaterThanOrEqualTo(val){
  if (val >= 20){
    return "20 or Over";
  }
  if (val <= 10){
    return "10 or Under";
  }
}

console.log("Testing greater Than and Less Than or Equal To function:");
console.log(greaterThanOrEqualTo(25));
console.log(greaterThanOrEqualTo(9));

//Logial and operator (&&) Logical or operator (||)

function LogicalOperators(val){
  if (val <= 10 && val >= 5){
    return "Yes";
  }
  if (val <= 20 || val >= 25){
    return "Maybe";
  }
  return "No";
}

console.log("Testing Logical Operators function:");
console.log(LogicalOperators(7));
console.log(LogicalOperators(17));