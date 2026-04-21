//track the user and computer score
let userScore = 0;
let compScore = 0;

//access our choicces
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 //to generate computer choicce
const genCompChoice = () => {
    //lets generate random whole number for array
    const options = ["rock","paper","scissors"];   //array of numbers
    //Math.random()*3;    //becuz simple math.random gives 0.13something so we have to generate number between 0 and 2
    const randIdx = Math.floor(Math.random() * 3);    //it willl generate random index without the decimal
    return options[randIdx];   
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

//accesing the choices from the playgame funtion and displays the result
const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin) {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//after getting user choice game will start
const playGame = (userChoice) => {
    //generate computer choice

    const CompChoice = genCompChoice();
    if(userChoice === CompChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissorss,paper
            userWin = CompChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //scissor,rock
            userWin = CompChoice === "scissors" ? false :true;
        } else {
            //rock,paper
            userWin = CompChoice === "rock" ? false : true;
        }
        //passing all the choices of user,comp and winner to the winner function 
        showWinner(userWin,userChoice,CompChoice);
    }

};
//add event listner on all choices to get the id and then starts playing
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});