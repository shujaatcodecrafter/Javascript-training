// let arr = [1, 1, 2, 4, 6, 7, 8, 1, 1, 2, 3, 4, 12, 15, 12, 13, 12, 90, 15, 15];

// let newUniqueArr = [... new Set(arr)];
// console.log(newUniqueArr);



const fruitList = ["orange", "mango", "apple", "mango", "pineapple", "apple"];

let newUniqueItem = [... new Set(fruitList)];
console.log(newUniqueItem);

// --------------------------------------------------------
function removeDuplicate(fruitList) {
    return fruitList.filter((fruits,
        index) => fruitList.indexOf(fruits) === (index));
}
console.log(removeDuplicate(fruitList));

// -------------------------------------------------------------------

const uniqueFruitList = fruitList.filter((value, index) => {
    console.log(value, index);
    return fruitList.indexOf(value) === index;
});
console.log(uniqueFruitList);



//using filter method
const numbers = [1, 1, 2, 4, 6, 7, 8, 1, 1, 2, 3, 4, 12, 15, 12, 13, 12, 90, 15, 15];

const unique = numbers.filter((value, index) => {
    // console.log(value, index);
    return numbers.indexOf(value) === index;
});
console.log(unique);



// function removeDuplicatNumbers(numbers) {
//     return numbers.filter((num,
//         index) => numbers.indexOf(num) === index);
// }
// console.log(removeDuplicatNumbers(numbers));


const employeName = ["John", "Andy", "Rupesh", "Amit", "Rupesh", "Ali", "John"];

const uniqueName = employeName.filter((value, index) => {
    console.log(value, index);
    return employeName.indexOf(value) === index;
})
console.log(uniqueName);

