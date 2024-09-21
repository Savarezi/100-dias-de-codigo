const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const winningMessage = () => `Jogador ${currentPlayer} venceu!`;
const drawMessage = () => `Empate!`;
const currentPlayerTurn = () => `É a vez do Jogador ${currentPlayer}`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick(e) {
  const clickedCell = e.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[clickedCellIndex] !== "" || !isGameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;

  checkResult();
}

function checkResult() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    isGameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    statusDisplay.innerHTML = drawMessage();
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function restartGame() {
  currentPlayer = 'X';
  gameState = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;

  statusDisplay.innerHTML = currentPlayerTurn();
  cells.forEach(cell => cell.innerHTML = "");
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
