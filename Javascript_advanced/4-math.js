function divideBy(firstNumber){
    return function(secondNumber){
        return secondNumber/firstNumber;
    };
}

function addBy(firstNumber){
    return function(secondNumber){
        return secondNumber+firstNumber;
    };
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);

console.log(addBy100(20)); // should output 120
console.log(divideBy10(20)); // should output 2
console.log(divideBy100(200)); // should output 2
console.log(addBy1000(20)); // should output 1020
