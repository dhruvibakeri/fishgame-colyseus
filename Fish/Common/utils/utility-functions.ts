import { CPosn } from "../states/compact-state/compact-state-data-definition";
import { InputPosition } from "../states/input-state/input-state-data-definition";
import { compactPosnToInputPosn } from "../states/state-to-state-translators/input-state-to-compact-state/input-state-to-compact-state";
import { BoardPosn } from "./other-data-definitions";

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

export function boardPosnToCompactPosn(boardPosn: BoardPosn): CPosn {
  return [boardPosn.row, boardPosn.col];
}

export function boardPosnToInputPosn(boardPosn: BoardPosn): InputPosition {
  return compactPosnToInputPosn(boardPosnToCompactPosn(boardPosn));
}