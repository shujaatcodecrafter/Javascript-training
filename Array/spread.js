let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", "item4"];

console.log(array1);
console.log(array2);
array1.push("item3");


console.log(array1 === array2);

