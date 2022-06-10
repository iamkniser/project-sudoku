const fs = require('fs');


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

const findPlace = (board) => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] == '-') {
        return [r, c]
      }
    }
  }
  return null
}

function prettyBoard(solve(sudokuString)) { 
  const position = findPlace(board)
    if (position == null) {
      return true;
    }
    for (let i = 1; i <= 9; i++) {
      const number  = i
      const isValid = isSolved(number, coordinate, board);
      if (isValid) {
        const [x,y] = coordinate
        board[x][y] = number

        if (prettyBoard()) {
          return true
        }

        board[x][y] = '.';

      }
    }

    return false
  }
  function start (board){
    if(prettyBoard()){
      return board
    }
  }
console.log(start(board))

// Exports all the functions to use them in another file.
=======
const sudokuString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function solve(sudokuString) {
  return sudokuString.slice(0, 82).match(/.{1,9}/gm).map((el) => el.split(''));
}


module.exports = {
  solve,
  isSolved,
  prettyBoard,
};