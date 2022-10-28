const cars = ["BMW", "TATA", "CAR3", "CAR4"]

for (let index in cars) {
    console.log(cars[index]);
}



const fruits = ["apple", "mango", "grapes", "fruits4"]
const fruits2 = [];

for (let index in fruits) {
    fruits2.push(fruits[index])

}
console.log(fruits2);



for (let index in fruits) {
    fruits2.push(fruits[index].toLocaleUpperCase());

}
console.log(fruits2);
