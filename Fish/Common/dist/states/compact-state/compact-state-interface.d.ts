import { CPosn } from "./compact-state-data-definition";
/**
 * Get row from CPosn.
 */
export declare function getRowFromCPosn(cPosn: CPosn): number;
/**
 * Get col from CPosn.
 */
export declare function getColFromCPosn(cPosn: CPosn): number;
export declare function makeCPosn(row: number, col: number): CPosn;
export declare function compactPosnToBoardPosn(cPosn: CPosn): {
    row: number;
    col: number;
};
//# sourceMappingURL=compact-state-interface.d.ts.map