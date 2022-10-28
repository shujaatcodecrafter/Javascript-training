//Array destructuring 
const myArray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1)
console.log("value of myvar2", myvar2);

console.log(myNewArray);





// Object Destructuring

const car = {
    brandName: "TATA",
    year: 1947,
    modal: "tata harrier",
    country: "India"
};

let { brandName, year, ...restProps } = car;
console.log(brandName);
console.log(restProps);