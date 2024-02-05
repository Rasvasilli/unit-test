// src/calc.js

/**
* Adds two numbers together
* @param {number} a
* @param {number} b
* @returns {number}
*/
const sum = (a, b) => a + b;

/**
* Subtracts number from minuend
* @param {number} minuend
* @param {number} subtrahend
* @returns {number} difference
*/
const subtract = (minuend, subtrahend) => {
    return minuend - subtrahend;
}

const multiply = (multiplier, multiplicant) => {
    return multiplier * multiplicant;
}

/**
* Divide two numbers
* @param {number} dividend
* @param {number} divisor
* @returns {number} difference
* @throws {Error} 0 division
*/
const divide = (dividend, divisor) => {
    if (divisor == 0) throw new Error("0 division not allowed");
    const fraction = dividend / divisor;
    return fraction;
}

export default {sum, subtract, multiply, divide}
