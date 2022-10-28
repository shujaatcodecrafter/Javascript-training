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



//nested destructuring
const users = [
    { userId: 1, firstName: 'rupesh', gender: "male", city: "noida" },
    { userId: 2, firstName: 'mohit', gender: "male", city: "delhi" },
    { userId: 3, firstName: 'aakash', gender: "malesss", city: "pune" }
]

// const [{ firstName }, , { gender }] = users;
const [{ firstName: user1firstName, userId }, , { gender: user3gender }] = users;
console.log(user1firstName);
console.log(user3gender);
console.log(userId)