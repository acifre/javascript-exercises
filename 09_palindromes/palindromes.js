const palindromes = function (string) {

    newString = string
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .replace(/\s{2,}/g," ").replace(/\s/g, '')
        .toLowerCase()
        .trim();

    palindrome = "";

    for (let i = newString.length - 1; i >= 0; i--) {
        palindrome += newString[i];
    }

    return newString === palindrome;



};

// Do not edit below this line
module.exports = palindromes;
