const removeFromArray = function(array, ...remove) {
    const newArray = [];
    array.forEach(value => {
        if (!remove.includes(value)) newArray.push(value);
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;