const readline = require('readline');
const LosslessJSON = require('lossless-json');

// Compiles all the lines from
// STDIN and sends to `xjson`
export function main(): void {
    let lines: string[] = []
    let readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.on('line', (l: string) => lines.push(l));
    readLine.on('close', () => {
        console.log(xjson(lines));
    });
}

// each string in lines represents a line from STDIN
// outputs a string with two lines:
// 1st: { count: # of JSON values, seq: array of JSON values }
// 2nd: Array with total values followed by values in reverse
export function xjson(lines: string[]): string {
    const jsons: JSON[] = stringToJSONS(lines.join("\n"));
    return LosslessJSON.stringify({ count: jsons.length, seq: jsons })
        + "\n"
        + LosslessJSON.stringify([jsons.length, ...jsons.reverse()]);
}

// string -> JSON[]
// Converts a string containing a sequence
// of valid JSON representation to JSON[]
export function stringToJSONS(jsonSeqStr: string): JSON[] {
    if (jsonSeqStr.trim().length === 0) {
        return [];
    } else {
        try {
            // Note to the reader: we're checking for error messages
            // from JSON.parse so first, we try to parse using that!
            JSON.parse(jsonSeqStr)
            return [LosslessJSON.parse(jsonSeqStr)];
        } catch (error) {
            let splitIdx = getLastNumInStr(error.toString());
            const [lhs, rhs] = splitByIndex(jsonSeqStr, splitIdx);
            // TERMINATION ARGUMENT: splitByIndex splits the input 
            // into two parts, therefore recursive calls are on 
            // smaller inputs.
            return [...stringToJSONS(lhs), ...stringToJSONS(rhs)]
        }
    }
}

// get the last number in a string
// ASSUMPTION: a last number exists.
export function getLastNumInStr(str: string): number {
    return parseInt(str.match(/\d+(?=\D*$)/)[0])
}

// splits input at index into a pair
// ASSUMPTION: 0-indexed and index within input.
export function splitByIndex(input: string, index: number): [string, string] {
    return [input.substr(0, index), input.substr(index)];
}


main();