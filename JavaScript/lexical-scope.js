//lexical scope------------------------

// function myApp() {
//     const myVar = "value1";

//     function myFunc() {
//         const myVar = "value20";
//         console.log("inside myFunc", myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }

// myApp();
// --------------------------------------------

// const myVar = "value1";

// function myApp() {

//     function myFunc() {
//         const myVar = "value25";
//         console.log("inside myFunc", myVar);
//     }

//     console.log(myVar);
//     myFunc();
// }

// myApp();

// --------------------------------------------------

const myVar = "value2";

function myApp() {

    function myFunc() {
        // const myVar = "value25";
        const myFunc2 = () => {
            console.log("inside myFunch", myVar);
        }
        myFunc2();

    }
    console.log(myVar);
    myFunc();
}

myApp();


// lexical environment, scope chain 

const lastName = "Kumar"

const printName = function () {
    const firstName = "Rupesh";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();



















// function func1() {
//     const a = 10;
//     return function func2() {
//         console.log(a)
//     }
// }

// let aa = func1()

// aa();