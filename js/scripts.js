function Player(playerName){
  this.playerName = playerName;
  this.playerTurnScore = 0;
  this.playerTotalScore = 0;
}

function rollDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetFields(){
  $('input#player_name1').val("");
  $('input#player_name2').val("");

}

$(document).ready(function(){

  $('form#pig_dice_players').submit(function(event){
    event.preventDefault();

    var inputPlayerName1 = $('input#player_name1').val();
    var newPlayer1 = new Player(inputPlayerName1);
    var inputPlayerName2 = $('input#player_name2').val();
    var newPlayer2 = new Player(inputPlayerName2);
    $('#show-game').show();

    resetFields();
    $('ul#players-on-team-1').append("<li><span class='player1_info'> Player Information: <br> Player's Name: " + newPlayer1.playerName + "</span></li>");
    $('ul#players-on-team-1').show();

    $('ul#players-on-team-2').append("<li><span class='player2_info'> Player Information: <br> Player's Name: " + newPlayer2.playerName + "</span></li>");
    $('ul#players-on-team-2').show();


    $('.player1_info').click(function(){
      $('ul#players-on-team-2').hide();

      $('#players-on-team-1').append('<form id="game_form1">' +
      '<p>You Rolled A: <span class="lastRoll1"></span></p>' +
      '<p>Turn Points: <span class="turnPoints1"></span></p>' +
      '<p>Total Points: <span class="totalPoints1"></span></p>' +
      '<button class="btn btn-primary" id="roll_dice1">Roll The Dice</button>' +
      '<button type="submit" class="btn">Hold</button>' +
      '</form>');

      $("button#roll_dice1").click(function(event) {
        event.preventDefault();
        var roll = rollDice(1,6);
        $('.lastRoll1').text(roll);
        if (roll === 1){
          newPlayer1.playerTurnScore = 0;
          alert("You have rolled a 1, no points this turn and it is the next player's turn!")
          $('form#game_form1').submit();
        }else{
          newPlayer1.playerTurnScore += roll;
          $('.turnPoints1').text(newPlayer1.playerTurnScore);
        }
      });

      $('form#game_form1').submit(function(event){
        event.preventDefault();
        newPlayer1.playerTotalScore += newPlayer1.playerTurnScore;
        $('.totalPoints1').text(newPlayer1.playerTotalScore);
        newPlayer1.playerTurnScore = 0;
        $('.turnPoints1').text(newPlayer1.playerTurnScore);
        $('ul#players-on-team-1').hide()
        $('ul#players-on-team-2').show()
      });
    });

    $('.player2_info').click(function(){
      $('ul#players-on-team-1').hide();

      $('#players-on-team-2').append('<form id="game_form2">' +
      '<p>You Rolled A: <span class="lastRoll2"></span></p>' +
      '<p>Turn Points: <span class="turnPoints2"></span></p>' +
      '<p>Total Points: <span class="totalPoints2"></span></p>' +
      '<button class="btn btn-primary" id="roll_dice2">Roll The Dice</button>' +
      '<button type="submit" class="btn">Hold</button>' +
      '</form>');

      $("button#roll_dice2").click(function(event) {
        event.preventDefault();
        var roll = rollDice(1,6);
        $('.lastRoll2').text(roll);
        if (roll === 1){
          newPlayer2.playerTurnScore = 0;
          alert("You have rolled a 1, no points this turn and it is the next player's turn!")
          $('form#game_form2').submit();
        }else{
          newPlayer2.playerTurnScore += roll;
          $('.turnPoints2').text(newPlayer2.playerTurnScore);
        }
      });

      $('form#game_form2').submit(function(event){
        event.preventDefault();
        newPlayer2.playerTotalScore += newPlayer2.playerTurnScore;
        $('.totalPoints2').text(newPlayer2.playerTotalScore);
        newPlayer2.playerTurnScore = 0;
        $('.turnPoints2').text(newPlayer2.playerTurnScore);
        $('ul#players-on-team-2').hide()
        $('ul#players-on-team-1').show()
      });
    });
  });
});
