function solve(sudokuString) {
  return sudokuString.match(/.{1,9}/g).map((el) => el.split(''));
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
