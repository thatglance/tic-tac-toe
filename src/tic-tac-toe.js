class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.remainingPlayerSymbol = 'o';
        this.field = [];
        for(var i=0; i<3; i++){
            this.field[i] = [];
            for(var j=0; j<3; j++){
                this.field[i][j] = null;
            }
        }
        this.hasWinner = false;
        this.winner = null;
        this.countEmptyFields = 9;

        this.countXArray = [];
        this.countXArray.length = 8;
        this.countXArray.fill(0, 0, 8);

        this.countOArray = [];
        this.countOArray.length = 8;
        this.countOArray.fill(0, 0, 8);
    }

    getCurrentPlayerSymbol() { //+
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) { //+
        if(this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            
            //this.countXArray.fill(-1, 0, 7);
            //this.countOArray.fill(1, 0, 7);
            var requiredArray;// = (this.currentPlayerSymbol==='x' ? this.countXArray : this.countOArray);
            //this.currentPlayerSymbol === 'x' ? requiredArray = this.countXArray : requiredArray = this.countOArray;
            //requiredArray[0] = 2;
            if(this.currentPlayerSymbol === 'x') {
                requiredArray = this.countXArray;
                this.currentPlayerSymbol = 'o';
                this.remainingPlayerSymbol = 'x';
            } else {
                requiredArray = this.countOArray;
                this.currentPlayerSymbol = 'x';
                this.remainingPlayerSymbol = 'o';
            }

            this.countEmptyFields--;

            requiredArray[rowIndex]++;
            requiredArray[3 + columnIndex]++;
            if(rowIndex === columnIndex){
                requiredArray[6]++;
            }
            if(rowIndex+columnIndex === 2){
                requiredArray[7]++;
            }
            if(requiredArray[rowIndex] === 3 || requiredArray[3 + columnIndex] === 3 ||
                requiredArray[6] === 3 || requiredArray[7] === 3) {
                    this.hasWinner = true;
                    this.winner = this.remainingPlayerSymbol;
            }
        }
    }

    isFinished() { //+
        return (this.hasWinner || this.noMoreTurns()/*this.countEmptyFields===0*/);
    }

    getWinner() { //+
        return this.winner;
    }

    noMoreTurns() { //+
        return (this.countEmptyFields === 0);
    }

    isDraw() { //+
        return (!(this.hasWinner) && this.noMoreTurns());
    }

    getFieldValue(rowIndex, colIndex) { //+
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

let game = new TicTacToe();
game.nextTurn(2, 1)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 0)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 1)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 2)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(0, 0)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(2, 1)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 1)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 1)
//expect(game.getWinner()).to.equal(null)

game.nextTurn(1, 0)
//expect(game.getWinner()).to.equal('o')
console.log(game.getWinner())