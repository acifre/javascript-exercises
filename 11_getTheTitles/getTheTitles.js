const getTheTitles = function(books) {

    titleArray = [];

    for (let book of books) {
        titleArray.push(book.title);
    }

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
