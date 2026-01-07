function switchStatement(val){
    var answer;
    switch(val){
        case 1:
            answer = "Mango";
            break;
        case 2:
            answer = "Banana";
            break;
        default:
            answer = "Orange";
            break;
    }
    return answer; 
}

//break is used to prevent fall through
console.log("Testing switchStatement function:");
console.log(switchStatement(1));
console.log(switchStatement(2));
console.log(switchStatement(3));

