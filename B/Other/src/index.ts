const LIMIT = 20;
const LIMIT_FLAG = "-limit";
const DEFAULT = "hello world";
const INFINITY = "infinity";

// CASE ANALYSIS on the structure of the INPUT:
// With PREDICATES to identify each case:

// CASE 1: Input is EMPTY (No LIMIT flag or anything else either) 
//   Ex: ./xyes
export function isEmptyNoLimit(args: string[]): boolean {
    return isEmpty(args);
}

// CASE 2: Input is NONEMPTY but JUST has the LIMIT flag
//   Ex: ./xyes -limit
export function isEmptyWithLimit(args: string[]): boolean {
    return !isEmpty(args) && isEmpty(rest(args)) && (first(args) === LIMIT_FLAG)
}

// CASE 3: Input is NONEMPTY without LIMIT flag
//   Ex: ./xyes blue green
export function isNonEmptyNoLimit(args: string[]): boolean {
    return !isEmpty(args) && (first(args) !== LIMIT_FLAG)
}

// CASE 4: Input is NONEMPTY with LIMIT flag
//   Ex: ./xyes -limit red
export function isNonEmptyWithLimit(args: string[]): boolean {
    return !isEmpty(args) && !isEmpty(rest(args)) && (first(args) === LIMIT_FLAG)
}

// - - MODEL - - 

// PrintModel has
// - the string to print on each line
// - the number off times to print (either a natural number or infinity)
export type PrintModel = {
    stringToPrint: string,
    loopCount: number | "infinity"
}

// - - - - - - - - - - - - - - - - - - - - - CONTROLLER - - - - - - - - - - - - - - - - - - - - - -

// Maps the arguments to a PrintModel (string to
// print and number of times to print it)to view
export function controller(args: string[]): PrintModel {
    if (isEmptyNoLimit(args)) {
        return emptyNoLimit();
    } else if (isEmptyWithLimit(args)) {
        return emptyWithLimit();
    } else if (isNonEmptyNoLimit(args)) {
        return nonEmptyNoLimit(args);
    } else if (isNonEmptyWithLimit(args)) {
        return nonEmptyWithLimit(args);
    } else {
        throw new Error("Shouldn't be possible!");
    }
}

// CASE 1: For an empty input with no limit - default with infinity times. 
export function emptyNoLimit(): PrintModel {
    return { stringToPrint: DEFAULT, loopCount: INFINITY };
}

// CASE 2: For only the limit flag - hello world 20 times. 
export function emptyWithLimit(): PrintModel {
    return { stringToPrint: DEFAULT, loopCount: LIMIT };
}

// CASE 3: For empty with no limit flag - arguments infinite times. 
export function nonEmptyNoLimit(args: string[]): PrintModel {
    return { stringToPrint: args.join(" "), loopCount: INFINITY };
}

// CASE 4: For non-empty args wih no limit - arguments infinite times.
export function nonEmptyWithLimit(args: string[]): PrintModel {
    return { stringToPrint: rest(args).join(" "), loopCount: LIMIT };
}

// - - - - - - - - - - - - - - -  - - - - - VIEW - - - - - - - - - - - - - - - - - - - - - - - - - 

// Case analysis on PrintModel. Prints the `stringToPrint` `loopCount` times. 
export function view(printModel: PrintModel): void {
    return printModel.loopCount === INFINITY
        ? printInfinite(printModel.stringToPrint)
        : printLimited(printModel.stringToPrint, printModel.loopCount);
}

// prints `str` `n` times.
// EFFECT: prints to STDOUT
// ASSUMPTION: n >= 0
export function printLimited(str: string, n: number): void {
    for (let i = 0; i < n; i++) {
        console.log(str)
    }
}
// Prints str continuously.
// WARNING: Infinite loop
export function printInfinite(str: string): void {
    while (true) {
        console.log(str)
    }
}

// - - - - - - - - GENERIC HELPERS - - - - - - - -

// first element of arr
// ASSUMPTION: arr is non empty
export function first<T>(arr: T[]): T {
    return arr[0];
}
// all but first element of arr
// ASSUMPTION: arr is non empty
export function rest<T>(arr: T[]): T[] {
    return arr.slice(1)
}
// is the arr empty?
export function isEmpty<T>(arr: T[]): boolean {
    return arr.length === 0;
}

// - - - - - MAIN - - - - - 

// starts the program
export function main(): void {
    const args: string[] = process.argv.slice(2)
    const printModel: PrintModel = controller(args)
    view(printModel) // I.O.
}

main()