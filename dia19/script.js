
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status');
const restartButton = document.getElementById('restartButton');
const startGameButton = document.getElementById('startGameButton');
const player1NameInput = document.getElementById('player1Name');
const player1SymbolSelect = document.getElementById('player1Symbol');
const player2NameInput = document.getElementById('player2Name');
const player2SymbolSelect = document.getElementById('player2Symbol');

let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
let isGameActive = false;
let player1 = { name: '', symbol: 'X' };
let player2 = { name: '', symbol: 'O' };

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

const winningMessage = (player) => `${player.name} (${player.symbol}) venceu!`;
const drawMessage = () => `Empate!`;
const currentPlayerTurn = (player) => `É a vez de ${player.name} (${player.symbol})`;

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
    statusDisplay.innerHTML = winningMessage(currentPlayer === player1.symbol ? player1 : player2);
    isGameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    statusDisplay.innerHTML = drawMessage();
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === player1.symbol ? player2.symbol : player1.symbol;
  statusDisplay.innerHTML = currentPlayerTurn(currentPlayer === player1.symbol ? player1 : player2);
}

function restartGame() {
  currentPlayer = player1.symbol;
  gameState = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;

  statusDisplay.innerHTML = currentPlayerTurn(player1);
  cells.forEach(cell => cell.innerHTML = "");
}

function startGame() {
  player1.name = player1NameInput.value || "Jogador 1";
  player1.symbol = player1SymbolSelect.value;

  player2.name = player2NameInput.value || "Jogador 2";
  player2.symbol = player2SymbolSelect.value;

  if (player1.symbol === player2.symbol) {
    alert("Os jogadores não podem ter o mesmo símbolo!");
    return;
  }

  currentPlayer = player1.symbol;
  isGameActive = true;
  statusDisplay.innerHTML = currentPlayerTurn(player1);
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
startGameButton.addEventListener('click', startGame);
