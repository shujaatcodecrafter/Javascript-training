// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if (true) {
//     let firstName = "Mohit";
// console.log(firstName);
// }

// Uncaught ReferenceError: firstName is not defined
// console.log(firstName);

// -------------------------------------------
function myApp() {
    if (true) {
        var firstName = "Rupesh";
        console.log(firstName);
    }

    if (true) {
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();