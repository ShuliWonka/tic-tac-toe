const cells = document.querySelectorAll(".cell"); // all cell elements
const players = document.querySelectorAll(".player"); // all player elements
const allRows = document.querySelectorAll(".row"); // all row elements
const allFirstCells = document.querySelectorAll(".firstCell"); // All the first cells
const allSecondCells = document.querySelectorAll(".secondCell"); // All the second cells
const allThirdCells = document.querySelectorAll(".thirdCell"); // All the third cells

let turn = "X"; // current turn

players[0].classList.add("selected"); // changing the first player element's color to salmon

// Changes turn from 'x' to 'o' and vice versa
function changeTurn() {
  if (turn === "O") {
    turn = "X";
    players[1].classList.add("selected"); // second player's color changes to salmon
    players[0].classList.remove("selected"); // first player's color changes back to gray
  } else if (turn === "X") {
    turn = "O";
    players[0].classList.add("selected"); // first player's color changes to salmon
    players[1].classList.remove("selected"); // second player's color changes back to gray
  }
}

// Checking victory of all rows
function checkRows() {
  for (const row of allRows) {
    const rowCells = row.getElementsByClassName("cell");
    const firstCell = rowCells[0].textContent;
    const secondCell = rowCells[1].textContent;
    const thirdCell = rowCells[2].textContent;

    if (!firstCell && !secondCell && !thirdCell) {
      continue;
    }

    if (firstCell === secondCell && secondCell === thirdCell) {
      alert("victory!");
    }
  }
}
// Checking victory of all columns
function checkColumns() {
  // variable cells is array whit all columns cells
  const cells = [allFirstCells, allSecondCells, allThirdCells];

  // looping on all columns cells, variable columnCells represent all the cells in the column
  for (const columnCells of cells) {
    // check is for the case of an empty string: ''. It is falsy but not false
    if (
      !columnCells[0].textContent &&
      !columnCells[1].textContent &&
      !columnCells[2].textContent
    ) {
      continue;
    }

    // if the text in the first cell of the column equal to the text in the second cell, and the text in the second cell equal to the text in the third cell
    if (
      columnCells[0].textContent === columnCells[1].textContent &&
      columnCells[1].textContent === columnCells[2].textContent
    ) {
      // alert victory string
      alert("victory!");
    }
  }
}

function checkDiagonals() {
  if (
    !allFirstCells[0].textContent &&
    !allSecondCells[1].textContent &&
    !allThirdCells[2].textContent
  ) {
    return;
  }
  if (
    allFirstCells[0].textContent === allSecondCells[1].textContent &&
    allSecondCells[1].textContent === allThirdCells[2].textContent
  ) {
    alert("Victory");
  }
  if (
    !allThirdCells[0].textContent &&
    !allSecondCells[1].textContent &&
    !allFirstCells[2].textContent
  ) {
    return;
  }
  if (
    allThirdCells[0].textContent === allSecondCells[1].textContent &&
    allSecondCells[1].textContent === allFirstCells[2].textContent
  ) {
    alert("Victory");
  }
}

// loops over cell elements
for (const cell of cells) {
  // adds click event listener to each cell
  cell.addEventListener("click", () => {
    // if cell is empty
    if (cell.textContent === "") {
      // add turn symbol ('x' or 'o') to cell
      cell.textContent = turn;
      // and change turn
      changeTurn();
    }

    // check victory of all rows
    checkRows();
    checkColumns();
    checkDiagonals();
  });
}
/**
 * Homework
 * - Check victory of columns
 *
 *  Hints:
 *  You can do it with a loop OR NOT!
 *
 * - After this, check slants
 */
