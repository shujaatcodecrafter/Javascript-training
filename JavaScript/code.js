
// Guess the outputs of the following code:
// code :1

(function () {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);
})();

// code: 2
let x = {}, y = { name: "Dhoni" }, z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Rupesh" };
console.log(x[y]);


// // code: 3
function runFunc() {
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "Rupesh" + 78);
    console.log("Hello" + "88");
}
runFunc();



// // Code 4:
let a = 0;
let c = false;
console.log((a == c));
console.log((a === c));

//code 5:
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(b[i]), 1000);
// }

// code 5 :
// Remove duplicate item in  array
var arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicates(arr));

// code 6 :
let num = [1, 2, 3, 4, 11, 2, 10, 5, 6, 10, 55, 2];
function removeDuplicateItem(num) {
    return num.filter((item,
        index) => num.indexOf(item) === index);
}
console.log(removeDuplicateItem(num));