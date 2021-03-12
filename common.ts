import { length, dissoc, apply, not, isEmpty, find, defaultTo, append, filter, head, includes, tail, addIndex, any, concat, equals, take, identity, lensProp, map, repeat, set, times, unnest, without, update, findIndex, assoc, view, max, min, sum, range, splitEvery, takeLast, dropLast, reduce } from "ramda";
import { random, shuffle, isNumber, last, flatten, inRange, zip, isArray } from "lodash";

/** --------------------------------------------------------- tree ----------------------------------------------------------- */

/** Represents a game tree. It is either a root state or a branch that gives rise to subtrees. */
export type Tree = State | [State, () => Tree[]]

export const subtrees = (tree: Tree): Tree[] => tree[1]();
export const substates = (tree: Tree): State[] => applyDirectlyReachable(tree, identity);
export const stateFromTree = (tree: Tree): State => isArray(tree) ? tree[0] : tree

/** Apply a function f to all states directly reachable from tree. */
export const applyDirectlyReachable = <T>(tree: Tree, f: (t: State) => T): T[] =>
  isArray(tree) ? map(f, map(stateFromTree, subtrees(tree))) : []

/** Creates a game tree from a given base state using "next" transition function. */
export const fishTreeFromState = (state: State): Tree => [state, () => next(state)]

/** ASSUMPTION: initial board will be big enough to place all the penguins for 2, 3, 4 players. */
export const next = (state: State): Tree[] => state.stage === "placing" ? nextPlacing(state) : nextMoving(state);

/** "next" when the stage is "placing" */
export const nextPlacing = (state: State): Tree[] =>
  (isLastPlacement(state) ? transitionStage(placeStates(state)) : placeStates(state)).map(fishTreeFromState)

/** States with each possible penguin placed. */
export const placeStates = (state: State): State[] => map(p => placeAvatar(p, state), allPlaceablePositions(state))

/** Is only one penguin left to be placed? */
export const isLastPlacement = (state: State): boolean => (toPlace(state.players.length) - getPenguinPosns(state).length) === 1

/** "next" when the stage is "playing" */
export const nextMoving = (state: State): Tree[] => isGameOver(state) ? [] : moveGameNotOver(state);

/** ASSUMPTION: game not over in state */
export const moveGameNotOver = (state: State) =>
  isEmpty(moveStates(state)) ? [fishTreeFromState(skipMove(state))] : moveStates(state).map(fishTreeFromState)

/** A "skip move" transition on state. */
export const skipMove = (state: State): State =>
  ({ stage: state.stage, board: state.board, players: append(head(state.players), tail(state.players)) })

/** Total # of penguins left to be placed. */
export const toPlace = (players: number): number => (6 - players) * players

/** Transition stage from placing to playin in states */
export const transitionStage = (states: State[]): State[] => map(set(lensProp('stage'), "playing"), states)

/** States with each possible move moved. */
export const moveStates = (state: State): State[] =>
  unnest(map(place => map(movePos => moveAvatar(place, movePos, state),
    validMovePosns(state, place)), state.players[0].places))

/** All positions on which a penguin can be placed in state. */
export const allPlaceablePositions = (state: State): Posn[] =>
  filter(posn => !isUnreachablePosn(state, posn),
    unnest(map(e => <Posn[]>zip(repeat(e, state.board[0].length), times(identity, state.board[0].length)),
      times(identity, state.board.length))))

/** -------------------------------------------------------- board ----------------------------------------------------------- */

export const COLORS = ["red", "white", "brown", "black"]

/** Board dimensions to corner canvas positions for each hex. */
export const boardDimToCorners = (size: number, rin: number, cin: number, offset: number): [Posn, Posn, Posn, Posn, Posn, Posn][][] =>
  boardMap(sameFishBoard(0, rin, cin), (_r, rid, _c, cid) => hexCoordToCorners(size, rid, cid, offset))

/** MATH. Maps [row, col] to its associated hex corners [xPx, yPx][]  */
export const hexCoordToCorners = (size: number, rowIndex: number, colIndex: number, offset: number): [Posn, Posn, Posn, Posn, Posn, Posn] =>
  cornersFromWest(size, [rowIndex % 2 === 0 ? 4 * colIndex * size + offset : ((colIndex * 4) + 2) * size + offset, (rowIndex + 1) * size + offset]);

/** Generate all other corners (going clockwise from west) from the west corner. */
export const cornersFromWest = (size: number, [xPxWest, yPxWest]: Posn): [Posn, Posn, Posn, Posn, Posn, Posn] =>
  [[yPxWest, xPxWest], [yPxWest - size, xPxWest + size], [yPxWest - size, xPxWest + 2 * size],
  [yPxWest, xPxWest + 3 * size], [yPxWest + size, xPxWest + 2 * size], [yPxWest + size, xPxWest + size]]

/** Gives the size of the hex board. Width: all NW+N edges + size, height: all NW edges + size. */
export const specToBackgDim = (size: number, r: number, c: number): [number, number] => [c * 2 * 2 * size + size, r * size + size]

/** create an initial game state with r by c board and n players. Flag for assigning rand cols to players. */
export const playersToGameState = (r: number, c: number, n: number, randomize: boolean): State =>
  ({ stage: "placing", board: oneFishSpecificHoles(0, [], r, c), players: initPlayers(n, randomize) })

/** create n players with random colors. ASSUMPTION: n should be in [2, 4]. Flag for assigning rand cols to players */
export const initPlayers = (n: number, randomize: boolean): Player[] =>
  map(c => ({ score: 0, status: "online", color: c, places: [] }), genColors(n, randomize))

/** (Optionally shuffled) array of n colors. ASSUMPTION: n should be in [2, 4].*/
export const genColors = (n: number, randomize: boolean) => take(n, randomize ? shuffle(COLORS) : COLORS)

/** Put holes in holePosns and 1 fishes otherwise. */
export const oneFishSpecificHoles = (minOneFishes: number, hPosns: Posn[], r: number, c: number): Board =>
  nFishSpecificHoles({ fishes: 1, min: minOneFishes }, hPosns, r, c)

/** Put holes in their positions otherwise N fishes */
export const nFishSpecificHoles = (minNFish: { fishes: number, min: number }, holePosns: Board, rows: number, cols: number): Board =>
  boardMap(sameFishBoard(0, rows, cols), (_r, rid, _c, cid) => any(equals([cid, rid]), holePosns) ? -1 : minNFish.fishes)

/** At least min fishes and the rest of the positions are randomized (0 to 5) */
export const nonHoleTiles = (minNFish: { fishes: number, min: number }, total: number): number[] =>
  shuffle(concat(times(_ => random(0, 5), total - minNFish.min), repeat(minNFish.fishes, minNFish.min)));

/** f # of fish on every tile, no holes, r by c board. */
export const sameFishBoard = (f: number, r: number, c: number): Board => repeat(repeat(f, c), r);

export const removeTileAt = (b: Board, row: number, col: number): Board =>
  boardMap(sameFishBoard(0, b.length, b[0].length), (_r, rid, _c, cid) => equals([cid, rid], [row, col]) ? -1 : b[rid][cid])

export const boardMap = <T, D>(b: T[][], f: (r: T[], rid: number, c: T, cid: number) => D): D[][] =>
  addIndex(map)((r: T[], rid) => addIndex(map)((c: T, cid: number) => f(r, rid, c, cid), r), b)

/** ----------------------------------------------------- executables -------------------------------------------------------- */

// See Testing Tasks in:  https://www.ccs.neu.edu/home/matthias/4500-f20/s{4, 5, 6, 8}.html 

export const xboard = (input: { board: InputBoard, position: Posn }): number =>
  validMovePosns(inputBoardToState(input.board), input.position).length

export const xstate = (input: InputState): InputState | false =>
  xStateRes(xStateOnState(inpSt2St(input)))

export const xtree = (input: { state: InputState, from: Posn, to: Posn }): Move | false =>
  getBestMovesAndTieBreak(input.to, possibleNeighMoves(input.from, input.to, inpSt2St(input.state)))

export const xstrategy = ([depth, inputState]: [number, InputState]): false | Move =>
  minimaxAction(depth)(inpSt2St(inputState))

export const xref = (gameDescription: GameDescription): string[] =>
  map(player => player.name, getWinners(playGame(descriptionToState(gameDescription, false)))).sort()

/** If maybeState is false, return it, otherwise convert it to input state and return */
export const xStateRes = (maybeState: State | false): InputState | false => maybeState && st2InpSt(maybeState)

/** xState but where input is the state object not the input state object */
export const xStateOnState = (state: State): State | false =>
  not(isEmpty(state.players) || isEmpty(currentPlayer(state).places))
  && maybePlaced(head(getPlaces(currentPlayer(state))), fishTreeFromState(state))

/** Finds the first state generated from placing near neighboors, otherwise false */
export const maybePlaced = (fromPosn: Posn, tree: Tree): State | false =>
  <State | false>defaultTo(false)(find((s: State | false) => s !== false,
    map(p => maybeStateFromAction(tree, [fromPosn, p]), neighbors(fromPosn))))

/** Resultant state from taking the `action` on the `tree` or `false` */
export const maybeStateFromAction = (tree: Tree, action: Posn | Move): State | false =>
  isPosn(action)
    ? maybeInSubstates(tree, placeAvatar(action, stateFromTree(tree)))
    : maybeInSubstates(tree, moveAvatar(head(action), last(action), stateFromTree(tree)))

/** If any of the substates of `tree` equals `state` return `state` else `false` */
export const maybeInSubstates = (tree: Tree, state: State): State | false =>
  any(equals(state), substates(tree)) ? state : false

/** Predicate for a `Posn` */
export const isPosn = (moveOrPosition: Posn | Move): moveOrPosition is Posn =>
  isArray(moveOrPosition) && moveOrPosition.length === 2 && isNumber(moveOrPosition[0]) && isNumber(moveOrPosition[1])

/** Simulates a game using the given state */
export const playGame = (state: State): State =>
  isGameOver(state) ? state : gamePlayMakeMove(state, minimaxAction(currentPlayer(state).depth)(state))

/** Simulates the game using the maybe move to decide how to proceed */
export const gamePlayMakeMove = (state: State, maybeMove: false | Move) =>
  maybeMove === false ? playGame(skipMove(state)) : playGame(moveAvatar(from(maybeMove), to(maybeMove), state))

/** get the moves to the best neighbor and tiebreak them, if they're empty, return false */
export const getBestMovesAndTieBreak = (to: Posn, possibleMoves: Move[]) =>
  not(isEmpty(possibleMoves)) && tieBreaker(getBestNeighborMoves(possibleMoves, neighbors(to)))

/** select moves for each neighbor (ordered clockwise starting North), find the first non-empty moves arr, otherwise return [] */
export const getBestNeighborMoves = (moves: Move[], neighbors: Posn[]): Move[] =>
  defaultTo([])(find(l => not(isEmpty(l)), map(dirPosn => inSelect(moves, to, [dirPosn]), neighbors)))

/** All xs such that for each x, xToY(x) exists in ys */
export const inSelect = <Y, X>(xs: X[], map: (x: X) => Y, ys: Y[]): X[] => filter(x => includes(map(x), ys), xs)

/** All possible moves to the neighbors of "toP" */
export const possibleNeighMoves = (fromP: Posn, toP: Posn, state: State): Move[] =>
  inSelect(subseqNoSkipMoves(moveAvatar(fromP, toP, state)), to, neighbors(toP));

/** Get moves for all substates that are not derived from skip moves */
export const subseqNoSkipMoves = (state: State): Move[] =>
  map(substate => fromStateToStateMove(state, substate), subseqNoSkipStates(state))

/** Filter all possible substates that are generated by a "skip" move */
export const subseqNoSkipStates = (state: State): State[] =>
  filter(toState => notSkipMove(state, toState), substates(fishTreeFromState(state)))

/** Is a move from "fromState" to "toState" a skip move? */
export const notSkipMove = (fromState: State, toState: State): boolean =>
  !equals(getPlaces(currentPlayer(fromState)), getPlaces(lastPlayer(toState)))

/** is the move not a skip move? */
export const noSkipMove = (move: Move | false): false | Move => move && !equals(from(move), to(move)) && move

/** -------------------------------------------------------- player ---------------------------------------------------------- */

/** Place the first player's penguin on the given position in state */
export const placeAvatar = (p: Posn, s: State): State =>
  assoc('players', append(assoc('places',
    append(p, head(getPlayers(s)).places), head(getPlayers(s))), tail(getPlayers(s))), s)

/** Move the penguin from "from" to "to" in "state" */
export const moveAvatar = (from: Posn, to: Posn, s: State): State => {
  let res = {
    stage: s.stage,
    board: mkHole(from, s.board),
    players: moveAvatarInPlayers(from, to, getPlayers(s), s.board[head(from)][last(from)])
  }
  console.log("has moves left", hasMovesLeft(res), res.players)
  if (!hasMovesLeft(res)) {
    res = skipMove(res)
  }
  return res;
}

export const mkHole = (p: Posn, b: Board): Board => boardMap(b, (_r, rid, c, cid) => equals([rid, cid], p) ? -1 : c)

/** Moves the avatar within the players field of a state from "from" to "to" */
export const moveAvatarInPlayers = (from: Posn, to: Posn, players: Player[], fishesToCollect: number): Player[] =>
  append(assoc('score', head(players).score + fishesToCollect,
    assoc('places', replacePosn(head(players).places, from, to), head(players))), tail(players))


/** Replaces one position with another in an array of positions.  */
export const replacePosn = (posns: Posn[], from: Posn, to: Posn): Posn[] => update(findIndex(equals(from), posns), to, posns)

/** Gets the move from fromState to toState, the skip move moves the first penguin to itself. */
export const fromStateToStateMove = (fromState: State, toState: State): Move =>
  fromPlacesToPlacesMove(getPlaces(currentPlayer(fromState)), getPlaces(lastPlayer(toState)))

/** Extracts the move from "from" places and "to" places. For skips, the first penguin moves to itself. */
const fromPlacesToPlacesMove = (froms: Posn[], tos: Posn[]): Move =>
  equals(froms, tos) ? [head(froms), head(froms)] : [head(without(tos, froms)), head(without(froms, tos))]

/** Can any player move their avatar? */
export const canAnyPlayerMoveAvatar = (state: State): boolean =>
  any(place => movesLeft(state, place), unnest(state.players.map(p => p.places)))

export const isGameOver = (state: State): boolean => !canAnyPlayerMoveAvatar(state);

/** Are there valid move position from p in s? */
export const movesLeft = (s: State, p: Posn): boolean => validMovePosns(s, p).length > 0

/** Does current player have moves left */
export const hasMovesLeft = (s: State): boolean => {
  let res = false;
  getPlaces(currentPlayer(s)).map((posn) => {
    res = res || movesLeft(s, posn)
  })
  return res;
}

/** --------------------------------------------------------- state ---------------------------------------------------------- */

// See Interp. here https://www.ccs.neu.edu/home/matthias/4500-f20/4.html except renamed with "Input" in name.
export type InputState = { board: InputBoard, players: InputPlayer[] }
export type InputPlayer = { color: string, score: number, places: Posn[] }
export type InputBoard = number[][]
export type GameDescription = { row: number, column: number, players: [string, number][], fish: number }
export type Posn = [number, number]
export type Move = [Posn, Posn]
export type Action = Move | false;
export type Color = "red" | "white" | "brown" | "black";

// State: Same as InputState, BUT contains our version of Player, and Board, and has an extra stage attribute 
// Board: Same as InputBoard, EXCEPT: -1 represents holes and numbers in [0, 5] are fishes
// Player: Same as InputPlayer, EXCEPT extra "status" attribute and optional name and depth attributes

export type State = { stage: "placing" | "playing", board: Board, players: Player[] }
export type Board = number[][]
export type Player = { color: string, score: number, places: Posn[], status: "online" | "kicked", name?: string, depth?: number }

// ::: Lenses :::
export const to = (move: Move) => move[1]
export const from = (move: Move) => move[0];
export const currentPlayer = (s: State): Player => head(getPlayers(s))
export const lastPlayer = (s: State): Player => last(getPlayers(s))
export const getPlayers = (s: State): Player[] => view(lensProp('players'), s)
export const getPlaces = (p: Player): Posn[] => view(lensProp('places'), p)

export const fromRow = (move: Move): number => move[0][0]
export const fromCol = (move: Move): number => move[0][1];
export const toRow = (move: Move): number => move[1][0];
export const toCol = (move: Move): number => move[1][1];

// get winners from state
export const getWinners = (state: State): Player[] =>
  maxBys(state.players, player => player.score + sum(player.places.map(place => state.board[place[0]][place[1]])))

/** ------------------------------------------------------ reachability ------------------------------------------------------ */

export const straightListPosns = (s: State, p: Posn) => posnReachable(s, p, isPosnOutOfBounds)
export const validMovePosns = (s: State, p: Posn) => posnReachable(s, p, isUnreachablePosn)
export const isUnreachablePosn = (s: State, p: Posn): boolean => isPosnOutOfBounds(s, p) || isHoleAtPos(s, p) || isPenguinAtPosn(s, p)
export const isPenguinAtPosn = (s: State, p: Posn): boolean => any(equals(p), getPenguinPosns(s))
export const isPosnOutOfBounds = (s: State, p: Posn): boolean => !isPositionInBoard(s, p)

export const isPositionInBoard = (s: State, [row, col]: Posn): boolean =>
  inRange(row, s.board.length) && inRange(col, s.board[0].length)

/** Computes positions reachable using a custom function that decides if a pos is unreachable. */
export const posnReachable = (s: State, p: Posn, unreachable: (s: State, p: Posn) => boolean): Posn[] =>
  unnest([inDir(s, p, north, unreachable), inDir(s, p, northEast, unreachable), inDir(s, p, southEast, unreachable),
  inDir(s, p, south, unreachable), inDir(s, p, southWest, unreachable), inDir(s, p, northWest, unreachable)])

/** Moves from p in s according to move until unreachable is true. Returns all valid posns accumulated. */
export const inDir = (s: State, p: Posn, move: (p: Posn) => Posn, unreachable: (s: State, p: Posn) => boolean): Posn[] =>
  reachablePathInDirAcc(s, move, unreachable, [], move(p));

/** Same as reachablePathInDir but accumulates the path in path */
const reachablePathInDirAcc =
  (s: State, move: (p: Posn) => Posn, unreachable: (s: State, p: Posn) => boolean, path: Posn[], next: Posn) =>
    !unreachable(s, next) ? reachablePathInDirAcc(s, move, unreachable, append(next, path), move(next)) : path;

/** Posn in one step in specified direction in an infinite hex board*/
export const north = ([r, c]: Posn): Posn => [r - 2, c];
export const northEast = ([r, c]: Posn): Posn => (r % 2 === 0) ? [r - 1, c] : [r - 1, c + 1]
export const southEast = ([r, c]: Posn): Posn => (r % 2 === 0) ? [r + 1, c] : [r + 1, c + 1]
export const south = ([r, c]: Posn): Posn => [r + 2, c];
export const southWest = ([r, c]: Posn): Posn => (r % 2 === 0) ? [r + 1, c - 1] : [r + 1, c]
export const northWest = ([r, c]: Posn): Posn => (r % 2 === 0) ? [r - 1, c - 1] : [r - 1, c]

/** Get neighbors of p (in all 6 directions) in an infinite hex board. */
export const neighbors = (p: Posn): [Posn, Posn, Posn, Posn, Posn, Posn] =>
  [north(p), northEast(p), southEast(p), south(p), southWest(p), northWest(p)];

export const isHoleAtPos = (s: State, p: Posn): boolean => s.board[p[0]][p[1]] === -1
export const getPenguinPosns = (s: State): Posn[] => flatten(map(getPlaces, getPlayers(s)))

/** ------------------------------------------------------ strategy ---------------------------------------------------------- */

/** applies minimax (assuming opponents minimize current player's score) to get move, otherwise false */
export const minimaxAction = (depth: number) => (state: State): Move | false =>
  noSkipMove(minimaxActionTree(state, subtrees(fishTreeFromState(state)), depth))

/** Applies minimax to get a move on given state (and its subtrees), false if no move can be made */
export const minimaxActionTree = (state: State, subtrees: Tree[], depth: number): Move | false =>
  !isEmpty(subtrees) && tieBreaker(maxBys(movesAndScores(state, subtrees, depth), getScore).map(getMove))

export const getScore = (moveScore: [Move, number]) => moveScore[1]
export const getMove = (moveScore: [Move, number]) => moveScore[0]

/** gets the "max" elem in arr where "max" is defined by "toNum" */
export const maxBys = <T>(arr: T[], toNum: (e: T) => number): T[] =>
  filter(el => (toNum(el) === reduce(max, -Infinity, map(toNum, arr))), arr)

/** Gets all possible moves to the subtrees from s and their corresponding minimax score */
export const movesAndScores = (s: State, subtrees: Tree[], depth: number): [Move, number][] =>
  map(t => [fromStateToStateMove(s, stateFromTree(t)), minimaxScore(t, currentPlayer(s).color, depth)], subtrees)

/** Applies minimax score on the current state of the tree for the given depth */
export const minimaxScore = (tree: Tree, mainPlayerColor: string, depth: number): number =>
  minimaxScoreState(stateFromTree(tree), tree, mainPlayerColor, depth)

/** recursively finds minimax score till the depth is 0 or the game is over */
export const minimaxScoreState = (s: State, tree: Tree, main: string, depth: number): number =>
  (depth === 1 || isGameOver(s)) ? plrScore(s, main)
    : minimaxScoreStateNotOver(tree, main, depth, currentPlayer(s).color === main)

/** gets the score for the given color */
export const plrScore = (s: State, col: string): number => filter(plr => plr.color === col, s.players)[0].score

/** Gets the minimal or maximal score depending on whether the player is the main player or not */
export const minimaxScoreStateNotOver = (tree: Tree, plr: string, depth: number, isplr: boolean): number =>
  isplr ? apply(Math.max, minmaxscore(tree, plr, depth, isplr)) : apply(Math.min, minmaxscore(tree, plr, depth, isplr))

/** gets the score for this level, from the score of the subtrees */
export const minmaxscore = (tree: Tree, plr: string, depth: number, isplr: boolean): number[] =>
  applyDirectlyReachable(tree, s => minimaxScore(fishTreeFromState(s), plr, isplr ? depth - 1 : depth))

/** Uses the zig-zag strategy to place penguins. Assuming the board is big enough. */
export const zigZagPlacement = (state: State, upto?: number): State =>
  zigZagAcc(toPlace(state.players.length), 0, state, state.board[0].length, upto);

/** places "toPlace" more penguins or upto "upto" (if provided) */
export const zigZagAcc = (toPlace: number, placed: number, state: State, colLen: number, upto?: number): State =>
  (placed === toPlace || upto === placed)
    ? assoc('stage', 'playing', state)
    : zigZagAcc(toPlace, placed + 1, placeAvatar([Math.floor(placed / colLen), placed % colLen], state), colLen, upto)

/** position for the current player to place in a zig zag fashion */
export const placeZigZag = (state: State): Posn =>
  [Math.floor(getPenguinPosns(state).length / state.board[0].length), getPenguinPosns(state).length % state.board[0].length]

/** tie-breaks moves in order of minimum fromRoow, fromCol, toRow, toCol */
export const tieBreaker = (moves: Move[]): Move => dispatchFromRow(minBys(moves, fromRow))

/** tries to tie-break via "from row", or dispatches to "from col" */
export const dispatchFromRow = (minFromRow: Move[]): Move =>
  minFromRow.length === 1 ? head(minFromRow) : dispatchFromCol(minBys(minFromRow, fromCol))

/** tries to tie-break via "from col", or dispatches to "to row" */
export const dispatchFromCol = (minFromCol: Move[]) =>
  minFromCol.length === 1 ? head(minFromCol) : dispatchToRow(minBys(minFromCol, toRow))

/** tries to tie-break via "to row" or dispatches to "to col" */
export const dispatchToRow = (minToRow: Move[]) =>
  minToRow.length === 1 ? head(minToRow) : head(minBys(minToRow, toCol))

/** gets the "min" elem in arr where "min" is defined by "toNum" */
export const minBys = <T>(arr: T[], toNum: (e: T) => number): T[] =>
  filter(el => (toNum(el) === reduce(min, +Infinity, map(toNum, arr))), arr)

/** --------------------------------------------------- input conversion ----------------------------------------------------- */

/** Converts the zeroes to holes (-1) */
export const zeroesToHoles = (inpB: InputBoard): Board => map(row => map(col => 0 === col ? -1 : col, row), inpB)

/** All rows with less elements than the longest row are filled with holes on the rhs. */
export const addHolesInputBoard = (inpB: InputBoard): InputBoard =>
  map((r: number[]) => r.length < maxRowLen(inpB) ? concat(r, repeat(0, maxRowLen(inpB) - r.length)) : r, inpB)

/** The # of elements the longest row has */
export const maxRowLen = (inputBoard: number[][]): number => apply(Math.max, map(length, inputBoard))

/** Convert an input board to board by adding missing holes and converting zeroes to holes */
export const inputBoardToBoard = (board: InputBoard): Board => zeroesToHoles(addHolesInputBoard(board))

/** convert input board to state by adding stage field, an empty players field, and converting the board. */
export const inputBoardToState = (board: InputBoard): State => ({ stage: "placing", board: inputBoardToBoard(board), players: [] })

/** Convert an input state to state. */
export const inpSt2St = (inputState: InputState): State =>
  ({ stage: "playing", board: inputBoardToBoard(inputState.board), players: inputPlayersToPlayers(inputState.players) })

/** input players are converted to players by adding a status key */
export const inputPlayersToPlayers = (plrs: InputPlayer[]): Player[] => <Player[]>map(assoc("status", "online"), plrs)

/** board are converted to input board by converting -1 holes to zeroes */
export const boardToInputBoard = (board: Board): InputBoard => map(row => map(col => col === -1 ? 0 : col, row), board)

/**  State is converted into input states by removing status from players and converting the board. */
export const st2InpSt = (s: State): InputState =>
  ({ board: boardToInputBoard(s.board), players: <InputPlayer[]>map(dissoc('status'), s.players) })

/** Creates initial players from an array of colors */
export const colsToPlayers = (cs: string[], ns: string[], ds: number[]): Player[] =>
  map(([color, name, depth]) => ({ color: color, score: 0, places: [], status: "online", name: name, depth: depth }), zip(cs, ns, ds))

/** Converts a game description to its corresponding state (in "playing" after zigzag) and player-info pair */
export const descriptionToState = (gd: GameDescription, shufle: boolean): State =>
  gdInfoToState(gdToBoard(gd), map(pair => pair[0], gd.players), map(pair => pair[1], gd.players), genColors(gd.players.length, shufle))

/** Runs a zig-zag placement on board using colors, and creates a player info from names, colors, and depths. */
export const gdInfoToState = (board: Board, names: string[], depths: number[], colors: string[]): State =>
  zigZagPlacement({ stage: "playing", board: board, players: colsToPlayers(colors, names, depths) })

/** Generate a board with the given fish, row, and cols in game description. The board has no holes. */
export const gdToBoard = (gd: GameDescription): Board =>
  nFishSpecificHoles({ fishes: gd.fish, min: gd.row * gd.column }, [], gd.row, gd.column)

/** ------------------------------------------------------ manager ----------------------------------------------------------- */

/** generates names for n clients names are "take" n from ["a", "b", "c", "d", ...]. Ascii 97 is "a" */
export const names = (n: number) => take(n, map(n => String.fromCharCode(97 + n), range(0, n)))

/** makes a game description from the names */
export const gameDesc = (names: string[]): GameDescription => ({ row: 5, column: 5, players: map(n => [n, 2], names), fish: 2 })

/** chunks names into games for a round. ASSUMPTION: names.length is nat and >= 2 */
export const chunk = (names: string[]): string[][] =>
  names.length === 3 || names.length === 2 ? [names] : names.length % 4 === 1
    ? concat(splitEvery(4, dropLast(5, names)), splitEvery(3, takeLast(5, names))) : splitEvery(4, names)

/** run one tournament round */
export const runRound = (players: string[]): string[] =>
  reduce(<(l: string[], r: string[]) => string[]>concat, [], map(xref, map(gameDesc, chunk(players))))

/** run one round, and dispatch to the second round */
export const runTournament = (players: string[]): string[] =>
  players.length < 2 ? players : (players.length >= 2 && players.length <= 4)
    ? xref(gameDesc(players)) : dispatchFirstRound(runRound(players))

/** check if the game should be over after the first round, if not dispatch to the second round */
export const dispatchFirstRound = (players: string[]): string[] =>
  players.length < 2 ? players : (players.length >= 2 && players.length <= 4)
    ? xref(gameDesc(players)) : dispatchSecondRound(players, runRound(players))

/** run the second round of, and recur on running the tournament if result is not the same as the first */
export const dispatchSecondRound = (firstRunRes: string[], secondRunRes: string[]): string[] =>
  equals(secondRunRes, firstRunRes) ? secondRunRes : runTournament(secondRunRes)
