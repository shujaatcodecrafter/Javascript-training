// synchronous programming vs asynchronous programming 
// synchronous programming 
// synchronous programming single threaded 

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");


// setTimeout 
// console.log("script start")
// function hello() {
//     console.log("Hello world!");
// }
// setTimeout(hello, 2000);
// console.log("Script End");


// console.log("Script Start");

// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);
// console.log("Script End");

// ---------------------------------------------
// console.log("script Start");

// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);

// for (let i = 1; i < 100; i++) {
//     console.log("....");
// }
// console.log("Script end");


// ------------------------------------------
console.log("script Start");

const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 0)


for (let i = 1; i < 100; i++) {
    console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");