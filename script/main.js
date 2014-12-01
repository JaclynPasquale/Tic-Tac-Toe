$(document).ready(function() {


  var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  var turn = 0;

  /*function playersTurn() {
    if (turn % 2 === 0) {
      document.getElementById('players-turn').innerHTML =
        "Player 2's Turn";
    } else if (turn % 2 != 0) {
      document.getElementById('players-turn').innerHTML =
        "Player 1's Turn";
    }
  }*/

  function isEmpty(td) {
    return $(td).text() === ''
  }



  $("td").click(function() {

    if (isEmpty(this) && turn % 2 === 0) {
      $(this).text("x");
      turn++;
    } else if (isEmpty(this) && turn % 2 !== 0) {
      $(this).text("o");
      turn++;
    }
  })



});
