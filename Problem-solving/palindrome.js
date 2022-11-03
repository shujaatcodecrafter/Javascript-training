// program to check if the string is  palindrome or not ?
//example user enter mom then function should return true else ?
// example: user enter rupesh 
// do not built in function 


function checkPalindrome(string) {
    //length of the string
    const item = string.length;
    console.log(item);


    //write logic here .
    for (let i = 0; i < item; i++) {

        // check first and last string are same 
        if (string[i] === string[item - 1 - i]) {
            return "yes it is a palindrome";
        }
        return 'not a palindrome'
    }

}




// take input
const string = prompt('Enter a string: ');



// call the function
const value = checkPalindrome(string);



console.log(value);