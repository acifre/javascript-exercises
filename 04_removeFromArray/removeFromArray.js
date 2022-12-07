const removeFromArray = function(array, remove) {
    aLen = arguments.length;
    for (let i = 1; i < aLen; i++) {
        index =array.indexOf(arguments[i]);
        if (index > -1) {
            newArray = array.splice(index, 1);
        }
    }
    
    return array;
};

// for mutliple arguments well need to use a for loop probably

// Do not edit below this line
module.exports = removeFromArray;
