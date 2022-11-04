let arr = [1, 1, 2, 4, 6, 7, 8, 1, 1, 2, 3, 4, 12, 15, 12, 13, 12, 90, 15, 15];

let newUniqueArr = [... new Set(arr)];
console.log(newUniqueArr);



const item = ["orange", "mango", "apple", "mango", "pineapple", "apple"];

let newUniqueItem = [... new Set(item)];
console.log(newUniqueItem);