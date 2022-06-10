const fs = require('fs');

const sudokuString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function solve(sudokuString) {
  return sudokuString.slice(0, 82).match(/.{1,9}/gm).map((el) => el.split(''));
}
console.table(solve(sudokuString));
module.exports = {
  solve,
  // isSolved,
  // prettyBoard,
};