import { CState, CBoard, CScore, CSpace } from "./cstate";
export declare let all_places: CState[];
export declare function duplicateCBoard(board: CBoard): CBoard;
export declare function traverseCBoard(board: CBoard, penguinColor: CSpace): CBoard;
export declare function placePenguinStrategy(state: CState): CState;
export declare const placingboard: CBoard;
export declare const placingscore: CScore[];
export declare const placingstate: CState;
