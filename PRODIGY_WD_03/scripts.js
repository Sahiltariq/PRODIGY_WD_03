const board = document.getElementById("board");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(cellIndex) {
  if (gameState[cellIndex] !== "" || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  board.children[cellIndex].innerText = currentPlayer;

  if (checkWin()) {
    message.innerText = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (checkDraw()) {
    message.innerText = `It's a draw!`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.innerText = `${currentPlayer}'s turn`;
}

function checkWin() {
  return winningConditions.some((condition) => {
    return condition.every((index) => {
      return gameState[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return gameState.every((cell) => cell !== "");
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  message.innerText = `${currentPlayer}'s turn`;

  for (let i = 0; i < board.children.length; i++) {
    board.children[i].innerText = "";
  }
}
