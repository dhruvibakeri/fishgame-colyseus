/**
 * Given a board position, and a cBoard, produces all
 * the reachable points if a penguin is on the position.
 */
import { BoardPosn } from './board-to-hex-tiles';
import { CBoard } from "./cstate";
export declare function getReachable(board: CBoard, boardPosn: BoardPosn): BoardPosn[];
/**
 * Represents a [Column, Row] pair
 */
declare type ColRowPair = [number, number];
export declare function north(posn: ColRowPair): ColRowPair;
export declare function south(posn: ColRowPair): ColRowPair;
export declare function northeast(posn: ColRowPair): ColRowPair;
export declare function northwest(posn: ColRowPair): ColRowPair;
export declare function southwest(posn: ColRowPair): ColRowPair;
export declare function southeast(posn: ColRowPair): ColRowPair;
export {};
