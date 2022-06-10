// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

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
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
