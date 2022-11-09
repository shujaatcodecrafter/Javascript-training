// callbacks, callback hell , pyramid of doom 
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// / Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

//callback hell 
// setTimeout(() => {
//     heading1.textContent = "One"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "Heading 2"
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three"
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five"
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 1000)
// }, 2000);

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
}

// pyramid of doom:

changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "three", "red", 1000, () => {
            changeText(heading4, "four", "pink", 1000, () => {
                changeText(heading5, "five", "green", 2000, () => {
                    changeText(heading6, "six", "blue", 1000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {
                            changeText(heading8, "eight", "cyan", 1000, () => {
                                changeText(heading9, "nine", "#cda562", 1000, () => {
                                    changeText(heading10, "ten", "dca652", 1000, () => {

                                    }, () => { console.log("Heading10 does not exist") })
                                }, () => { console.log("Heading9 does not exist") })
                            }, () => { console.log("Heading8 does not exist") })
                        }, () => { console.log("Heading7 does not exist") })
                    }, () => { console.log("Heading6 does not exist") })
                }, () => { console.log("Heading5 does not exist") })
            }, () => { console.log("Heading4 does not exist") })
        }, () => { console.log("Heading3 does not exist") })
    }, () => { console.log("Heading2 does not exist") })
}, () => { console.log("Heading1 does not exist") })
