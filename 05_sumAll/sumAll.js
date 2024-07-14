const sumAll = function(firstNum, secondNum) {
    if (firstNum <= 0 || secondNum <= 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    if (secondNum < firstNum) [firstNum, secondNum] = [secondNum, firstNum];

    let sum = 0;
    for (i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
