"use strict";
const getBig = (num1, num2) => {
    if (num1 < num2) {
        return num2;
    }
    else {
        return num1;
    }
};
//    console.log(getBig(10,5));
const printBig = (num1, num2) => {
    if (num1 < num2) {
        console.log(num2);
    }
    else {
        console.log(num1);
    }
};
const getDouble = (num) => {
    if (num % 2 == 0) {
        return "Double number";
    }
    else {
        return "Not Double number";
    }
};
const getLength = (text) => {
    return text.length;
};
const getArrayByNum = (num) => {
    const arrayNumbers = [];
    for (let index = 1; index < num + 1; index++) {
        arrayNumbers.push(index);
    }
    return arrayNumbers;
};
const getBigNumByArray = (arrayNumbers) => {
    return Math.max(...arrayNumbers);
};

console.log(getBigNumByArray([1, 3, 2, 8]));
