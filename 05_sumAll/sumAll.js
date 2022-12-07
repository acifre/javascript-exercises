const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number' ) {
        return "ERROR";
    } else {
        if (num1 > num2) {
            first = num2;
            second = num1;
        } else {
            first = num1;
            second = num2;
        }
    
        let sum = 0;
    
        for (let i = first; i <= second; i++) {
            sum += i;
        }
        return sum;
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
