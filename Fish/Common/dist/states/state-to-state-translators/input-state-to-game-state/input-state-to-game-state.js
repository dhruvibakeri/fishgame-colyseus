// import { InputBoard, InputPlayer, InputState } from "../../input-state/input-state-data-definition";
// import { Board, GameState, PenguinColor, Player, Players, Space } from "../../game-state/game-state-data-definition";
// import { getFirstPlayer } from "../../input-state/input-state-interface"
// import { CBoard, CSpace } from "../../compact-state/compact-state-data-definition";
// import { inputBoardToCompactBoard } from "../input-state-to-compact-state/input-state-to-compact-state";
// // Input State to Game State
// function inputStateToGameState(inputState: InputState) {
//   // game state in playing state
//   // let gameStateKind = "playing";
//   // { 
//   //   gameStateKind: "playing",
//   //   board: Board,
//   //   nextToPlace: Player,
//   //   players: Players
//   // };
//   let samplePlayer = { penguinColor: "red", score: 0, playerStatus: "online" }
//   return {
//     gameStateKind: "playing",
//     board: inputBoardToGameStateBoard(inputState.board, inputState.players),
//     nextToPlace: inputPlayerToGameStatePlayer(getFirstPlayer(inputState)),
//     players: inputState.players.map(inputPlayerToGameStatePlayer)
//   }
// }
// function inputBoardToGameStateBoard(inputBoard: InputBoard, inputPlayers: InputPlayer[]) {
//   let cBoard: CBoard = inputBoardToCompactBoard(inputBoard);
//   let gameBoard: Board = [];
//   for (let rowIdx = 0; rowIdx < cBoard.length; rowIdx++) {
//     let gameSpaceRow: Space[] = [];
//     for (let colIdx = 0; colIdx < cBoard[rowIdx].length; colIdx++) {
//       // ONGOING WORK
//       let space: CSpace = cBoard[rowIdx][colIdx];
//     }
//     gameBoard.push(gameSpaceRow)
//   }
//   return gameBoard;
// }
// function inputPlayerToGameStatePlayer(inputPlayer: InputPlayer): Player {
//   let penguinColor = inputPlayer.color as PenguinColor;
//   return {
//     penguinColor: penguinColor,
//     score: inputPlayer.score,
//     playerStatus: "online"
//   }
// }
// function compactSpaceToGameSpace(cSpace: CSpace): Space {
//   if (typeof cSpace === "number") {
//     return mkFishesOnly(cSpace);
//   } else if (cSpace === "unusable") {
//     return mkUnusable()
//   } else if (cSpace === "hole") {
//     return mkHole();
//   } else {
//     throw Error("Bad initial compact board");
//   }
// }
// function mkUnusable(): Space {
//   return { spaceKind: "unusableSpace" }
// }
// function mkHole(): Space {
//   return {
//     spaceKind: "usableSpace",
//     onUsableSpace: {
//       onUsableSpaceKind: "hole"
//     }
//   }
// }
// function mkFishesOnly(totalFishes: number): Space {
//   return {
//     spaceKind: "usableSpace",
//     onUsableSpace: {
//       onUsableSpaceKind: "tile",
//       tileInfo: mkTileInfo(),
//       onTile: {
//         onTileKind: "fishes",
//         totalFishes: totalFishes
//       }
//     }
//   }
// }
// function mkWithPenguin(penguinColor: string, totalFishes: number): Space {
//   return {
//     spaceKind: "usableSpace",
//     onUsableSpace: {
//       onUsableSpaceKind: "tile",
//       tileInfo: mkTileInfo(),
//       onTile: {
//         onTileKind: "penguin",
//         penguinColor: penguinColor as PenguinColor,
//         totalFishes: totalFishes
//       }
//     }
//   }
// }
// function mkTileInfo() {
//   return { size: 75, maxElements: 5 };
// }
//# sourceMappingURL=input-state-to-game-state.js.map