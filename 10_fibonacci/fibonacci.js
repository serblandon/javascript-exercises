const fibonacci = function(number) {
    if(number < 0) {
        return "OOPS";
    }
    first = 1;
    second = 1;
    if(number == 1 || number == 2) {
        return 1;
    }
    else {
    for(let i = 2; i < number; i++) {
        aux = second;
        second = first + second;
        first = aux;
        
    } 
    return second;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
