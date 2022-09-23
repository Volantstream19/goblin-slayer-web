/* Imports */
import { getRandomItem, getRandomNumber } from './utils.js';
import { renderGoblin } from './render.js';
/* Get DOM Elements */
const playerHp = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');
const result = document.getElementById('Result');
const scoreboard = document.getElementById('Scoreboard');
const goblinDisplay = document.getElementById('goblin-list');
/* State */
let result = '';
let player = {
    type: 'pekka',
    hp: 10,
};
let goblins = [
    {
        name: 'John',
        type: 'brawler',
        hp: 5,
    },
    {
        name: 'Steven',
        type: 'drunkard',
        hp: 10,
    },
    {
        name: 'Nathan',
        type: 'cyclops',
        hp: 4,
    },
];

const brawler = {
    type: 'brawler',
    hp: 5,
};
const drunkard = {
    type: 'drunkard',
    hp: 10,
};

const cyclops = {
    type: 'cyclops',
    hp: 4,
};

const goblinTypes = [
    drunkard,
    drunkard,
    drunkard,
    brawler,
    brawler,
    brawler,
    cyclops,
    cyclops,
    cyclops,
];

const playerMoves = [0, 1, 1, 2, 2, 2, 2, 4, 4, 4, 5, 5, 10];
const goblinMoves = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 10]
/* Events */
function displayPlayer() {
    playerHp.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        playerImage.src = 'assets/deadPekka.png';
    } else {
        playerImage.src = 'assets/miniPekka.png';
    }
}

function displayResult() {
    result.textContent = result;
}

function displayScoreboard() {
    scoreboard.textContent = `You have killed ${defeated} goblins.`;
}

function displayGoblin(); {
    goblinDisplay.innerHTML = '';

    for (const goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        goblinDisplay.append(goblinEl);
        
//         const playerMove = getRandomItem(playerMoves)
//         const goblinMove = getRandomItem(goblinMoves)
        
//         goblinEl.addEventListener('click', () => {
//             if (goblin.hp < 1) {
//                 result = `C'mon man he's already dead.`;
//                 displayResult();
//             }
//         })
        
        
//     }
// }
// (don't forget to call any display functions you want to run on page load!)
// testing
displayPlayer();
displayResult();
displayScoreboard();
