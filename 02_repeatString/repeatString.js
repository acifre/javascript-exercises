const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    } else {
        newString = "";

        for (let i = 0; i < num; i++) {
            newString += string;
        }
    
        return newString;
    }

};

// Do not edit below this line
module.exports = repeatString;
