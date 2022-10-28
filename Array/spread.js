let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", "item4"];

console.log(array1);
console.log(array2);
array1.push("item3");


console.log(array1 === array2);



let arr1 = [0, 1, 2, 12];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1)




const myCar = {
    brand: 'BMW',
    model: 'B09',
    color: 'Blue'
}

const mynewCar = {
    type: 'car',
    year: 2022,
    color: 'yellow',
}

const myUpdatedCar = { ...myCar, ...mynewCar }
console.log(myUpdatedCar);

