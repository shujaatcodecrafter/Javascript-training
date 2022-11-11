// const add = function (x, y) {
//     return new Promise((resolve, reject) => {
//         let sum = x + y;
//         if (sum) {
//             resolve(sum);
//         }
//         else {
//             reject(Error("Could not add the two values!"));
//         }
//     });
// };

// const subtract = function (x, y) {
//     return new Promise((resolve, reject) => {
//         let sum = x - y;
//         if (sum) {
//             resolve(sum);
//         }
//         else {
//             reject(Error("Could not subtract the two values!"));
//         }
//     });
// };

// // Starting promise chain
// const res = add(2, 2)
//     .then((added) => {
//         // added = 4
//         return subtract(added, 3);
//     })
//     const subtracted = await res

//     .then((subtracted) => {
//         // subtracted = 1
//         return add(subtracted, 5);
//     })
//     .then((added) => {
//         // added = 6
//         return added * 2;
//     })
//     .then((result) => {
//         // result = 12
//         console.log("My result is ", result);
//     })
//     .catch((err) => {
//         // If any part of the chain is rejected, print the error message.
//         console.log(err);
//     });

// // ----------------------------------------------------------------------------

//Promise.All in JavaScript

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("five"), 5000);
})
// const p6 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
// });

// // Using .catch:
Promise.all([p1, p2, p3, p4, p5])
    // Promise.all([p1, p2, p3, p4, p5, p6])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error.message, "some error found");
    });

// -------------------------------------------




let first_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 1 second");
    }, 1000);
});

let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 2 seconds");
    }, 2000);
});

let third_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved First after 3 seconds");
    }, 3000);
});

try {
    let result = Promise.all([first_promise, second_promise, third_promise]);
    result.then((data) => console.log(data));
} catch (error) {
    console.log(error);
}



