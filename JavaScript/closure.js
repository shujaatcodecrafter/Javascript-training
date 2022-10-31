// closure:  function along with its lexical scope bundle together from a closure.



// function hello(x) {
//     const a = "varA"
//     const b = "varB";
//     return function () {
//         console.log(a, b, x);
//     }
// }

// const ans = hello("arg");
// ans();
// ----------------------------------


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);

// z();

// --------------------------------------

// function z() {
//     var b = 400;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// --------------------------------------


// function myFunction(power) {
//     return function (number) {
//         return number ** power
//     }
// }

// const cube = myFunction(3);
// const total = cube(5);
// console.log(total);


// const square = myFunction(2);
// const ans = square(5);
// console.log(ans);

// ---------------------------------------
// function func() {
//     let counter = 0;
//     return function () {
//         if (counter < 1) {
//             console.log("Hi You called me")
//             counter++;
//         } else {
//             console.log("Mai already ek bar call ho chuka hu")
//         }
//     }
// }

// const myFunc = func();
// myFunc()
// myFunc()

// ---------------------------------------------------
// Ques 1: What will be logged to console ?

// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();


// --------------------
// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 4000);
//     console.log("Hello closure");
// }
// x();


// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello world")
// }
// x();



function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello world")
}
x();


// ------------------------------------------------
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Hello Rupesh");
}
x();