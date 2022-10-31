function HappyBirthday() {
    console.log("Happy birthday to you...")
}

HappyBirthday();


function twoPlusFour() {
    console.log(2 + 4);
}
twoPlusFour();


function sumTwoNumbers(number1, number2) {
    return number1 + number2;
}
const returnedValue = sumTwoNumbers(8, 4);
console.log(returnedValue);



function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}
const total = sumThreeNumbers(2, 3, 5);
console.log(total);


// odd or even 
// input : 1 number1 
// output : true , false 
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(11));


// console.log(13 % 2 === 0);
// console.log(18 % 2 === 0);



