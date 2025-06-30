let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//access score

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)  // 0-2 random number generate 
    return options[randIdx];
}

const drawGame = () =>{
    //console.log("Game was Draw.");
    msg.innerText = "Game was Draw.Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin,userChoice,compChoice)=>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You Win");
        msg.innerText = `You Win! 🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("Comp Win");
        msg.innerText = `You lose 😞${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    // msg.innerText = "Play Your Move";
}

// Actual Logic
const playGame = (userChoice) =>{
    // console.log("user Choice = ",userChoice);

    //generate computer choice
    const compChoice = getCompChoice();
    //console.log("Computer Choice = ",compChoice);


    //Draw condition
    if(userChoice === compChoice){
        drawGame();
    }
    else
    {
        let userWin = true;
        
        if(userChoice === "rock"){

            //comp : scisssor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            //comp : scisssor, rock
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //userchoice = scissors
            //comp : rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


// Reset Logic

const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    compScore = 0;
    userScore = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "black";
});