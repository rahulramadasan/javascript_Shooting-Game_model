
var player1Health = 100;
var player2Health = 100;

let roundCounter = 0;

let player1Score = 0;
let player2Score = 0;

function shootBtn() {

    //getting random numbers
    var player1shoot = Math.floor(Math.random() * 5);
    var player2shoot = Math.floor(Math.random() * 5);

    console.log("Player 1 shoot : " + player1shoot);
    console.log("Player 2 shoot : " + player2shoot);

    //calculating players health 
    player1Health = player1Health - player2shoot;
    player2Health = player2Health - player1shoot;

    console.log("Player 1 Health : " + player1Health);
    console.log("Player 2 Health : " + player2Health)

    //counting number of rounds left
    roundCounter++;
    console.log(roundCounter)

    // checking players health
    if (player1Health == 0) {
        document.getElementById("result1").innerHTML = "Player2 Won the match!";

    }
    if (player2Health == 0) {
        document.getElementById("result1").innerHTML = "Player1 Won the match!";

    }

    //disable shoot button after 5 rounds 
    if (roundCounter == 5) {
        document.getElementById("ShootBtn").disabled = true;
        
    }

    //finding the winner of individual rounds 
    if (player1shoot > player2shoot) {
        player1Score = player1Score + 1;
    }
    if (player2shoot > player1shoot) {
        player2Score = player2Score + 1;

    }

    console.warn("Player1 Won the match!:" + player1Score)
    console.warn("Player2 Won the match!:" + player2Score)
    document.getElementById("player1").innerHTML = player1Score;
    document.getElementById("player2").innerHTML = player2Score;


    //checking if anyone of the player has scored 3
    if (player1Score == 3) {
        gameOver("Player1 Won the match!")
    }
    if (player2Score == 3) {
        gameOver("Player2 Won the match!")
    }


    //checking which player has scored more after completing 5 rounds
    if (roundCounter == 5) {
        if (player1Score > player2Score) {
            gameOver("Player1 Won the match! ")
        }
        if (player2Score > player1Score) {
            gameOver("Player2 Won the match!")
        }
        if (player2Score == player1Score) {
            gameOver("Match Draw!")
        }
    }
    
}

function gameOver(playercomment) {
    document.getElementById("result1").innerHTML = playercomment;
    document.getElementById("ShootBtn").disabled = true;
}
