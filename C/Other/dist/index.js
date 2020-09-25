"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitByIndex = exports.getLastNumInStr = exports.stringToJSONS = exports.xjson = exports.main = void 0;
const readline = require('readline');
const LosslessJSON = require('lossless-json');
// Compiles all the lines from
// STDIN and sends to `xjson`
function main() {
    let lines = [];
    let readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.on('line', (l) => lines.push(l));
    readLine.on('close', () => {
        console.log(xjson(lines));
    });
}
exports.main = main;
// each string in lines represents a line from STDIN
// outputs a string with two lines:
// 1st: { count: # of JSON values, seq: array of JSON values }
// 2nd: Array with total values followed by values in reverse
function xjson(lines) {
    const jsons = stringToJSONS(lines.join("\n"));
    return LosslessJSON.stringify({ count: jsons.length, seq: jsons })
        + "\n"
        + LosslessJSON.stringify([jsons.length, ...jsons.reverse()]);
}
exports.xjson = xjson;
// string -> JSON[]
// Converts a string containing a sequence
// of valid JSON representation to JSON[]
function stringToJSONS(jsonSeqStr) {
    if (jsonSeqStr.trim().length === 0) {
        return [];
    }
    else {
        try {
            // Note to the reader: we're checking for error messages
            // from JSON.parse so first, we try to parse using that!
            JSON.parse(jsonSeqStr);
            return [LosslessJSON.parse(jsonSeqStr)];
        }
        catch (error) {
            let splitIdx = getLastNumInStr(error.toString());
            const [lhs, rhs] = splitByIndex(jsonSeqStr, splitIdx);
            // TERMINATION ARGUMENT: splitByIndex splits the input 
            // into two parts, therefore recursive calls are on 
            // smaller inputs.
            return [...stringToJSONS(lhs), ...stringToJSONS(rhs)];
        }
    }
}
exports.stringToJSONS = stringToJSONS;
// get the last number in a string
// ASSUMPTION: a last number exists.
function getLastNumInStr(str) {
    return parseInt(str.match(/\d+(?=\D*$)/)[0]);
}
exports.getLastNumInStr = getLastNumInStr;
// splits input at index into a pair
// ASSUMPTION: 0-indexed and index within input.
function splitByIndex(input, index) {
    return [input.substr(0, index), input.substr(index)];
}
exports.splitByIndex = splitByIndex;
main();
//# sourceMappingURL=index.js.map