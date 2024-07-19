let userScore=0;
let compScore=0;
let move = document.querySelector("#msg");
let userSc = document.querySelector("#user-score");
let compSc = document.querySelector("#comp-score");
//Draw Game
const drawGame = () => {
    
    move.innerText = "Game was Draw! Play again."
    msg.style.backgroundColor = "#081b31";

}
//winner
const winner = (userWin)=>{
    
    if(userWin===true){
        move.innerText = "WON! User won the Game.";
        msg.style.backgroundColor = "Green";
        userScore++;
        userSc.innerText = userScore;

    }
    else{
        move.innerText = "LOSS! User lose the Game.";
        msg.style.backgroundColor = "Red";
        compScore++;
        compSc.innerText = compScore;

    }
    console.log(move);
    


}
//Generate Computer Choice
const genCompChoice = () => {
   const options = ["Rock", "Paper", "Scissors"];
   const ranIdx = Math.floor(Math.random() * 3); //floor to avoid decimal values and random for random numbers under 10
   return options[ranIdx];
};

//After user choice Game will start 
const playGame = (userChoice)=> {
    console.log("User Choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    //Fight
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        
        let userWin = true;
        if(userChoice === "Rock"){
            //comp choices = Scissors, paper
            userWin = compChoice === "Paper" ? false : true;

        }
        else if(userChoice === "Paper"){
            //comp choices = Rock, Scissors
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{//scissors
            //comp choices = Rock, paper
            userWin = compChoice === "Rock" ? false : true;

            
        }
        winner(userWin);
    }
    


};

//User Choice
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //Game starts now
        playGame(userChoice);
    });
});





