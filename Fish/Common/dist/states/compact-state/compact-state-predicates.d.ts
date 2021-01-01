import { CSpace, CFish, CPenguin, CUnusable, CHole } from "./compact-state-data-definition";
export declare function PRED_isCSpaceACFish(cSpace: CSpace): cSpace is CFish;
export declare function PRED_isCSpaceACPenguin(cspace: CSpace): cspace is CPenguin;
export declare function PRED_isCSpaceACUnusable(cspace: CSpace): cspace is CUnusable;
export declare function TEMPLATE_Unusable(cUnusable: CUnusable): void;
export declare function PRED_isCSpaceACHole(cspace: CSpace): cspace is CHole;
export declare function PRED_isCState(cstate: any): boolean;
//# sourceMappingURL=compact-state-predicates.d.ts.map