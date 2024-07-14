const repeatString = function(text, repeatInt) {
    if (repeatInt < 0) return "ERROR";
    let output = '';
    for (i = 0; i < repeatInt; i++) {
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
