var player1 = "X"
var player2 = "O"
var count = 0;

$(document).ready(function() {
  var grid = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];

  var gameOver = function(){
    for (i = 0; i < 3 ; i++){
      if (grid[i][0] != " " &&
      grid [i][0] == grid [i][1] &&
      grid [i][0] == grid [i][2]){
        return true
      }else if (grid[0][i] != " " &&
      grid [0][i] == grid [1][i] &&
      grid [0][i] == grid [2][i]){
        return true
      }else if(grid[0][0] != " " &&
       grid[0][0] == grid[1][1] &&
       grid[1][1] == grid[2][2]){
        return true
     }else if (grid[0][2] != " " &&
      grid[0][2] == grid[1][1] &&
      grid[1][1] == grid[2][0]){
        return true
    }
    }
  }
  var draw = function () {
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        if (grid[i][j] != " ") {
          return true;
        }
      }
    }
    alert("It's a Draw!")
  }

  $(".col").click(function(){
    var i = $(this).data("i");
    var j = $(this).data("j");



    if ((grid [i][j] == "X") || (grid [i][j] == "O")){
      alert("Please Pick Another Space!");
    }else if(count % 2 == 0){
    $(this).html(player1);
      grid[i][j] = player1;
      count++;
      if (gameOver() == true){
        alert("Player 1 Wins!")
      }
    }else{
    $(this).html(player2);
      grid[i][j] = player2;
      count++;
      if (gameOver() == true){
        alert("Player 2 Wins!")
      }
    }
    draw();
    // debugger;

    });


    $("#reset").click(function(){
      $(".col").html(" ");
      for(i=0;i<3;i++){
        for(j=0;j<3;j++){
        grid[i][j] = " ";
        }
      }
    });

  // $("#reset").click(function(){
  //   for(i=0;i<3;i++){
  //     grid[i][0] = " "
  //   }
  // });
});
