class TicTacToe {
    constructor() {
        this.state = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.state[rowIndex][columnIndex] === null) 
        {
            this.state[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol === 'x') this.currentPlayerSymbol = 'o';
            else this.currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        if((this.getWinner() !== null) || (this.isDraw())) return true;
        else return false;
    }

    getWinner() {
        if(((this.state[0][0] === this.state[0][1]) & (this.state[0][1] === this.state[0][2]) & (this.state[0][2] !== null)) 
        || ((this.state[0][0] === this.state[1][0]) & (this.state[1][0] === this.state[2][0]) & (this.state[2][0] !== null)) 
        || ((this.state[0][0] === this.state[1][1]) & (this.state[1][1] === this.state[2][2]) & (this.state[2][2] !== null)) 
        || ((this.state[0][1] === this.state[1][1]) & (this.state[1][1] === this.state[2][1]) & (this.state[2][1] !== null)) 
        || ((this.state[0][2] === this.state[1][2]) & (this.state[1][2] === this.state[2][2]) & (this.state[2][2] !== null)) 
        || ((this.state[0][2] === this.state[1][1]) & (this.state[1][1] === this.state[2][0]) & (this.state[2][0] !== null)) 
        || ((this.state[1][0] === this.state[1][1]) & (this.state[1][1] === this.state[1][2]) & (this.state[1][2] !== null)) 
        || ((this.state[2][0] === this.state[2][1]) & (this.state[2][1] === this.state[2][2]) & (this.state[2][2] !== null)))
            if (this.currentPlayerSymbol == 'x') return 'o';
            else return 'x';
        else return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++)
                if(this.state[i][j] === null) return false;
        return true;
    }

    isDraw() {
        if((this.noMoreTurns()) & (this.getWinner() === null)) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.state[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
