var player1 = true;
var player2 = false;
var xmoves = [];
var ymoves = [];
var counter = 0;
var winCounter = 0;
var click = document.getElementsByTagName('td');
var turn = document.getElementsByClassName('playerTurn');
var reset = document.getElementById('reset');
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', function(event) {
    for (var i = 0; i < turn.length; i++) {
      turn[i].innerHTML = "It is O's turn";
    }
    if (player1 === true && this.innerHTML === "") {
      this.innerHTML = "X";
      xmoves.push(parseInt(event.target.getAttribute("data-num")));
      checkForWin(xmoves, "X");
      player1 = false;
      player2 = true;
      counter = counter + 1;
    } else if (player2 === true && this.innerHTML === "") {
      this.innerHTML = "O";
      ymoves.push(parseInt(event.target.getAttribute("data-num")));
      checkForWin(ymoves, "O");
      counter = counter + 1;
      player2 = false;
      player1 = true;
      for (var i = 0; i < turn.length; i++) {
        turn[i].innerHTML = "It is X's turn";
      }
    } else {
      alert("Cannot move here!")
    }
    if (counter >= 9) {
      var goconfirm = confirm("It's a draw, new game?");
      if (goconfirm) {
        reset();
      }
    }
  });
}

function checkForWin(movesArray, name) {
  for (i = 0; i < winningCombinations.length; i++) {
    winCounter = 0;
    for (var j = 0; j < winningCombinations[i].length; j++) {
      if (movesArray.indexOf(winningCombinations[i][j]) !== -1) {
        winCounter++;
      }
      if (winCounter === 3) {
        alert("Game over, " + name + " wins!");
        resetBoard();
      }
    }
  }
}
reset.addEventListener('click', function(event) {
  resetBoard(event);
});

function resetBoard() {
  for (var i = 0; i < click.length; i++) {
    click[i].innerHTML = "";
  }
  player1 = true;
  player2 = false;
  counter = 0;
  xmoves = [];
  ymoves = [];
  for (var i = 0; i < turn.length; i++) {
    turn[i].innerHTML = "It is X's turn";
  }

}
