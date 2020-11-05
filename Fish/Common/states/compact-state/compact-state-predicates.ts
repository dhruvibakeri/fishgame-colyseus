import { CSpace, CFish, CPenguin, CUnusable, CHole } from "./compact-state-data-definition";

export function PRED_isCSpaceACFish(cSpace: CSpace): cSpace is CFish {
  return typeof cSpace === "number";
}

export function PRED_isCSpaceACPenguin(cspace: CSpace): cspace is CPenguin {
  return cspace[0] === "red" || cspace[0] === "brown" || cspace[0] === "black" || cspace[0] === "white"
};

export function PRED_isCSpaceACUnusable(cspace: CSpace): cspace is CUnusable {
  return cspace === "unusable"
};

export function TEMPLATE_Unusable(cUnusable: CUnusable): void {
  cUnusable
}

export function PRED_isCSpaceACHole(cspace: CSpace): cspace is CHole {
  return cspace === "hole"
};

export function PRED_isCState(cstate: any) {
  return (Array.isArray(cstate)
    && cstate.length === 3)
}