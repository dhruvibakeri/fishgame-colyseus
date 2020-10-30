"use strict";
// * HEY! THAT'S MY FISH
// =====================
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateList = exports.donestate = exports.doneboardscore = exports.doneboard = exports.move33blackstate = exports.move33blackscore = exports.move33black = exports.move33 = exports.move32redskipstate = exports.move32redskipscore = exports.move32redskip = exports.move32 = exports.move31whiteskipstate = exports.move31whiteskipscore = exports.move31whiteskip = exports.move31 = exports.move30brownskipstate = exports.move30brownskipscore = exports.move30brownskip = exports.move30 = exports.move29blackskipstate = exports.move29blackskipscore = exports.move29blackskip = exports.move29 = exports.move28redskipstate = exports.move28redskipscore = exports.move28redskip = exports.move28 = exports.move27whiteskipstate = exports.move27whiteskipscore = exports.move27whiteskip = exports.move27 = exports.move26brownstate = exports.move26brownscore = exports.move26brown = exports.move26 = exports.move25blackstate = exports.move25blackscore = exports.move25black = exports.move25 = exports.move24redskipstate = exports.move24redskipscore = exports.move24redskip = exports.move24 = exports.move23whiteskipstate = exports.move23whiteskipscore = exports.move23whiteskip = exports.move23 = exports.move22brownstate = exports.move22brownscore = exports.move22brown = exports.move22 = exports.move21blackstate = exports.move21blackscore = exports.move21black = exports.move21 = exports.move20redskipstate = exports.move20redskipscore = exports.move20redskip = exports.move20 = exports.move19whiteskipstate = exports.move19whiteskipscore = exports.move19whiteskip = exports.move19 = exports.move18brownstate = exports.move18brownscore = exports.move18brown = exports.move18 = exports.move17blackstate = exports.move17blackscore = exports.move17black = exports.move17 = exports.move16redskipstate = exports.move16redskipscore = exports.move16redskip = exports.move16 = exports.move15whiteskipstate = exports.move15whiteskipscore = exports.move15whiteskip = exports.move15 = exports.move14brownstate = exports.move14brownscore = exports.move14brown = exports.move14 = exports.move13blackstate = exports.move13blackscore = exports.move13black = exports.move13 = exports.move12redskipstate = exports.move12redskipscore = exports.move12redskip = exports.move12 = exports.move11whitestate = exports.move11whitescore = exports.move11white = exports.move11 = exports.move10brownstate = exports.move10brownscore = exports.move10brown = exports.move10 = exports.move9blackstate = exports.move9blackscore = exports.move9black = exports.move9 = exports.move8redstate = exports.move8redscore = exports.move8red = exports.move8 = exports.move7whitestate = exports.move7whitescore = exports.move7white = exports.move7 = exports.move6brownstate = exports.move6brownscore = exports.move6brown = exports.move6 = exports.move5blackstate = exports.move5blackscore = exports.move5black = exports.move5 = exports.move4redstate = exports.move4redscore = exports.move4red = exports.move4 = exports.move3whitestate = exports.move3whitescore = exports.move3white = exports.move3 = exports.move2brownstate = exports.move2brownscore = exports.move2brown = exports.move2 = exports.move1blackstate = exports.move1blackscore = exports.move1black = exports.move1 = exports.playinginitstate = exports.playinginitscore = exports.playinginit = exports.placement8redstate = exports.placement8redscore = exports.placement8red = exports.place8 = exports.placement7whitestate = exports.placement7whitescore = exports.placement7white = exports.place7 = exports.placement6brownstate = exports.placement6brownscore = exports.placement6brown = exports.place6 = exports.placement5blackstate = exports.placement5blackscore = exports.placement5black = exports.place5 = exports.placement4redstate = exports.placement4redscore = exports.placement4red = exports.place4 = exports.placement3whitestate = exports.placement3whitescore = exports.placement3white = exports.place3 = exports.placement2brownstate = exports.placement2brownscore = exports.placement2brown = exports.place2 = exports.placement1blackstate = exports.placement1blackscore = exports.placement1black = exports.place1 = exports.initplacingstate = exports.initplacingscore = exports.initplacingboard = void 0;
// -- initialize state in "joining" stage
// 
// ~~> joins room. gets "red"
// ~~> joins room. gets "white"
// ~~> joins room. gets "brown"
// ~~> joins room. gets "black"
// ** all the colors are taken || the time is up
// -- the ages of the players are the following: ["black", "brown", "white", "red"]
//    interpretation of player age: time spent since joined. ^^ ascending age. 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// -- transition to "placing" stage (each player gets 6 - 4 = 2 penguins)
// score board: [["black", 0], ["brown", 0], ["white", 0], ["red", 0]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   3    \_____/   1    \______/    4    \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \      /   1   \      /   2    \       /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   |   3   |   2   |   1   |   5   |   4   |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |   2   |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | color | score |
// |-------+-------|
// | black |   0   |
// | brown |   0   |
// | white |   0   |
// | red   |   0   |
exports.initplacingboard = [
    [1, 3, 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.initplacingscore = [["black", 0], ["brown", 0], ["white", 0], ["red", 0]];
exports.initplacingstate = ["placing", exports.initplacingboard, exports.initplacingscore];
// -- "black" places on [1, 0]; score: [["black", 3], ["brown", 0], ["white", 0], ["red", 0]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/        \_____/   1    \______/    4    \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /   2    \       /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   |   4   |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |   2   |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | color | score |
// |-------+-------|
// | black |   3   |
// | brown |   0   |
// | white |   0   |
// | red   |   0   |
exports.place1 = [0, 1];
exports.placement1black = [
    [1, "black", 2, 1, 5, 4, 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placement1blackscore = [["brown", 0], ["white", 0], ["red", 0], ["black", 3]];
exports.placement1blackstate = ["placing", exports.placement1black, exports.placement1blackscore];
// -- "brown" places on [5, 0]; score: [["black", 3], ["brown", 4], ["white", 0], ["red", 0]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /   2    \ brown /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |   2   |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | color | score |
// |-------+-------|
// | black |   3   |
// | brown |   4   |
// | white |   0   |
// | red   |   0   |
exports.place2 = [0, 5];
exports.placement2brown = [
    [1, "black", 2, 1, 5, "brown", 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, 2, 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placement2brownscore = [["white", 0], ["red", 0], ["black", 3], ["brown", 4]];
exports.placement2brownstate = ["placing", exports.placement2brown, exports.placement2brownscore];
// -- "white" places on [4, 1]; score: [["black", 3], ["brown", 4], ["white", 2], ["red", 0]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/   4    \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /   3   \      /   4    \       /   3   \      /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   |   3   |   4   |   1   |   4   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | color | score |
// |-------+-------|
// | black |   3   |
// | brown |   4   |
// | white |   2   |
// | red   |   0   |
exports.place3 = [1, 4];
exports.placement3white = [
    [1, "black", 2, 1, 5, "brown", 2, 1, 3, 4, 1, 4],
    [5, 2, 1, 2, "white", 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placement3whitescore = [["red", 0], ["black", 3], ["brown", 4], ["white", 2]];
exports.placement3whitestate = ["placing", exports.placement3white, exports.placement3whitescore];
// -- "red" places on [11, 0]; score: [["black", 3], ["brown", 4], ["white", 2], ["red", 4]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /   3    \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /   3   \      /   4    \       /   3   \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   |   3   |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   3   |
// | brown |   4   |
// | white |   2   |
// | red   |   4   |
exports.place4 = [0, 11];
exports.placement4red = [
    [1, "black", 2, 1, 5, "brown", 2, 1, 3, 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placement4redscore = [["black", 3], ["brown", 4], ["white", 2], ["red", 4]];
exports.placement4redstate = ["placing", exports.placement4red, exports.placement4redscore];
// 
// -- "black" places on [8, 0]; score: [["black", 6], ["brown", 4], ["white", 2], ["red", 4]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /   3   \      /   4    \       /   3   \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /   4    \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \        /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx|   4   |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   6   |
// | brown |   4   |
// | white |   2   |
// | red   |   4   |
exports.place5 = [0, 8];
exports.placement5black = [
    [1, "black", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", 4, "unusable", 4, "unusable"]
];
exports.placement5blackscore = [["brown", 4], ["white", 2], ["red", 4], ["black", 6]];
exports.placement5blackstate = ["placing", exports.placement5black, exports.placement5blackscore];
// 
// -- "brown" places on [8, 2]; score: [["black", 6], ["brown", 8], ["white", 2], ["red", 4]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /   3   \      /   4    \       /   3   \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \       /      \        /       \       /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /        \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \  brown /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |   3   |   5   |   4   |   1   |   3   |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx| brown |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   6   |
// | brown |   8   |
// | white |   2   |
// | red   |   4   |
// 
exports.place6 = [2, 8];
exports.placement6brown = [
    [1, "black", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, 3, 5, 4, 1, 3, 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", "brown", "unusable", 4, "unusable"]
];
exports.placement6brownscore = [["white", 2], ["red", 4], ["black", 6], ["brown", 8]];
exports.placement6brownstate = ["placing", exports.placement6brown, exports.placement6brownscore];
// -- "white" places on [10, 1]; score: [["black", 6], ["brown", 8], ["white", 5], ["red", 4]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /   3   \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \       /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /        \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \  brown /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |   3   |   5   |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx| brown |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   6   |
// | brown |   8   |
// | white |   5   |
// | red   |   4   |
// 
exports.place7 = [1, 10];
exports.placement7white = [
    [1, "black", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, 3, 5, 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", "brown", "unusable", 4, "unusable"]
];
exports.placement7whitescore = [["red", 4], ["black", 6], ["brown", 8], ["white", 5]];
exports.placement7whitestate = ["placing", exports.placement7white, exports.placement7whitescore];
//
// -- "red" places on [6, 1]; score: [["black", 6], ["brown", 8], ["white", 5], ["red", 7]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /       \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \  red  /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /        \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \  brown /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |  red  |   5   |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx| brown |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   6   |
// | brown |   8   |
// | white |   5   |
// | red   |   7   |
exports.place8 = [1, 6];
exports.placement8red = [
    [1, "black", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, "red", 5, 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", "brown", "unusable", 4, "unusable"]
];
exports.placement8redscore = [["black", 6], ["brown", 8], ["white", 5], ["red", 7]];
exports.placement8redstate = ["placing", exports.placement8red, exports.placement8redscore];
// Summary of placements
// ---------------------
// 1. "black" ->  [1, 0]  ==> [["black", 3], ["brown", 0], ["white", 0], ["red", 0]]  ==> placement1black
// 2. "brown" ->  [5, 0]  ==> [["black", 3], ["brown", 4], ["white", 0], ["red", 0]]  ==> placement2brown
// 3. "white" ->  [4, 1]  ==> [["black", 3], ["brown", 4], ["white", 2], ["red", 0]]  ==> placement3white
// 4. "red"   ->  [11, 0] ==> [["black", 3], ["brown", 4], ["white", 2], ["red", 4]]  ==> placement4red
// 5. "black" ->  [8, 0]  ==> [["black", 6], ["brown", 4], ["white", 2], ["red", 4]]  ==> placement5black
// 6. "brown" ->  [8, 2]  ==> [["black", 6], ["brown", 8], ["white", 2], ["red", 4]]  ==> placement6brown
// 7. "white" ->  [10, 1] ==> [["black", 6], ["brown", 8], ["white", 5], ["red", 4]]  ==> placement7white
// 8. "red"   ->  [6, 1]  ==> [["black", 6], ["brown", 8], ["white", 5], ["red", 7]]  ==> placement8red
// -- transition to "playing" stage
// *first "playing" stage state*
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /      \       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/        \_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \ [1, 0] /     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \ black/   1   \      /        \ brown /       \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \  red  /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /   5    \       /   5   \      /        \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \        /       \       /      \  brown /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/             
// 
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   1   | black |   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |  red  |   5   |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|   5   |xxxxxxx|   5   |xxxxxxx| brown |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |   6   |
// | brown |   8   |
// | white |   5   |
// | red   |   7   |
exports.playinginit = [
    [1, "black", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, "red", 5, 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", 5, "unusable", 5, "unusable", "brown", "unusable", 4, "unusable"]
];
exports.playinginitscore = [["black", 6], ["brown", 8], ["white", 5], ["red", 7]];
exports.playinginitstate = ["playing", exports.playinginit, exports.playinginitscore];
// -- "black" : [1, 0] -> [4, 2], black gets 5 points. [["black", 11], ["brown", 8], ["white", 5], ["red", 7]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /......\       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/........\_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /        \ brown /       \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \  red  /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/   5    \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /      \  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \       /   5   \      /        \       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(  [8, 2]  )-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \       /      \  brown /       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |       |       |       |       |       |       |       |
// |   1   |.......|   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |  red  |   5   |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx|   5   |xxxxxxx| brown |xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  11   |
// | brown |   8   |
// | white |   5   |
// | red   |   7   |
exports.move1 = [[0, 1], [2, 4]];
exports.move1black = [
    [1, "hole", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, "red", 5, 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", 5, "unusable", "brown", "unusable", 4, "unusable"]
];
exports.move1blackscore = [["brown", 8], ["white", 5], ["red", 7], ["black", 11]];
exports.move1blackstate = ["playing", exports.move1black, exports.move1blackscore];
// 
// -- "brown" : [8, 2] -> [7, 1], brown gets 5 points. [["black", 11], ["brown", 13], ["white", 5], ["red", 7]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /......\       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/........\_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /      \ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /        \ brown /       \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(  [4, 1]  )-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \ white  /       \  red  /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \       /   5   \ brown/........\       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \       /      \......../       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |       |       |       |       |       |       |       |
// |   1   |.......|   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |       |       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   | white |   3   |  red  | brown |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx|   5   |xxxxxxx|.......|xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  11   |
// | brown |  13   |
// | white |   5   |
// | red   |   7   |
exports.move2 = [[2, 8], [1, 7]];
exports.move2brown = [
    [1, "hole", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "white", 3, "red", "brown", 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", 5, "unusable", "hole", "unusable", 4, "unusable"]
];
exports.move2brownscore = [["white", 5], ["red", 7], ["black", 11], ["brown", 13]];
exports.move2brownstate = ["playing", exports.move2brown, exports.move2brownscore];
// 
// -- "white" : [4, 1] -> [6, 2]. white gets 5 points. [["black", 11], ["brown", 13], ["white", 10], ["red", 7]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /......\       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/........\_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /......\ [5, 0]  /     \ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /........\ brown /       \      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----( [6, 1]  )----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \......../       \  red  /      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/    3    \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \       /       \ brown/........\       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |       |       |       |       |       |       |       |
// |   1   |.......|   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |       |       |       |       |       |       |
// |   5   |   2   |   1   |   2   |.......|   3   |  red  | brown |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  11   |
// | brown |  13   |
// | white |  10   |
// | red   |   7   |
exports.move3 = [[1, 4], [2, 6]];
exports.move3white = [
    [1, "hole", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "hole", 3, "red", "brown", 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", 4, "unusable"]
];
exports.move3whitescore = [["red", 7], ["black", 11], ["brown", 13], ["white", 10]];
exports.move3whitestate = ["playing", exports.move3white, exports.move3whitescore];
// 
// -- "red" : [6, 1] -> [5, 1]. red gets 3 points. [["black", 11], ["brown", 13], ["white", 10], ["red", 10]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /      \         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /        \       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(  [8, 0]  )-----( [10, 0] )-----      
//  \       /......\       /      \        /       \       /      \ black  /       \       /      \     
//   \_____/........\_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /......\ [5, 0]  /.....\ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /........\ brown /.......\      /   4    \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \......../       \......./      \        /       \ white /      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |       |       |       |       |       |       |       |
// |   1   |.......|   2   |   1   |   5   | brown |   2   |   1   | black |   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |       |       |       |       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown |   4   |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  11   |
// | brown |  13   |
// | white |  10   |
// | red   |  10   |
exports.move4 = [[1, 6], [1, 5]];
exports.move4red = [
    [1, "hole", 2, 1, 5, "brown", 2, 1, "black", 4, 1, "red"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", 4, 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", 4, "unusable"]
];
exports.move4redscore = [["black", 11], ["brown", 13], ["white", 10], ["red", 10]];
exports.move4redstate = ["playing", exports.move4red, exports.move4redscore];
//
// -- "black": [8, 0] -> [8, 1]. black gets 4 points. [["black", 15], ["brown", 13], ["white", 10], ["red", 10]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /......\         /     \             
//  /   1   \      /   2   \      /   5    \       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \        /       \       /      \......../       \       /      \     
//   \_____/........\_____/   1    \______/         \_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /......\ [5, 0]  /.....\ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /........\ brown /.......\      /        \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \......../       \......./      \ black  /       \ white /      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |       |       |       |.......|       |       |       |
// |   1   |.......|   2   |   1   |   5   | brown |   2   |   1   |.......|   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |       |       |       |       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown | black |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  15   |
// | brown |  13   |
// | white |  10   |
// | red   |  10   |
exports.move5 = [[0, 8], [1, 8]];
exports.move5black = [
    [1, "hole", 2, 1, 5, "brown", 2, 1, "hole", 4, 1, "red"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", "black", 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", 4, "unusable"]
];
exports.move5blackscore = [["brown", 13], ["white", 10], ["red", 10], ["black", 15]];
exports.move5blackstate = ["playing", exports.move5black, exports.move5blackscore];
// 
// -- "brown": [5, 0] -> [4, 0]. black gets 5 points. [["black", 15], ["brown", 18], ["white", 10], ["red", 10]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /......\         /     \             
//  /   1   \      /   2   \      /        \       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \ brown  /.......\       /      \......../       \       /      \     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /      \  [9, 0] /     \ [11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /        \       /       \ red  /     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(  [8, 1]  )-----( [10, 1] )----(      
//  \       /      \       /      \......../       \......./      \ black  /       \ white /      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /   4   \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \       /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |.......|       |       |.......|       |       |       |
// |   1   |.......|   2   |   1   | brown |.......|   2   |   1   |.......|   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |       |       |       |       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown | black |   1   | white |   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|   4   |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  15   |
// | brown |  18   |
// | white |  10   |
// | red   |  10   |
// 
exports.move6 = [[0, 5], [0, 4]];
exports.move6brown = [
    [1, "hole", 2, 1, "brown", "hole", 2, 1, "hole", 4, 1, "red"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", "black", 1, "white", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", 4, "unusable"]
];
exports.move6brownscore = [["white", 10], ["red", 10], ["black", 15], ["brown", 18]];
exports.move6brownstate = ["playing", exports.move6brown, exports.move6brownscore];
// 
// -- "white": [10, 1] -> [10, 2]. white gets 4 points. [["black", 15], ["brown", 18], ["white", 14], ["red", 10]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /......\         /     \             
//  /   1   \      /   2   \      /        \       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \ brown  /.......\       /      \......../       \       /      \     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/    4    \_____/        \    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /      \  [9, 0] /.....\ [11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /        \       /.......\ red  /     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(  [8, 1]  )-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \ black  /       \......./      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/   3    \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1] s /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /       \      /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \ white /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |.......|       |       |.......|       |       |       |
// |   1   |.......|   2   |   1   | brown |.......|   2   |   1   |.......|   4   |   1   |  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |       |       |.......|       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown | black |   1   |.......|   3   |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  15   |
// | brown |  18   |
// | white |  14   |
// | red   |  10   |
exports.move7 = [[1, 10], [2, 10]];
exports.move7white = [
    [1, "hole", 2, 1, "brown", "hole", 2, 1, "hole", 4, 1, "red"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", "black", 1, "hole", 3],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "white", "unusable"]
];
exports.move7whitescore = [["red", 10], ["black", 15], ["brown", 18], ["white", 14]];
exports.move7whitestate = ["playing", exports.move7white, exports.move7whitescore];
// 
// -- "red": [11, 0] -> [11, 1]. red gets 3 points. [["black", 15], ["brown", 18], ["white", 14], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /......\         /     \             
//  /   1   \      /   2   \      /        \       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \ brown  /.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/    4    \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /      \  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /        \       /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(  [8, 1]  )-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \ black  /       \......./      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /       \ red  /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \ white /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   | brown |.......|   2   |   1   |.......|   4   |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |       |       |.......|       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown | black |   1   |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  15   |
// | brown |  18   |
// | white |  14   |
// | red   |  13   |
// 
exports.move8 = [[0, 11], [1, 11]];
exports.move8red = [
    [1, "hole", 2, 1, "brown", "hole", 2, 1, "hole", 4, 1, "hole"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", "black", 1, "hole", "red"],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "white", "unusable"]
];
exports.move8redscore = [["black", 15], ["brown", 18], ["white", 14], ["red", 13]];
exports.move8redstate = ["playing", exports.move8red, exports.move8redscore];
// -- "black": [8, 1] -> [9, 0]. black gets 4 points. [["black", 19], ["brown", 18], ["white", 14], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /      \         /     \        /......\         /     \             
//  /   1   \      /   2   \      /        \       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(  [4, 0]  )-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \ brown  /.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \......../       \......./      \     
//   \_____/   2    \_____/   2    \______/         \_____/        \______/    1    \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \      /   2   \      /        \  red  /       \ brown/........\       /       \ red  /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \ white /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |       |.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   | brown |.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |.......|       |.......|       |
// |   5   |   2   |   1   |   2   |.......|  red  |.......| brown |.......|   1   |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  19   |
// | brown |  18   |
// | white |  14   |
// | red   |  13   |
exports.move9 = [[1, 8], [0, 9]];
exports.move9black = [
    [1, "hole", 2, 1, "brown", "hole", 2, 1, "hole", "black", 1, "hole"],
    [5, 2, 1, 2, "hole", "red", "hole", "brown", "hole", 1, "hole", "red"],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "white", "unusable"]
];
exports.move9blackscore = [["brown", 18], ["white", 14], ["red", 13], ["black", 19]];
exports.move9blackstate = ["playing", exports.move9black, exports.move9blackscore];
// 
// -- "brown": [4, 0] -> [1, 1]. brown gets 2 points. [["black", 19], ["brown", 20], ["white", 14], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \......../       \......./      \     
//   \_____/        \_____/   2    \______/         \_____/        \______/    1    \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /     \ [11, 1]/    
//  /   1   \brown /   2   \      /        \  red  /       \ brown/........\       /       \ red  /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----( [10, 2] )-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \ white /            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |.......|       |.......|       |
// |   5   | brown |   1   |   2   |.......|  red  |.......| brown |.......|   1   |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  19   |
// | brown |  20   |
// | white |  14   |
// | red   |  13   |
exports.move10 = [[0, 4], [1, 1]];
exports.move10brown = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    [5, "brown", 1, 2, "hole", "red", "hole", "brown", "hole", 1, "hole", "red"],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "white", "unusable"]
];
exports.move10brownscore = [["white", 14], ["red", 13], ["black", 19], ["brown", 20]];
exports.move10brownstate = ["playing", exports.move10brown, exports.move10brownscore];
// 
// -- "white": [10, 2] -> [9, 1]. white gets 1 point. [["black", 19], ["brown", 20], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \......../       \......./      \     
//   \_____/        \_____/   2    \______/         \_____/        \______/         \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \brown /   2   \      /        \  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |.......|       |.......|       |
// |   5   | brown |   1   |   2   |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  19   |
// | brown |  20   |
// | white |  15   |
// | red   |  13   |
exports.move11 = [[2, 10], [1, 9]];
exports.move11white = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    [5, "brown", 1, 2, "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move11whitescore = [["red", 13], ["black", 19], ["brown", 20], ["white", 15]];
exports.move11whitestate = ["playing", exports.move11white, exports.move11whitescore];
// 
// -- "red": no moves left, SKIP. 
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \......../       \......./      \     
//   \_____/        \_____/   2    \______/         \_____/        \______/         \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /      \ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \brown /   2   \      /        \  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(  [4, 2]  )-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \ black  /       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |.......|       |.......|       |
// |   5   | brown |   1   |   2   |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx| black |xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  19   |
// | brown |  20   |
// | white |  15   |
// | red   |  13   |
exports.move12 = "SKIP";
exports.move12redskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    [5, "brown", 1, 2, "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "black", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move12redskipscore = [["black", 19], ["brown", 20], ["white", 15], ["red", 13]];
exports.move12redskipstate = ["playing", exports.move12redskip, exports.move12redskipscore];
// 
// -- "black" : [4, 2] -> [3, 1]. black gets 2 points. [["black", 21], ["brown", 20], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /   5   \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \       /      \       /      \......../       \......./      \......../       \......./      \     
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/        \    
//   /     \ [1, 1] /     \ [3, 1] /......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \brown /   2   \ black/........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |       |       |       |.......|       |.......|       |.......|       |.......|       |
// |   5   | brown |   1   | black |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  21   |
// | brown |  20   |
// | white |  15   |
// | red   |  13   |
exports.move13 = [[2, 4], [1, 3]];
exports.move13black = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    [5, "brown", 1, "black", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move13blackscore = [["brown", 20], ["white", 15], ["red", 13], ["black", 21]];
exports.move13blackstate = ["playing", exports.move13black, exports.move13blackscore];
// 
// -- "brown" : [1, 1] -> [0, 1]. brown gets 5 points. [["black", 21], ["brown", 25], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /       \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \ brown /......\       /      \......../       \......./      \......../       \......./      \     
//   \_____/........\_____/        \______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \ [3, 1] /......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../   2   \ black/........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |.......|       |       |.......|       |.......|       |.......|       |.......|       |
// | brown |.......|   1   | black |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  21   |
// | brown |  25   |
// | white |  15   |
// | red   |  13   |
// 
exports.move14 = [[1, 1], [1, 0]];
exports.move14brown = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["brown", "hole", 1, "black", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move14brownscore = [["white", 15], ["red", 13], ["black", 21], ["brown", 25]];
exports.move14brownstate = ["playing", exports.move14brown, exports.move14brownscore];
// 
// -- "white" : no moves left, SKIP. 
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /       \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \ brown /......\       /      \......../       \......./      \......../       \......./      \     
//   \_____/........\_____/        \______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \ [3, 1] /......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../   2   \ black/........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |.......|       |       |.......|       |.......|       |.......|       |.......|       |
// | brown |.......|   1   | black |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  21   |
// | brown |  25   |
// | white |  15   |
// | red   |  13   |
exports.move15 = "SKIP";
exports.move15whiteskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["brown", "hole", 1, "black", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move15whiteskipscore = [["red", 13], ["black", 21], ["brown", 25], ["white", 15]];
exports.move15whiteskipstate = ["playing", exports.move15whiteskip, exports.move15whiteskipscore];
// 
// -- "red" : no moves left, SKIP. 
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /       \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \ brown /......\       /      \......../       \......./      \......../       \......./      \     
//   \_____/........\_____/        \______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \ [3, 1] /......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../   2   \ black/........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \       /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |.......|       |       |.......|       |.......|       |.......|       |.......|       |
// | brown |.......|   1   | black |.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx|   2   |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  21   |
// | brown |  25   |
// | white |  15   |
// | red   |  13   |
exports.move16 = "SKIP";
exports.move16redskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["brown", "hole", 1, "black", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", 2, "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move16redskipscore = [["black", 21], ["brown", 25], ["white", 15], ["red", 13]];
exports.move16redskipstate = ["playing", exports.move16redskip, exports.move16redskipscore];
// 
// -- "black" : [3, 1] -> [2, 2]. black get 2 points. [["black", 23], ["brown", 25], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /     \.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /       \....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (  [0, 1] )----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \ brown /......\       /......\......../       \......./      \......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \.[3, 1]./......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../       \....../........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \       /      \ black /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |       |.......|       |.......|.......|       |.......|       |.......|       |.......|       |
// | brown |.......|   1   |.......|.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// |   1   |xxxxxxx| black |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  23   |
// | brown |  25   |
// | white |  15   |
// | red   |  13   |
exports.move17 = [[1, 3], [2, 2]];
exports.move17black = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["brown", "hole", 1, "hole", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    [1, "unusable", "black", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move17blackscore = [["brown", 25], ["white", 15], ["red", 13], ["black", 23]];
exports.move17blackstate = ["playing", exports.move17black, exports.move17blackscore];
// 
// -- "brown" : [0, 1] -> [0, 2]. brown get 1 point. [["black", 23], ["brown", 26], ["white", 15], ["red", 13]]
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\       /......\......../       \......./      \......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \.[3, 1]./......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../       \....../........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \ black /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|       |.......|       |.......|       |
// |.......|.......|   1   |.......|.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx| black |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  23   |
// | brown |  26   |
// | white |  15   |
// | red   |  13   |
exports.move18 = [[1, 0], [2, 0]];
exports.move18brown = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["hole", "hole", 1, "hole", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    ["brown", "unusable", "black", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move18brownscore = [["white", 15], ["red", 13], ["black", 23], ["brown", 26]];
exports.move18brownstate = ["playing", exports.move18brown, exports.move18brownscore];
// -- "white" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\       /......\......../       \......./      \......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \.[3, 1]./......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../       \....../........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \ black /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|       |.......|       |.......|       |
// |.......|.......|   1   |.......|.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx| black |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  23   |
// | brown |  26   |
// | white |  15   |
// | red   |  13   |
exports.move19 = "SKIP";
exports.move19whiteskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["hole", "hole", 1, "hole", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    ["brown", "unusable", "black", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move19whiteskipscore = [["red", 13], ["black", 23], ["brown", 26], ["white", 15]];
exports.move19whiteskipstate = ["playing", exports.move19whiteskip, exports.move19whiteskipscore];
// -- "red" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../   1   \      /........\......./.......\      /........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\       /......\......../       \......./      \......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./     \.[3, 1]./......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../       \....../........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(  [2, 2] )----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \ black /      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|       |.......|       |.......|       |
// |.......|.......|   1   |.......|.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|       |xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx| black |xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  23   |
// | brown |  26   |
// | white |  15   |
// | red   |  13   |
exports.move20 = "SKIP";
exports.move20redskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["hole", "hole", 1, "hole", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    ["brown", "unusable", "black", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move20redskipscore = [["black", 23], ["brown", 26], ["white", 15], ["red", 13]];
exports.move20redskipstate = ["playing", exports.move20redskip, exports.move20redskipscore];
// 
// -- "black" : [2, 2] -> [2, 1]. black gets 1 point. [["black", 24], ["brown", 26], ["white", 15], ["red", 13]]
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/   1    \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../       \      /........\......./.......\      /........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\ black /......\......../       \......./      \......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/        \______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \ [7, 1] /......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \ brown/........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   |   1   |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|       |.......|       |.......|       |
// |.......|.......| black |.......|.......|  red  |.......| brown |.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  24   |
// | brown |  26   |
// | white |  15   |
// | red   |  13   |
exports.move21 = [[2, 2], [1, 2]];
exports.move21black = [
    [1, "hole", 2, 1, "hole", "hole", 2, 1, "hole", "black", 1, "hole"],
    ["hole", "hole", "black", "hole", "hole", "red", "hole", "brown", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move21blackscore = [["brown", 26], ["white", 15], ["red", 13], ["black", 24]];
exports.move21blackstate = ["playing", exports.move21black, exports.move21blackscore];
// 
// -- "brown" : [7, 1] -> [7, 0]. brown gets 1 point. [["black", 24], ["brown", 27], ["white", 15], ["red", 13]]
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/        \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../       \      /........\......./.......\ brown/........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\ black /......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   | brown |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......| black |.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  24   |
// | brown |  27   |
// | white |  15   |
// | red   |  13   |
// 
exports.move22 = [[1, 7], [0, 7]];
exports.move22brown = [
    [1, "hole", 2, 1, "hole", "hole", 2, "brown", "hole", "black", 1, "hole"],
    ["hole", "hole", "black", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move22brownscore = [["white", 15], ["red", 13], ["black", 24], ["brown", 27]];
exports.move22brownstate = ["playing", exports.move22brown, exports.move22brownscore];
// -- "white" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/        \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../       \      /........\......./.......\ brown/........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\ black /......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   | brown |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......| black |.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  24   |
// | brown |  27   |
// | white |  15   |
// | red   |  13   |
// 
exports.move23 = "SKIP";
exports.move23whiteskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, "brown", "hole", "black", 1, "hole"],
    ["hole", "hole", "black", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move23whiteskipscore = [["red", 13], ["black", 24], ["brown", 27], ["white", 15]];
exports.move23whiteskipstate = ["playing", exports.move23whiteskip, exports.move23whiteskipscore];
// -- "red" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/   1    \______/.........\_____/        \______/         \_____/........\    
//   /.....\.[1, 0]./     \ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../       \      /........\......./.......\ brown/........\ black /.......\....../     
// (..[0, 1].)----( [2, 1]  )----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\ black /......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   |   1   |.......|.......|   2   | brown |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|       |.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......| black |.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  24   |
// | brown |  27   |
// | white |  15   |
// | red   |  13   |
// 
exports.move24 = "SKIP";
exports.move24redskip = [
    [1, "hole", 2, 1, "hole", "hole", 2, "brown", "hole", "black", 1, "hole"],
    ["hole", "hole", "black", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move24redskipscore = [["black", 24], ["brown", 27], ["white", 15], ["red", 13]];
exports.move24redskipstate = ["playing", exports.move24redskip, exports.move24redskipscore];
// -- "black" : [2, 1] -> [3, 0]. black gets 1 point. [["black", 25], ["brown", 27], ["white", 15], ["red", 13]]
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /   2   \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\       /      \......../       \       /......\     
//   \_____/........\_____/        \______/.........\_____/        \______/         \_____/........\    
//   /.....\.[1, 0]./.....\ [3, 0] /......\.[5, 0]../.....\ [7, 0] /......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\ black/........\......./.......\ brown/........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |       |.......|       |       |.......|
// |   1   |.......|   2   | black |.......|.......|   2   | brown |.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  25   |
// | brown |  27   |
// | white |  15   |
// | red   |  13   |
exports.move25 = [[1, 2], [0, 3]];
exports.move25black = [
    [1, "hole", 2, "black", "hole", "hole", 2, "brown", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move25blackscore = [["brown", 27], ["white", 15], ["red", 13], ["black", 25]];
exports.move25blackstate = ["playing", exports.move25black, exports.move25blackscore];
// 
// -- "brown" : [7, 0] -> [6, 0]. brown gets 2 points. [["black", 25], ["brown", 29], ["white", 15], ["red", 13]]
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/        \______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\ [3, 0] /......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\ black/........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......|   2   | black |.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  25   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move26 = [[0, 7], [0, 6]];
exports.move26brown = [
    [1, "hole", 2, "black", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move26brownscore = [["white", 15], ["red", 13], ["black", 25], ["brown", 29]];
exports.move26brownstate = ["playing", exports.move26brown, exports.move26brownscore];
// -- "white" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/        \______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\ [3, 0] /......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\ black/........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......|   2   | black |.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  25   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move27 = "SKIP";
exports.move27whiteskip = [
    [1, "hole", 2, "black", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move27whiteskipscore = [["red", 13], ["black", 25], ["brown", 29], ["white", 15]];
exports.move27whiteskipstate = ["playing", exports.move27whiteskip, exports.move27whiteskipscore];
// -- "red" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /   2   \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\       /      \......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/        \______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\ [3, 0] /......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\ black/........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |       |.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......|   2   | black |.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  25   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move28 = "SKIP";
exports.move28redskip = [
    [1, "hole", 2, "black", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move28redskipscore = [["black", 25], ["brown", 29], ["white", 15], ["red", 13]];
exports.move28redskipstate = ["playing", exports.move28redskip, exports.move28redskipscore];
// 
// -- "black" : [3, 0] -> [2, 0]. black gets 2 points. [["black", 27], ["brown", 29], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /       \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\ black /......\......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/........\______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\.[3, 0]./......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\....../........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  27   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move29 = [[0, 3], [0, 2]];
exports.move29blackskip = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move29blackskipscore = [["brown", 29], ["white", 15], ["red", 13], ["black", 27]];
exports.move29blackskipstate = ["playing", exports.move29blackskip, exports.move29blackskipscore];
// 
// -- "brown" : No moves left. SKIP
// 
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /       \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\ black /......\......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/........\______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\.[3, 0]./......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\....../........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  27   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move30 = "SKIP";
exports.move30brownskip = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move30brownskipscore = [["white", 15], ["red", 13], ["black", 27], ["brown", 29]];
exports.move30brownskipstate = ["playing", exports.move30brownskip, exports.move30brownskipscore];
// -- "white" SKIP
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /       \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\ black /......\......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/........\______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\.[3, 0]./......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\....../........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  27   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
// -- "red" SKIP
exports.move31 = "SKIP";
exports.move31whiteskip = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move31whiteskipscore = [["red", 13], ["black", 27], ["brown", 29], ["white", 15]];
exports.move31whiteskipstate = ["playing", exports.move31whiteskip, exports.move31whiteskipscore];
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /       \      /........\       /       \      /........\       /   1   \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\ black /......\......../.......\ brown /......\......../       \       /......\     
//   \_____/........\_____/........\______/.........\_____/........\______/         \_____/........\    
//   /.....\.[1, 0]./.....\.[3, 0]./......\.[5, 0]../.....\.[7, 0]./......\  [9, 0] /.....\.[11, 0]/    
//  /.......\....../.......\....../........\......./.......\....../........\ black /.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|       |       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......| black |   1   |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  27   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move32 = "SKIP";
exports.move32redskip = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "black", 1, "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move32redskipscore = [["black", 27], ["brown", 29], ["white", 15], ["red", 13]];
exports.move32redskipstate = ["playing", exports.move32redskip, exports.move32redskipscore];
// 
// -- "black" [9, 0] -> [10, 0]. black gets 1 point. [["black", 28], ["brown", 29], ["white", 15], ["red", 13]]
//    _____          _____          ______           _____          ______           _____              
//   /     \        /     \        /......\         /     \        /......\         /     \             
//  /   1   \      /       \      /........\       /       \      /........\       /       \            
// (  [0, 0] )----( [2, 0]  )----(..[4, 0]..)-----( [6, 0]  )----(..[8, 0]..)-----( [10, 0] )-----      
//  \       /......\ black /......\......../.......\ brown /......\......../.......\ black /......\     
//   \_____/........\_____/........\______/.........\_____/........\______/.........\_____/........\    
//   /.....\.[1, 0]./.....\.[3, 0]./......\.[5, 0]../.....\.[7, 0]./......\..[9, 0]./.....\.[11, 0]/    
//  /.......\....../.......\....../........\......./.......\....../........\......./.......\....../     
// (..[0, 1].)----(.[2, 1]..)----(..[4, 1]..)-----(.[6, 1]..)----(..[8, 1]..)-----(.[10, 1].)----(      
//  \......./......\......./......\......../       \......./......\......../       \......./      \     
//   \_____/........\_____/........\______/         \_____/........\______/         \_____/        \    
//   /     \.[1, 1]./.....\.[3, 1]./......\ [5, 1]  /     \.[7, 1]./......\  [9, 1] /.....\ [11, 1]/    
//  /   1   \....../.......\....../........\  red  /       \....../........\ white /.......\ red  /     
// (  [0, 2] )----(..[2, 2].)----(..[4, 2]..)-----( [6, 2]  )----(..[8, 2]..)-----(.[10, 2].)-----      
//  \ brown /      \......./      \......../       \ white /      \......../       \......./            
//   \_____/        \_____/        \______/         \_____/        \______/         \_____/          
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|.......|       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......|.......| black |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | black |  28   |
// | brown |  29   |
// | white |  15   |
// | red   |  13   |
exports.move33 = [[0, 9], [0, 10]];
exports.move33black = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "hole", "black", "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.move33blackscore = [["brown", 29], ["white", 15], ["red", 13], ["black", 28]];
exports.move33blackstate = ["playing", exports.move33black, exports.move33blackscore];
// 
// -- No moves left. Transition to "done" stage. Final:
// 
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 0]| [1, 0]| [2, 0]| [3, 0]| [4, 0]| [5, 0]| [6, 0]| [7, 0]| [8, 0]| [9, 0]|[10, 0]|[11, 0]|
// |       |.......|       |.......|.......|.......|       |.......|.......|.......|       |.......|
// |   1   |.......| black |.......|.......|.......| brown |.......|.......|.......| black |.......|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 1]| [1, 1]| [2, 1]| [3, 1]| [4, 1]| [5, 1]| [6, 1]| [7, 1]| [8, 1]| [9, 1]|[10, 1]|[11, 1]|
// |.......|.......|.......|.......|.......|       |.......|.......|.......|       |.......|       |
// |.......|.......|.......|.......|.......|  red  |.......|.......|.......| white |.......|  red  |
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// | [0, 2]|xxxxxxx| [2, 2]|xxxxxxx| [4, 2]|xxxxxxx| [6, 2]|xxxxxxx| [8, 2]|xxxxxxx|[10, 2]|xxxxxxx|
// |       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|       |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// | brown |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx| white |xxxxxxx|.......|xxxxxxx|.......|xxxxxxx|
// +-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+-------+
// 
// | color | score |
// |-------+-------|
// | brown |  29   |
// | black |  28   |
// | white |  15   |
// | red   |  13   |
exports.doneboard = [
    [1, "hole", "black", "hole", "hole", "hole", "brown", "hole", "hole", "hole", "black", "hole"],
    ["hole", "hole", "hole", "hole", "hole", "red", "hole", "hole", "hole", "white", "hole", "red"],
    ["brown", "unusable", "hole", "unusable", "hole", "unusable", "white", "unusable", "hole", "unusable", "hole", "unusable"]
];
exports.doneboardscore = [["brown", 29], ["white", 15], ["red", 13], ["black", 28]];
exports.donestate = ["done", exports.doneboard, exports.doneboardscore];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
exports.stateList = [
    exports.placement1blackstate,
    exports.placement2brownstate,
    exports.placement3whitestate,
    exports.placement4redstate,
    exports.placement5blackstate,
    exports.placement6brownstate,
    exports.placement7whitestate,
    exports.placement8redstate,
    exports.move1blackstate,
    exports.move2brownstate,
    exports.move3whitestate,
    exports.move4redstate,
    exports.move5blackstate,
    exports.move6brownstate,
    exports.move7whitestate,
    exports.move8redstate,
    exports.move9blackstate,
    exports.move10brownstate,
    exports.move11whitestate,
    exports.move12redskipstate,
    exports.move13blackstate,
    exports.move14brownstate,
    exports.move15whiteskipstate,
    exports.move16redskipstate,
    exports.move17blackstate,
    exports.move18brownstate,
    exports.move19whiteskipstate,
    exports.move20redskipstate,
    exports.move21blackstate,
    exports.move22brownstate,
    exports.move23whiteskipstate,
    exports.move24redskipstate,
    exports.move25blackstate,
    exports.move26brownstate,
    exports.move27whiteskipstate,
    exports.move28redskipstate,
    exports.move29blackskipstate,
    exports.move30brownskipstate,
    exports.move31whiteskipstate,
    exports.move32redskipstate,
    exports.move33blackstate
];
