const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR";
    }
    let stringres = '';
    for(let i = 0; i < num; i++) {
        stringres += string;
    }
    return stringres;
};

// Do not edit below this line
module.exports = repeatString;
