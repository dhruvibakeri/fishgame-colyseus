export function isOdd(n: number): boolean {
  return n % 2 === 1;
}

export function isEven(n: number): boolean {
  return n % 2 === 0;
}

export function log(a: any): void {
  console.log(str(a));
}


export function str(a: any): string {
  return JSON.stringify(a)
}

