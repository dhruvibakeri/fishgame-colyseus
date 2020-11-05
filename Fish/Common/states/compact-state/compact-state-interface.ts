import { getColFromInputPosition, getRowFromInputPosition } from "../input-state/input-state-interface";
import { CPosn } from "./compact-state-data-definition";

/**
 * Get row from CPosn.
 */
export function getRowFromCPosn(cPosn: CPosn): number {
  return cPosn[0];
}

/**
 * Get col from CPosn.
 */
export function getColFromCPosn(cPosn: CPosn): number {
  return cPosn[0];
}

export function makeCPosn(row: number, col: number): CPosn {
  return [row, col];
}


export function compactPosnToBoardPosn(cPosn: CPosn) {
  return {
    row: getRowFromInputPosition(cPosn),
    col: getColFromInputPosition(cPosn)
  }
}