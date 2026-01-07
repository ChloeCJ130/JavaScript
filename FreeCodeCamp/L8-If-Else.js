function IfElse(num){
    if (num > 10){
        return "Greater than 10";
    }
    else{
        return "10 or Less";
    }
}

console.log("Testing IfElse function:");
console.log(IfElse(15));
console.log(IfElse(10));

function ElseIf(num){
    if (num > 10){
        return "Greater than 10";
    }
    else if (num == 10){
        return "Just 10";
    }
    else{
        return "Less than 10";
    }
}

console.log("Testing ElseIf function:");
console.log(ElseIf(15));
console.log(ElseIf(10));
console.log(ElseIf(5));

function chainIfElse(num){
    if (num < 5){
        return "Tiny";
    }
    else if (num < 10){
        return "Small";
    }
    else if (num < 15){
        return "Medium";
    }
    else if (num < 20){
        return "Large";
    }
    else{
        return "Huge";
    }
}

console.log("Testing chainIfElse function:");
console.log(chainIfElse(20));
