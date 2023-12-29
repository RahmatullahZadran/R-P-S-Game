const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const round = document.getElementById('round');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const message = document.getElementById('message');

let userScoreValue = 0;
let computerScoreValue = 0;
let roundValue = 0;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.classList[0]; // Get the class of the clicked button
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // userChoiceDisplay.textContent = `Player: ${userChoice}`;
    // computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = result;

    if (result.includes('win')) {
      userScoreValue++;
    } else if (result.includes('lose')) {
      computerScoreValue++;
    }

    roundValue++;
    updateScores();
    round.textContent = `${roundValue}`;
  });
});

function getResult(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function updateScores() {
  userScore.textContent = `${userScoreValue}`;
  computerScore.textContent = `${computerScoreValue}`;
}
