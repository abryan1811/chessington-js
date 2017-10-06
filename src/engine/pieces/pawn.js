import Piece from './piece';
import Player from '../player.js';
import Square from '../square.js';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        console.log(currentSquare);

        let moves = [];
        if (this.player === Player.WHITE){
            let newRow = currentSquare.row;
            newRow ++;
            let newCol = 0;
            const newSquare = new Square(newRow,newCol);
            
            console.log(newSquare);
            moves.push(newSquare);

        } else {
            let newRow = currentSquare.row;
            newRow--;
            let newCol = 7;
            const newSquare = new Square(newRow,newCol);
            
            console.log(newSquare);
            moves.push(newSquare);
        }
        
        return moves;
    }
}
