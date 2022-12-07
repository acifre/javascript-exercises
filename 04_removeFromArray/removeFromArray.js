const removeFromArray = function(array, remove) {
    index = array.indexOf(remove);
    if (index > -1) {
        newArray = array.splice(index, 1);
    }
    
    return array;
};

// for mutliple arguments well need to use a for loop probably

// Do not edit below this line
module.exports = removeFromArray;
