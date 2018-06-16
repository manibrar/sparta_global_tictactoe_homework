var player1 = true;
var player2 = false;
var xmoves = [];
var ymoves = [];
var counter = 0;
var click = document.getElementsByTagName('td');
var turn = document.getElementsByClassName('playerTurn');
var reset = document.getElementById('reset');
var winning = document.getElementsByTagName('data-num');


console.log(click);
console.log(turn);
console.log(reset);

for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', function(event) {
    if (player1 === true && this.innerHTML === "") {
      this.innerHTML = "X";
      for (var i = 0; i < turn.length; i++) {
        turn[i].innerHTML = "It is Y's turn";
        counter = counter++;
      }
      xmoves[i] = this[i];
      player1 = false;
      player2 = true;

    } else if (player2 === true && this.innerHTML === "") {
      this.innerHTML = "O";
      for (var i = 0; i < turn.length; i++) {
        turn[i].innerHTML = "It is X's turn";
        counter = counter++;
      }
      ymoves[i] = this[i];
      player2 = false;
      player1 = true;

    } else {
      alert("Cannot move here!")
    }

  });
}

reset.addEventListener('click', function(event) {
  for (var i = 0; i < click.length; i++) {
    click[i].innerHTML = "";
  }
  player1 = true;
  player2 = false;
  counter = 0;
})
