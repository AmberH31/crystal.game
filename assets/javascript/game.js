// global var
//遊戲開始，初始寶石值、產生matchNum，初始totalScore
//click寶石，值加在totalScore
//比較三種情況，少於 等於 大於

var stoneCollection = {
  gem1: {
    name: "Pink",
    value: 0
  },
  gem2: {
    name: "Purple",
    value: 0
  },
  gem3: {
    name: "Blue",
    value: 0
  },
  gem4: {
    name: "Red",
    value: 0
  }
};
var matchNum;
var totalScore = 0;
var numWins = 0;
var numLosses = 0;

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  matchNum = randomNum(19, 120);
  console.log(matchNum);
  totalScore = 0;
  $(".totalScore").text(matchNum);
  $(".totalDisplay").text(totalScore);
  $(".wins").text(numWins);
  $(".losses").text(numLosses);

  console.log(
    "inside startGAme: " + numLosses + "inside start GAme wins" + numWins
  );

  //   for (i = 0; i < 4; i++) {
  //     gemValue = stoneCollection[i] = randomNum(1, 12);
  //    console.log("gemvalue :" + gemValue);
  //   }
  gem1.value = randomNum(1, 12);
  gem2.value = randomNum(1, 12);
  gem3.value = randomNum(1, 12);
  gem4.value = randomNum(1, 12);
}

$("#gem1").click(function() {
  //   alert("test");
  totalScore = gem1.value + totalScore;
  console.log("gem1:" + totalScore);
  checker();
});
$("#gem2").click(function() {
  totalScore = gem2.value + totalScore;
  console.log("gem2:" + totalScore);
  checker();
});
$("#gem3").click(function() {
  totalScore = gem3.value + totalScore;
  console.log("gem3:" + totalScore);
  checker();
});
$("#gem4").click(function() {
  totalScore = gem4.value + totalScore;
  console.log("gem4:" + totalScore);
  checker();
});

startGame();

function checker() {
  if (totalScore === matchNum) {
    numWins++;
    startGame();
  } else if (totalScore > matchNum) {
    numLosses++;
    startGame();
    console.log(
      "inside checker: " + numLosses + "inside checker wins" + numWins
    );
  } else {
    console.log("still in the round");
  }
  $(".totalDisplay").html(totalScore);
  //   $(".wins").html(numWins);
  //   $(".losses").html(numLosses);
}

// document.getElementById("again").onclick = function() {
//   startGame();
// };
// ---------------------------------------------------

// function setup() {
// //   var randomNum = function(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// //   };
// //   matchNum = randomNum(19, 120);
//   //   console.log(matchNum);

//   var gemOne = Math.floor(Math.random() * 12) + 1;
//   console.log(gemOne);
//   $("#gem1").text;
//   //   $("#gem1").attr("data-val", randomNum(1, 12));

//   // var gemTwo = Math.floor(Math.random() * 12) + 1;
//   // console.log(gemTwo);
//   $("#gem2").attr("data-val", randomNum(1, 12));

//   // var gemThree = Math.floor(Math.random() * 12) + 1;
//   // console.log(gemThree);
//   $("#gem3").attr("data-val", randomNum(1, 12));

//   // var gemFour = Math.floor(Math.random() * 12) + 1;
//   // console.log(gemFour);
//   $("#gem4").attr("data-val", randomNum(1, 12));

//   updateScreen();
// }

// function updateScreen() {
//   $(".totalScore").text(matchNum);
//   $(".totalDisplay").text(totalScore);
//   $(".wins").text(numWins);
//   $(".losses").text(numLosses);
// }

// function isWinner() {
//   if (matchNum === totalScore) {
//     numWins++;
//   }
// }

// function isLosses() {
//   if (matchNum > totalScore) {
//     numLosses++;
//   }
// }

// $(".again").on("click", function() {
//   keyClick = $(this).attr("data-val");
//   totalScore += parseInt(keyClick);
//   updateScreen();
//   isWinner();
//   isLosses();
// });

// setup();
// updateScreen();
