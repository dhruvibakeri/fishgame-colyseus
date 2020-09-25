"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.isEmpty = exports.rest = exports.first = exports.printInfinite = exports.printLimited = exports.view = exports.nonEmptyWithLimit = exports.nonEmptyNoLimit = exports.emptyWithLimit = exports.emptyNoLimit = exports.controller = exports.isNonEmptyWithLimit = exports.isNonEmptyNoLimit = exports.isEmptyWithLimit = exports.isEmptyNoLimit = void 0;
const LIMIT = 20;
const LIMIT_FLAG = "-limit";
const DEFAULT = "hello world";
const INFINITY = "infinity";
// CASE ANALYSIS on the structure of the INPUT:
// With PREDICATES to identify each case:
// CASE 1: Input is EMPTY (No LIMIT flag or anything else either) 
//   Ex: ./xyes
function isEmptyNoLimit(args) {
    return isEmpty(args);
}
exports.isEmptyNoLimit = isEmptyNoLimit;
// CASE 2: Input is NONEMPTY but JUST has the LIMIT flag
//   Ex: ./xyes -limit
function isEmptyWithLimit(args) {
    return !isEmpty(args) && isEmpty(rest(args)) && (first(args) === LIMIT_FLAG);
}
exports.isEmptyWithLimit = isEmptyWithLimit;
// CASE 3: Input is NONEMPTY without LIMIT flag
//   Ex: ./xyes blue green
function isNonEmptyNoLimit(args) {
    return !isEmpty(args) && (first(args) !== LIMIT_FLAG);
}
exports.isNonEmptyNoLimit = isNonEmptyNoLimit;
// CASE 4: Input is NONEMPTY with LIMIT flag
//   Ex: ./xyes -limit red
function isNonEmptyWithLimit(args) {
    return !isEmpty(args) && !isEmpty(rest(args)) && (first(args) === LIMIT_FLAG);
}
exports.isNonEmptyWithLimit = isNonEmptyWithLimit;
// - - - - - - - - - - - - - - - - - - - - - CONTROLLER - - - - - - - - - - - - - - - - - - - - - -
// Maps the arguments to a PrintModel (string to
// print and number of times to print it)to view
function controller(args) {
    if (isEmptyNoLimit(args)) {
        return emptyNoLimit();
    }
    else if (isEmptyWithLimit(args)) {
        return emptyWithLimit();
    }
    else if (isNonEmptyNoLimit(args)) {
        return nonEmptyNoLimit(args);
    }
    else if (isNonEmptyWithLimit(args)) {
        return nonEmptyWithLimit(args);
    }
    else {
        throw new Error("Shouldn't be possible!");
    }
}
exports.controller = controller;
// CASE 1: For an empty input with no limit - default with infinity times. 
function emptyNoLimit() {
    return { stringToPrint: DEFAULT, loopCount: INFINITY };
}
exports.emptyNoLimit = emptyNoLimit;
// CASE 2: For only the limit flag - hello world 20 times. 
function emptyWithLimit() {
    return { stringToPrint: DEFAULT, loopCount: LIMIT };
}
exports.emptyWithLimit = emptyWithLimit;
// CASE 3: For empty with no limit flag - arguments infinite times. 
function nonEmptyNoLimit(args) {
    return { stringToPrint: args.join(" "), loopCount: INFINITY };
}
exports.nonEmptyNoLimit = nonEmptyNoLimit;
// CASE 4: For non-empty args wih no limit - arguments infinite times.
function nonEmptyWithLimit(args) {
    return { stringToPrint: rest(args).join(" "), loopCount: LIMIT };
}
exports.nonEmptyWithLimit = nonEmptyWithLimit;
// - - - - - - - - - - - - - - -  - - - - - VIEW - - - - - - - - - - - - - - - - - - - - - - - - - 
// Case analysis on PrintModel. Prints the `stringToPrint` `loopCount` times. 
function view(printModel) {
    return printModel.loopCount === INFINITY
        ? printInfinite(printModel.stringToPrint)
        : printLimited(printModel.stringToPrint, printModel.loopCount);
}
exports.view = view;
// prints `str` `n` times.
// EFFECT: prints to STDOUT
// ASSUMPTION: n >= 0
function printLimited(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}
exports.printLimited = printLimited;
// Prints str continuously.
// WARNING: Infinite loop
function printInfinite(str) {
    while (true) {
        console.log(str);
    }
}
exports.printInfinite = printInfinite;
// - - - - - - - - GENERIC HELPERS - - - - - - - -
// first element of arr
// ASSUMPTION: arr is non empty
function first(arr) {
    return arr[0];
}
exports.first = first;
// all but first element of arr
// ASSUMPTION: arr is non empty
function rest(arr) {
    return arr.slice(1);
}
exports.rest = rest;
// is the arr empty?
function isEmpty(arr) {
    return arr.length === 0;
}
exports.isEmpty = isEmpty;
// - - - - - MAIN - - - - - 
// starts the program
function main() {
    const args = process.argv.slice(2);
    const printModel = controller(args);
    view(printModel); // I.O.
}
exports.main = main;
main();
//# sourceMappingURL=index.js.map