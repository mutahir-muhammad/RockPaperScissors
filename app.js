const showPlayer = document.getElementById("player");
const showComputer = document.getElementById("computer");
const showResult = document.getElementById("result");
const totalOptions = document.querySelectorAll(".options");
const restartBtn = document.getElementById("restart");

//Rock??Paper??Scissors??
const optionsArray = ["🪨","📃","✂️"];
let player;
let computer;

totalOptions.forEach((option) => option.addEventListener('click', (action) => {
    player = action.target.id;
    showPlayer.innerHTML = player;
    computerPlay();
    showWinnerOrLoser();
}))

function computerPlay(){
    let randomOption = Math.floor(Math.random()*optionsArray.length);
    computer = optionsArray[randomOption]
    showComputer.innerHTML = computer;
}

function showWinnerOrLoser(){
    if(computer === player){
        result = "🤝"
    }
    else if(computer === '🪨' && player === '📃'){
        result = "🎉"
    }
    else if(computer === '🪨' && player === '✂️'){
        result = "❌"
    }
    else if(computer === '📃' && player === '🪨'){
        result = "❌"
    }
    else if(computer === '📃' && player === '✂️'){
        result = "🎉"
    }
    else if(computer === '✂️' && player === '🪨'){
        result = "🎉"
    }
    else if(computer === '✂️' && player === '📃'){
        result = "❌"
    }
    showResult.innerHTML = result;
}
restartBtn.addEventListener('click',()=>{
    showPlayer.innerHTML = '';
    showComputer.innerHTML = '';
    showResult.innerHTML = '';
});
