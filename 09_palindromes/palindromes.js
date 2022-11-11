const palindromes = function (word) {
    processedString = word.toLowerCase().replace(/[^a-z]/g, "");   
    if(processedString.split("").reverse().join("") == processedString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
