import { CBoard, CPenguin, CState } from "../states/compact-state/compact-state-data-definition";
import { BoardPosn } from "../utils/other-data-definitions";
export declare let PLACEMENT_POSN: BoardPosn;
export declare let FROM_POSN: BoardPosn;
export declare let TO_POSN: BoardPosn;
export declare let CAN_MOVE: boolean;
export declare function renderPenguinRoster(cpenguins: CPenguin[], htmlCanvas: any, fabricCanvas: any): void;
export declare function renderChatBox(messages: string[], htmlCanvas: any, fabricCanvas: any): void;
export declare function renderBoard(size: number, board: CBoard, canvas: any, state?: CState): void;
//# sourceMappingURL=render-state.d.ts.map