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
