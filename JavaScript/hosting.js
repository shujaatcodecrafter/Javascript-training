// //hoisting
console.log(this);
console.log(window);
console.log(myFunction);
console.log(firstName);


// // function expression
var myFunction = function () {
    console.log("this is my function");
}

var firstName = "Virat";
var lastName = "Kohli";
var fullName = firstName + " " + lastName;
console.log(fullName);



console.log(myFunction);

var myFunction = function () {
    console.log("this is my function");
}
console.log(myFunction);


// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization
console.log(firstName);
let firstName = "Rupesh";
console.log(firstName);

// let and const are also hoisted  (uninitialize)
// ---------------------------------------------------
// Uncaught ReferenceError:
//  firstName is not defined
console.log(firstName);

// ----------------------------------

//function execution context

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments);
    // console.log(arguments.length);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("rupesh", "kumar");
console.log(personName);
