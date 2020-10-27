import { assert } from 'chai';
import { dimToBinBoard } from './dim-to-bin-board';
import { boardToHexTiles, BoardPosn, CanvasPosn, HexTile } from './board-to-hex-tiles';



//               b                    c
//             [0, 10]              [20, 0]                                   
//                 XXXXXxXXXXXXXXXXXXX                                        
//                XX                 XX                                       
//               XX                    XX                                     
//             XX   { row: 0, col: 0 }   XX                                   
//           XXX                          XX    d              g              
//    a     XX                             XX [30, 10]       [40, 10]         
// [10, 0] XX                               XXXXXXXXXXXXXXXXXX                
//          XX                            XX                 XX               
//            XX                        XX                     XX             
//              XX                     XX                        XX      h    
//                XXX                 X                            XX [50, 20]
//                  XXXXXXXXXXXXXXXXXXX      { row: 0, col: 1 }  XXX          
//         [10, 20]           [20, 20] XX                       XX            
//            f                   e     XX                    XX              
//                                        XX                 XX               
//                                          XXXXXXXXXXXXXXXXXX   i            
//                                        [30, 30]           [40, 30]         
//                                            j                               



const h1: BoardPosn = { "row": 0, "col": 0 }
const h2: BoardPosn = { "row": 0, "col": 1 }

const a: CanvasPosn = { "x": 0, "y": 10 }
const b: CanvasPosn = { "x": 10, "y": 0 }
const c: CanvasPosn = { "x": 20, "y": 0 }
const d: CanvasPosn = { "x": 30, "y": 10 }
const e: CanvasPosn = { "x": 20, "y": 20 }
const f: CanvasPosn = { "x": 10, "y": 20 }
const g: CanvasPosn = { "x": 40, "y": 10 }
const h: CanvasPosn = { "x": 50, "y": 20 }
const i: CanvasPosn = { "x": 40, "y": 30 }
const j: CanvasPosn = { "x": 30, "y": 30 }

const hextile1: HexTile = { "posn": h1, "corners": [a, b, c, d, e, f] }
const hextile2: HexTile = { "posn": h2, "corners": [e, d, g, h, i, j] }

// ordering of corners:

//                                             XXXXXXXX             
//              XXXX                                  X             
//                 XX                             XXXXX             
//                XX                                  X             
//               XX                            XXXXXXXX             
//              XXXXXX     XXXXXXXXXXXXXXXXXXXXX                    
//                       XX                     XX                  
//                      XX                       XX                 
//                     X                          XX                
//                   XX                            XX      X        
//       XX        XX                               XX    X    X    
//        X       XX                                 XX  XXXXXXXX   
//        X        XX                               XX        X     
//        X          XX                           XX          X     
//     XXXXXXX         XX                       XX                  
//                       XX                   XX                    
//                         XXXXXXXXXXXXXXXXXXXX                     
//                                                                  
//                    XXXXXX                    XXXXXX              
//                   X                         X                    
//                   X                         XXXXXX               
//                   X XXXXX                        X               
//                   XX    X                        X               
//                    XXXXXX                   xXXXXX               



describe("test hex tile generation", () => {
  it("generate hex tiles for 2 rows and 1 col of size 10", () => {
    assert.deepEqual(boardToHexTiles(10, dimToBinBoard(2, 1), (cell) => cell === 1), [hextile1, hextile2])
  })
})



