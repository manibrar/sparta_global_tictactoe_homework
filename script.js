var player1 = true;
var player2 = false;
var xmoves = [];
var ymoves = [];
var counter = 0;
var click = document.getElementsByTagName('td');
var turn = document.getElementsByClassName('playerTurn');
var reset = document.getElementById('reset');
var winningno = document.getElementsByTagName('data-num');
var winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

console.log(winners[0][1]);
console.log(winners[0][2]);
console.log(winners[2][1]);

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', function(event) {
    if (player1 === true && this.innerHTML === "") {
      this.innerHTML = "X";
      xmoves.push(parseInt(event.target.getAttribute("data-num")));
      checkForWin(xmoves, "X");
      player1 = false;
      player2 = true;
      counter = counter + 1;
      for (var i = 0; i < turn.length; i++) {
        turn[i].innerHTML = "It is O's turn";
      }
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
        for (var i = 0; i < click.length; i++) {
          click[i].innerHTML = "";
          player1 = true;
          player2 = false;
          counter = 0;
        }
      }
    }
  });
}

function checkForWin(movesArray, name) {
  for (var i = 0; i < winners.length; i++) {
    for (var j = 0; i < winners[i].length; i++) {
      if (movesArray.indexOf(winners[i][j]) === 2) {
        alert("Game over, " + name + " wins");
      }
    }
  }
}

reset.addEventListener('click', function(event) {
  resetBoard(click);
});

function resetBoard(click, player1, player2) {
  for (var i = 0; i < click.length; i++) {
    click[i].innerHTML = "";
  }
  player1 = true;
  player2 = false;
  counter = 0;
}
