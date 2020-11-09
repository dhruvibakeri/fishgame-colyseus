"use strict";
exports.__esModule = true;
exports.PRED_isCState = exports.PRED_isCSpaceACHole = exports.TEMPLATE_Unusable = exports.PRED_isCSpaceACUnusable = exports.PRED_isCSpaceACPenguin = exports.PRED_isCSpaceACFish = void 0;
function PRED_isCSpaceACFish(cSpace) {
    return typeof cSpace === "number";
}
exports.PRED_isCSpaceACFish = PRED_isCSpaceACFish;
function PRED_isCSpaceACPenguin(cspace) {
    return cspace[0] === "red" || cspace[0] === "brown" || cspace[0] === "black" || cspace[0] === "white";
}
exports.PRED_isCSpaceACPenguin = PRED_isCSpaceACPenguin;
;
function PRED_isCSpaceACUnusable(cspace) {
    return cspace === "unusable";
}
exports.PRED_isCSpaceACUnusable = PRED_isCSpaceACUnusable;
;
function TEMPLATE_Unusable(cUnusable) {
    cUnusable;
}
exports.TEMPLATE_Unusable = TEMPLATE_Unusable;
function PRED_isCSpaceACHole(cspace) {
    return cspace === "hole";
}
exports.PRED_isCSpaceACHole = PRED_isCSpaceACHole;
;
function PRED_isCState(cstate) {
    return (Array.isArray(cstate)
        && cstate.length === 3);
}
exports.PRED_isCState = PRED_isCState;
