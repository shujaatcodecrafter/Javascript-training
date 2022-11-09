
const char = prompt("Enter a string")

const findVowelOrNot = () => {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(`${char}:  is vowel`);
    } else {
        console.log(`${char}: is consonant`)
    }
};
findVowelOrNot();