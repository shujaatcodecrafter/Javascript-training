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


