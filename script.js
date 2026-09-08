let userChoice=0;
let compChoice=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");


const genComChoice=()=>{
    let result=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return result[idx];

}
const drawGame=()=>{
    msg.innerText="Game Is Draw.Pay Again!";

    msg.style.backgroundColor=" rgb(183, 134, 10)";
}

const showWinner=(userWin)=>{
    if(userWin){
        userChoice++;
        userScore.innerText=userChoice;
        msg.innerText="Congratulation! You Wins🥳";
        msg.style.backgroundColor="green";
        
    }else{
         compChoice++;
        compScore.innerText=compChoice;
        msg.innerText="You Lost!😢";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    let compChoice=genComChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="rock"?true:false;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;

        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
