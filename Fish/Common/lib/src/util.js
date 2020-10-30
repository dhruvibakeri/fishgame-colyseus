"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = exports.log = exports.isEven = exports.isOdd = void 0;
function isOdd(n) {
    return n % 2 === 1;
}
exports.isOdd = isOdd;
function isEven(n) {
    return n % 2 === 0;
}
exports.isEven = isEven;
function log(a) {
    console.log(str(a));
}
exports.log = log;
function str(a) {
    return JSON.stringify(a);
}
exports.str = str;
