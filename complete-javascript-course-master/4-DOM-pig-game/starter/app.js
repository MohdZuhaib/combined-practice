/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice; // it will select the score element and replace  its value with dice value

//-- To add some html or css to text content we use .innerHtml-- //

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //To write HTML weve to use '' as in string otherwise parser wont ghet it




document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        //  1. Random number

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;



        //  2. Display the result

        // var diceDOM = document.querySelector('.dice'); //So that we dont have to write it multiplke times 
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';



        //  3. Update the round score IF the rolled number wasn`t 1
        /*
        if (lastDice === 6 && dice1 === 6) { // Mistake correction
            // Player loses score
            scores[activePlayer] = 0;
            document.getElementById('#score-' + avtivePlayer).textContent = '0'; // Error
            nextPlayer();

        } */
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            dScore = dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // Next player
            nextPlayer();
        }

        lastDice = dice1;

        //  Previous mistake
        // if (dScore == dice == 6) {
        //     document.getElementById('score-' + avtivePlayer).textContent = '0';
        //     nextPlayer();
        // } 
    }

});


document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //  Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // Check if player won the game
        winningScore = document.getElementById('winScore').value

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    // document.querySelector('.dice').style.display = 'none'

    hideDice();
}

document.querySelector('.btn-new').addEventListener('click', init) // if we use () in init then it will call init immediately


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // document.querySelector('.dice').style.display = 'none';

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function hideDice() {

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}