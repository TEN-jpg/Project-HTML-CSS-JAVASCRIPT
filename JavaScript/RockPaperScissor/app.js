let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");   
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        console.log("you lose");
        msg.style.backgroundColor = "red";
    }
};

const draw = () => {
    msg.innerText = "DRAW. Play Again!";
    msg.style.backgroundColor = "#4E5166";
};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice){
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; 
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true ; 
        }
        showWinner(userWin, userChoice, compChoice)
      }
    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice );
    });
});