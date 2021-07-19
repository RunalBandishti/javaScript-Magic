const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'; 
const DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';

let gameIsRunning = false;

const getPlayerChoice = function (){
    const selection = prompt('Rock,Paper or Scissors ?','').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS)
    {
        alert('Please make a valid choice!So,we choose Rock for you,Bye!');
        return ROCK;
    }
    return selection;
};

const getComputerChoice = function(){
    const randomChoice =Math.random();
    if(randomChoice < 0.34){
        return ROCK;
    }else if(randomChoice < 0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
};

//Arrow Function
const determineWinner =(cChoice,pChoice) => {
    return cChoice === pChoice ? DRAW 
            :(cChoice === ROCK && pChoice === PAPER || 
            cChoice === PAPER && pChoice === SCISSORS || 
            cChoice === SCISSORS && pChoice === ROCK) 
             ? RESULT_PLAYER_WIN 
             : RESULT_COMPUTER_WIN;

//     if (cChoice === pChoice){
//         return DRAW ;
//     }else if (cChoice === ROCK && pChoice === PAPER || 
//             cChoice === PAPER && pChoice === SCISSORS || 
//             cChoice === SCISSORS && pChoice === ROCK)
//             {
//                 return RESULT_PLAYER_WIN;
//             }else{
//                 return RESULT_COMPUTER_WIN;
//             }
 }

startGameBtn.addEventListener('click', () =>{
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = determineWinner(computerChoice,playerSelection);
    let message = `You picked ${playerSelection}, computer picked ${computerChoice},therefore you`;
    if (winner === DRAW) {
        message = message +' had a draw';
    }else if(winner === RESULT_PLAYER_WIN){
        message = message +' won';
    }
    else{
        message = message +' lost';
    }
    alert(message);
    gameIsRunning=false;
});