let playerName = prompt("Enter your name: ");
while (playerName === ''){
    playerName = prompt("Enter your name: ");
}
playerName = playerName.toUpperCase();

let numberEl = document.getElementById("num-el");
let buttonEl = document.getElementById("button-el");
let outputEl = document.getElementById("output-el");
let stageEl = document.getElementById("stage-el");
let instructionsEl = document.getElementById("instructions-el");
let userName = document.getElementById("player-el");
let scoreEl = document.getElementById("score-el");

userName.innerHTML = "PLAYER: <br>" + playerName;

let stage = 2;
let level = 1;
let score = 5;
scoreEl.innerHTML = "SCORE: <br>" + score;
stageEl.innerHTML = "STAGE: <br>"+level;



function playGame(range) {
    range = stage
    let output = numberEl.value;

    if (output === ""){
        outputEl.textContent = "Enter a number";
    } else {
        let str = '';
        output = Number(output);
        // let stagesEl = level;
        let randomNum = Math.floor((Math.random()*range) + 1);
        if (output === randomNum){
            str = "Congratulations! You have qualified for stage:  ";
            level += 1;
            stageEl.innerHTML = "STAGE: <br>" + level;
            outputEl.textContent = str + level;
            range += 1;
            score = score + 5;
            scoreEl.innerHTML = "SCORE: <br>" + score;
            instructionsEl.textContent = "Pick a number from 1 to " + range;
        } else if (output < randomNum){
            str = "You guessed wrong. Your answer is lesser. You are still in stage: ";
            stageEl.innerHTML = "STAGE: <br>" + level;
            outputEl.textContent = str + level;
            range = range;
            score = score - 2;
            scoreEl.innerHTML = "SCORE: <br>" + score;
            instructionsEl.textContent = "Pick a number from 1 to " + range;
        } else {
            str = "You guessed wrong. Your answer is greater. You are still in stage: ";
            stageEl.innerHTML = "STAGE: <br>" + level;
            outputEl.textContent = str + level;
            range = range;
            score = score - 2;
            scoreEl.innerHTML = "SCORE: <br>" + score;
            instructionsEl.textContent = "Pick a number from 1 to " + range;
        }  
    
}
}











// // let userName = prompt("Enter your name: ");
// // while (userName == ""){
// //     userName = prompt("Enter your name: ");
// // }
// let stageEL = document.getElementById("stageEL");
// stageEL.textContent = 1;

// let userDetailsEl = document.getElementById("userDetailsEl");
// userDetailsEl.textContent = `"Player:<br>"` + userName;

// let statusEl = document.getElementById("stageEL");
// // let numberEl = document.getElementById("numberEl").value;


// //creating a game
// //a function that generates a range of numbers per stage
// //stage 1 is range 1 -2
// //stage 2 is range 1-3


// function getValue(){
//     let mynum = document.getElementById("numberEl").value;
//     return Number(mynum);
// }

// let josin = getValue();
// console.log(josin);

// // function startGame() {
// //     numberEl = numberEl.value;
// //     // while (statusEl != "Congratulations! Level Won"){
// //     //     numberEl = guessNumber;
// //     // }
// // }

// // function numGenerator() {
// //     let randomNum = Math.floor(Math.random*2);
// //     if (getValue() == randomNum){
// //         console.log("congrats! you won");
// //     } else {
// //         console.log("Wrong guess! Try again!");
// //     }
// // }

// // function playGame() {
// //     if (statusEl === 1){
// //         let ranNum = Math.floor(Math.random) + 1;
// //     }
// // }
// // numberEl = numberEl.value;
