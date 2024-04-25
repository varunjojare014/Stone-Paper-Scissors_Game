let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg-container-msg");

let userPoints = document.querySelector("#user-score");
let compPoints = document.querySelector("#comp-score");

let rsBtn = document.querySelector("#rstDiv");

const drawGame =() => {
    msg.innerText = "Unfortunately! Game was draw!";
    msg.style.backgroundColor = "grey"
}

const showWinner =(userWin, compChoice) => {
    if(userWin) {
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText = `Congratulations..!! You win! Computer selected ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compPoints.innerText = compScore;
        msg.innerText = `Oh no..! You Lose! Computer selected ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"] 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const newUpdate = rsBtn.addEventListener ("click", () => {
    userScore = 0; 
    compScore = 0;
    userPoints.innerHTML = userScore;
    compPoints.innerHTML = compScore;
    msg.innerText = "Play your move..!";
    msg.style.backgroundColor = "aqua";
})
