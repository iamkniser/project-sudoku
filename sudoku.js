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


function isSolved(number, coordinate ,board) {

  const [r, c] = coordinate;

  //проверяем строк... строка фиксированная колонка 
  let checkRow = function check1() {
      for (let i = 0; i < size; i+= 1 ){
        if(board[r][i]=== num && i !== c ){
            return false; 
          }
        }
  }


 // проверка столбцов
  let checkColumn  = function check2() {
   for (let i = 0; i < 9; i+= 1 ){
         if (board[i][c]=== number && i !== r) {
             return false; 
         }
      }
  }




  // проверка бокса 
  
  checkBox([])

  
 

 let finalCeck = checkColumn && checkRow

 return finalCeck
}

// let checkBox = function check3(c, r) {
//   let box = [
//     [[0,0], [0, 1], [0, 2], [1,0], [1, 1], [1, 2], [2,0], [2, 1], [2, 2]],
//     [[3,0], [3, 1], [3, 2], [4,0], [4, 1], [4, 2], [5,0], [5, 1], [5, 2]],
//     [[6,0], [6, 1], [6, 2], [7,0], [7, 1], [7, 2], [8,0], [8, 1], [8, 2]],




//   ]


//   box[0][1]



//   let findedBox;
//   for(let i = 0; i < box.length; i += 1) {
//     let index = box[i].findIndex((el)=>{
//       //el -> [i,j]
//       return el[0] === c && el[1] === r;
//     })
//     if(index > 0){
//       findedBox = box[i];
//       break;
//     }
//   }
//   console.log(findedBox);

// }
// checkBox(8,0);


// console.log(isSolved(number,board))

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
