// splice () -> splice can be used to add new items to an array 

let num = [550, 22, 12, 2, 4, 6, 24, 55, 10, 355]
num.splice(2, 3, 1021, 2022, 2023, 2025);
console.log(num);


const months = ['Jan', 'May', ' June', 'July'];
months.splice(1, 0, 'Feb', 'March', 'April');
console.log(months);


const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
fruits.splice(1, 1, 'PineApple');
console.log(fruits);



//slice method-> slice out a piece from an array. it create a new array. 

const number = [1, 2, 3, 5, 12];
// number.slice(2);
const newnumber = number.slice(1, 3);
const newnum = number.slice(2);
console.log(newnumber);
console.log(newnum);



const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits1.slice(-4, -1);

document.getElementById("demo").innerHTML = myBest;