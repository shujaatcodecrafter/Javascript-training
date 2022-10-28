const num = [1, 2, 3, 4, 5, 6, 4, 5, 6, 5]
let sum = num.reduce(function (a, b) {
    return a + b;
})
console.log(sum)



const numbers = [12, 10, 5, 3, 20];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
    return total + num;
}

const numbers = [2, 3, 4, 6, 12, 1]
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator, currentValue;
})
console.log(sum);

// accumulator     currentValue  result
        // 2             3            5
        // 5              4           9
        // 9             6            15
        // 15            12           27
        // 27             1           28