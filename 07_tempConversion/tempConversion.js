const ftoc = function(temp) {
    temp = (temp - 32) * 5 / 9 ;
    temp = Number(temp.toFixed(1));
    return temp;
};

const ctof = function(temp) {
    temp = temp * 9 / 5 + 32;
    temp = Number(temp.toFixed(1));
    return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
