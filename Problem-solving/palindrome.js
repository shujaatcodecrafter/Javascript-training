// program to check if the string is  palindrome or not ?
//example user enter mom then function should return true else ?
// example: user enter rupesh 
// do not built in function 


// function checkPalindrome(string) {
//length of the string
// const len = string.length;
// console.log(len);


//write logic here .
// for (let i = 0; i < len / 2; i++) {
// console.log(string[i]);
// check if first and last string are same 
// console.log(string[len - 1 - i]);
// if (string[i] != string[len - 1 - i]) {
// console.log("it is not a palindrome")
// }
// }
// }
// console.log("it is a palindrome");


// take input
// const string = prompt('Enter a string: ');



// call the function
// const value = checkPalindrome(string);


// console.log(value);




let string = prompt("Please enter a string");

let len = string.length;
let msg = "It is a Palindrome";
for (let i = 0; i < len / 2; i++) {
    // console.log(string[i])
    // console.log(string[len - 1 - i]);
    if (string[i] != string[len - 1 - i]) {
        // check if first and last string are same 
        msg = "it is not a palindrome"
    }
}
console.log(`${string}: ${msg}`);