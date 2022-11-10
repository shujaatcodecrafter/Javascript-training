// let promise = new Promise(function (resolve, reject) {
//     alert("Hello")
//     resolve(41)
// })

// let promise = new Promise(function (resolve, reject) {
//     const x = "helloworld";
//     const y = "helloworld"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise
//     .then(function () {
//         console.log('Success, Hello World');
//     })
//     .catch(function () {
//         console.log("Some error has occured");
//     });



// console.log("Hello Everyone")
// setTimeout(function () {
//     console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello Three")
// console.log(promise);


// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise1 is pending")
//     setTimeout(() => {
//         // console.log("I am promise and I am resolved")
//         resolve(true)
//     }, 5000)
// })


// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise2 is pending")
//     setTimeout(() => {
//         // console.log(("I am a promise and I am rejected"))
//         reject(new Error("I am an error"))
//     }, 5000)
// })

// console.log(p1, p2);
// p1.then((value) => {
//     console.log(value)
// })

// p2.then((vlaue) => {
//     console.log(value2)
// })
// ----------------------------------------------------

//Promise
console.log("Script Start")
const bucket = ["cofee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    } else {
        reject("Couldn't do it");
    }

})
//consume
//how to consume

friedRicePromise.then(
    //jub promise resolve hoga
    (myfriedrice) => {
        console.log("let's eat", myfriedrice);
    }
    ,
).catch(
    (error) => {
        console.log(error)
    })
setTimeout(() => {
    console.log("hello form set timeout")
}, 0);

for (let i = 0; i <= 30; i++) {
    console.log(Math.random(), i);
}
console.log("Script End")

// ------------------------------------------------------------


function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    })
}

myPromise()
    .then(() => { console.log("resolved") })
    .catch(() => { console.log("rejected") })



