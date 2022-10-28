// Objects reference type 
// Objects store key value pairs 
//Object don't have index

const person1 = { name: "John", city: "noida", age: 26 };

console.log(person1.name);
console.log(person1.city);
console.log(person1.age);


const person = {
    name: "John",
    city: "noida",
    age: 26,
    hobbies: ["photography", "traveling", "listening music"]
}
//how to access data from objects
console.log(person);
console.log(person["name"]);
console.log(typeof (person));
console.log(person.hobbies);



//how to ad key value pair to objects
person.gender = "male";
console.log(person);



//how to iterate object

const person2 = {
    name: "abc",
    age: 35,
    "person2 hobbies": ["sleeping", "playing cricket", "traveling"]
}
//for in loop
//Object.keys

for (let key in person2) {
    console.log(person2[key]);
    console.log(`${key} : ${person2[key]}`)
    console.log(key, " : ", person2[key]);
}

console.log(Object.keys(person2));