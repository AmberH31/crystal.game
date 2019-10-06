$(document).ready(function() {
  var guessNum = Math.floor(Math.random() * 102) + 19;
  console.log("Random Number : " + guessNum);
  $(".totalScore").html(guessNum);
});

var gemOne = Math.floor(Math.random() * 12) + 1;
// console.log(gemOne);
$("#gem1").attr("data-val", gemOne);

var gemTwo = Math.floor(Math.random() * 12) + 1;
// console.log(gemTwo);
$("#gem1").attr("data-val", gemTwo);

var gemThree = Math.floor(Math.random() * 12) + 1;
// console.log(gemThree);
$("#gem1").attr("data-val", gemThree);

var gemFour = Math.floor(Math.random() * 12) + 1;
// console.log(gemFour);
$("#gem1").attr("data-val", gemFour);

var wins = 0;
var score = 0;
var losses = 0;

function reset() {
    
    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        
        }else if(newScore > compPick) {
            losses++ ; 
            $(".losses").html("Losses: " + losses); 
                console.log("Losses: " + losses); 
                reset(); 
            
        }
    }
