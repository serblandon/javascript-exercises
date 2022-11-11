const reverseString = function(string) {
    const arr = string.split("");
    const rev_arr = arr.reverse();
    const result = rev_arr.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
