/**
 * Is the number's parity odd?
 * @param {Natural} n The number whose parity is to be determined.
 * @returns Whether the number is odd?
 */
export function isOdd(n: number): boolean {
  return n % 2 === 1;
}
/**
* Is the number's parity even?
* @param {Natural} n The number whose parity is to be determined.
* @returns Whether the number is even.
*/
export function isEven(n: number): boolean {
  return n % 2 === 0;
}