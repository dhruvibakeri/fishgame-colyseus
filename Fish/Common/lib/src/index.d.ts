import './style.css';
import { CState } from './cstate';
/**
* Clears out the existing canvas and renders a new one with the
* given size, rows, and cols. Useful for testing.
*/
export declare function rerender(size: number, row: number, col: number, state: CState): void;
