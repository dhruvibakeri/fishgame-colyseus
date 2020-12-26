import { BoardMove } from "../../game-tree/game-tree-state";
import { BoardPosn } from "../../utils/other-data-definitions";
import { CPenguin } from "../compact-state/compact-state-data-definition";
import {
  MAKE_GameState,
  MAKE_GameStateDone,
  MAKE_GameStatePlacing,
  MAKE_GameStatePlaying,
  MAKE_PenguinSpace,
  MAKE_Player,
} from "./game-state-constructors";
import {
  Board,
  Fishes,
  GameState,
  GameStatePlaying,
  HOLE,
  Penguin,
  PenguinColor,
  Player,
  Players,
  Space,
  Tile,
  UsableSpace,
} from "./game-state-data-definition";
import { PRED_isPenguinSpace } from "./game-state-predicates";
import { getReachable } from "./game-state-reachable";
import {
  GET_GameStateBoard,
  GET_GameStateKind,
  GET_GameStateNextToPlace,
  GET_GameStatePlayers,
  GET_OnTile,
  GET_OnUsableSpace,
  GET_penguinColor,
  GET_PlayerColor,
  GET_PlayerScore,
  GET_PlayerStatus,
  GET_totalFishes,
  GET_totalFishesFromPenguin,
} from "./game-state-selectors";

/**
 * creates a GameState where player whose turn it is,is at the given posn
 */
export function placeAtPosn(
  bPosn: BoardPosn,
  state: GameState,
  scoreToAdd: number
): GameState {
  const [row, col] = [bPosn.row, bPosn.col];
  const stateKind = GET_GameStateKind(state);
  const board: Board = GET_GameStateBoard(state);
  const players: Players = GET_GameStatePlayers(state);
  let fishesToCollect = GET_totalFishes(
    GET_OnTile(
      GET_OnUsableSpace(board[row][col] as UsableSpace) as Tile
    ) as Fishes
  );
  let boardPlaced: Board = placeOnBoard(
    board,
    bPosn,
    MAKE_PenguinSpace(GET_PlayerColor(players[0]), fishesToCollect)
  );
  let newPlayers: Players = updateAndRotateScore(players, (old) => {
    return old + scoreToAdd;
  });
  return MAKE_GameState(
    MAKE_GameStatePlaying(stateKind, boardPlaced, newPlayers[0], newPlayers)
  );
}

/**
 * places the given space at BoardPosn in Board.
 */
export function placeOnBoard(
  board: Board,
  bPosn: BoardPosn,
  space: Space
): Board {
  let [row, col] = [bPosn.row, bPosn.col];
  board[row][col] = space;
  return board;
}

/**
 * Update the first elem of players with new score, then rotate the Players anti-clockwise.
 * This brings the player's whose turn is next at the top of the Players list
 */
export function updateAndRotateScore(
  players: Players,
  transFunc: (oldScore: number) => number
): Players {
  const [currentPlayer, ...restOfPlayers] = players;
  const currentPenguin: PenguinColor = GET_PlayerColor(currentPlayer);
  const currentScore: number = GET_PlayerScore(currentPlayer);
  const newCurrentPlayerScore: Player = MAKE_Player(
    currentPenguin,
    transFunc(currentScore),
    GET_PlayerStatus(currentPlayer)
  );
  return [...restOfPlayers, newCurrentPlayerScore];
}

export function addFinalScore(state: GameState): GameState {
  const board: Board = GET_GameStateBoard(state);
  const players: Players = GET_GameStatePlayers(state);
  const nplayers: Players = [];
  for (let i = 0; i < players.length; i++) {
    let nscore = players[i].score; //+ getTotalFishesWithPenguin(players[i].penguinColor, board)
    nplayers.push(
      MAKE_Player(players[i].penguinColor, nscore, players[i].playerStatus)
    );
  }
  return MAKE_GameState(
    MAKE_GameStatePlaying(
      "playing",
      board,
      GET_GameStateNextToPlace(state),
      nplayers
    )
  );
}

function getTotalFishesWithPenguin(
  penguinColor: PenguinColor,
  board: Board
): number {
  let fishCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (PRED_isPenguinSpace(board[i][j])) {
        if (
          GET_penguinColor(
            GET_OnTile(
              GET_OnUsableSpace(board[i][j] as UsableSpace) as Tile
            ) as Penguin
          ) == penguinColor
        ) {
          fishCount =
            fishCount +
            GET_totalFishesFromPenguin(
              GET_OnTile(
                GET_OnUsableSpace(board[i][j] as UsableSpace) as Tile
              ) as Penguin
            );
        }
      }
    }
  }
  return fishCount;
}

// creates a deep copy of the given Board
export function duplicateCBoard(board: Board): Board {
  var newArray = board.map(function (b) {
    return b.slice();
  });
  return newArray;
}

/**
 * Moves the player whose turn it currently is to bMove in GameState.
 */
export function moveGameState(state: GameState, bMove: BoardMove): GameState {
  const stateKind = GET_GameStateKind(state);
  const board: Board = GET_GameStateBoard(state);
  const players: Players = GET_GameStatePlayers(state);
  let nBoard = duplicateCBoard(board);
  if (bMove === "SKIP") {
    let newPlayers = updateAndRotateScore(players, (oldScore) => oldScore);
    return MAKE_GameState(
      MAKE_GameStatePlaying(stateKind, nBoard, newPlayers[0], newPlayers)
    );
  } else {
    const [fromPosn, toPosn] = bMove;
    const [fromRow, fromCol] = [fromPosn.row, fromPosn.col];
    let fishesToCollect = GET_totalFishesFromPenguin(
      GET_OnTile(
        GET_OnUsableSpace(board[fromRow][fromCol] as UsableSpace) as Tile
      ) as Penguin
    );
    const placedState = placeAtPosn(
      toPosn,
      MAKE_GameState(
        MAKE_GameStatePlaying(stateKind, nBoard, players[0], players)
      ),
      fishesToCollect
    );
    nBoard[fromRow][fromCol] = {
      spaceKind: "usableSpace",
      onUsableSpace: { onUsableSpaceKind: "hole" },
    };
    return placedState;
  }
}

/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
export function getPenguinPositions(
  penguin: Player,
  state: GameState
): BoardPosn[] {
  const board: Board = GET_GameStateBoard(state);
  let posns: BoardPosn[] = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (PRED_isPenguinSpace(board[i][j])) {
        if (
          GET_penguinColor(
            GET_OnTile(
              GET_OnUsableSpace(board[i][j] as UsableSpace) as Tile
            ) as Penguin
          ) == GET_PlayerColor(penguin)
        ) {
          posns.push({ row: i, col: j });
        }
      }
    }
  }
  return posns;
}

export function hasMovesLeft(
  penguin: Player,
  state: GameStatePlaying
): boolean {
  let fromPosns: BoardPosn[] = getPenguinPositions(penguin, state);

  let res = 0;

  fromPosns.forEach((p) => {
    let res_temp = getReachable(state.board, p).length;
    res += res_temp;
  });

  return res > 0;
}

/**
 * gets the positions of all the penguins of the given player in the given GameState
 */
export function getPenguinPositionsForGameBoard(
  penguin: Player,
  state: GameState
): BoardPosn[] {
  const board: Board = GET_GameStateBoard(state);
  let posns: BoardPosn[] = [];

  for (let i = 0; i < board.length; i++) {
    // goes through all even colums (even rows in game board representation)
    for (let j = 0; j < board[i].length; j = j + 2) {
      if (PRED_isPenguinSpace(board[i][j])) {
        if (
          GET_penguinColor(
            GET_OnTile(
              GET_OnUsableSpace(board[i][j] as UsableSpace) as Tile
            ) as Penguin
          ) == GET_PlayerColor(penguin)
        ) {
          posns.push({ row: i, col: j });
        }
      }
    }
    // goes through all odd colums (odd rows in game board representation)
    for (let k = 1; k < board[i].length; k = k + 2) {
      if (PRED_isPenguinSpace(board[i][k])) {
        if (
          GET_penguinColor(
            GET_OnTile(
              GET_OnUsableSpace(board[i][k] as UsableSpace) as Tile
            ) as Penguin
          ) == GET_PlayerColor(penguin)
        ) {
          posns.push({ row: i, col: k });
        }
      }
    }
  }
  return posns;
}

export function getAllPenguinPositionsForGameBoard(
  state: GameState
): BoardPosn[] {
  const board: Board = GET_GameStateBoard(state);
  let posns: BoardPosn[] = [];

  for (let i = 0; i < board.length; i++) {
    // goes through all even colums (even rows in game board representation)
    for (let j = 0; j < board[i].length; j = j + 2) {
      if (PRED_isPenguinSpace(board[i][j])) {
        posns.push({ row: i, col: j });
      }
    }
    // goes through all odd colums (odd rows in game board representation)
    for (let k = 1; k < board[i].length; k = k + 2) {
      if (PRED_isPenguinSpace(board[i][k])) {
        posns.push({ row: i, col: k });
      }
    }
  }
  return posns;
}

export function placePenguinAtPosn(
  bPosn: BoardPosn,
  state: GameState
): GameState {
  const [row, col] = [bPosn.row, bPosn.col];
  const stateKind = GET_GameStateKind(state);
  const board: Board = GET_GameStateBoard(state);
  const players: Players = GET_GameStatePlayers(state);
  let fishesToCollect = GET_totalFishes(
    GET_OnTile(
      GET_OnUsableSpace(board[row][col] as UsableSpace) as Tile
    ) as Fishes
  );
  let boardPlaced: Board = placeOnBoard(
    board,
    bPosn,
    MAKE_PenguinSpace(GET_PlayerColor(players[0]), fishesToCollect)
  );
  let newPlayers: Players = updateAndRotateScore(players, (old) => {
    return old + 0;
  });
  return MAKE_GameState(
    MAKE_GameStatePlacing(stateKind, boardPlaced, newPlayers[0], newPlayers)
  );
}
