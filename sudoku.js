// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// const fs = require('fs');
// const sudokutable = fs.readFileSync('./sudoku-puzzles.txt')
//  012345678
//  1-58-2--- -9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--

function solve(sudokuString) {
  return sudokuString.match(/.{1,9}/g).map((el) => el.split(''));
}

console.table(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

// // Returns a boolean indicating whether
// // or not the provided board is solved.
// // The input board will be in whatever
// // form `solve` returns.
// function isSolved(board) {

// }

// // Takes in a board in some form and
// // returns a String that's well formatted
// // for output to the screen.
// // The input board will be in whatever
// // form `solve` returns.
// function prettyBoard(board) {

// }

// // Exports all the functions to use them in another file.
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
