class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.field = [];
        for(var i=0; i<3; i++){
        //    field[i] = [];
            field.push([]);
            for(var j=0; j<3; j++){
                field[i][j] = null;
            }
        }
        this.hasWinner = false;
        this.countEmptyFields = 9;
        this.countTics = [];
        this.countTics.fill(0, 0, 7);
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol==='x'?this.currentPlayerSymbol='o':this.currentPlayerSymbol='x';
        this.countEmptyFields--;
    }

    isFinished() {
        return (this.hasWinner || noMoreTurns()/*this.countEmptyFields===0*/);
    }

    getWinner() {

    }

    noMoreTurns() {
        return this.countEmptyFields===0;
    }

    isDraw() {
        return (!(hasWinner()) && noMoreTurns());
    }

    getFieldValue(rowIndex, colIndex) {
        return ((this.field[rowIndex][colIndex]!==undefined)?this.field[rowIndex][colIndex]:null);
    }
}

module.exports = TicTacToe;

var a = new TicTacToe();
console.log(a.countEmptyFields);