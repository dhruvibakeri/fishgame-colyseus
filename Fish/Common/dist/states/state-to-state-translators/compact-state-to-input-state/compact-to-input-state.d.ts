import { CBoard, CPosn, CScore, CScores } from "../../compact-state/compact-state-data-definition";
import { InputBoard, InputPlayer, InputPosition } from "../../input-state/input-state-data-definition";
export declare function compactPlayerToInputPlayerChange(player: CScore, toMove: CPosn, prevPosns: InputPosition[]): InputPlayer;
export declare function compactPlayerToInputPlayer(player: CScore, prevPosns: InputPosition[]): InputPlayer;
export declare function compactPlayersToInputPlayers(players: CScores, toMove: CPosn, prevPlayers: InputPlayer[]): InputPlayer[];
export declare function compactBoardToResultBoard(ourBoard: CBoard): InputBoard;
//# sourceMappingURL=compact-to-input-state.d.ts.map