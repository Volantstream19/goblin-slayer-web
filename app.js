/* Imports */
import { getRandomItem } from './utils.js';
import { renderGoblin } from './render.js';
/* Get DOM Elements */
const playerHp = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');
const resultDisplay = document.getElementById('Result');
const scoreboard = document.getElementById('Scoreboard');
const goblinDisplay = document.getElementById('goblin-list');
const addGoblinForm = document.getElementById('add-goblin-form');
const removeButton = document.getElementById('remove-button');
/* State */
let defeated = 0;
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

const playerMoves = [1, 1, 1, 1, 0, 0, 2, 2, 4, 4, 4];
const goblinMoves = [1, 1, 1, 1, 2, 2, 2, 4, 5];
/* Events */
function displayPlayer() {
    playerHp.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        playerImage.src = 'assets/deadPekka.png';
    } else {
        playerImage.src = 'assets/miniPekka.png';
    }
}

addGoblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addGoblinForm);
    const newGoblinTypes = getRandomItem(goblinTypes);

    const goblin = {
        name: formData.get('name'),
        type: newGoblinTypes.type,
        hp: newGoblinTypes.hp,
    };
    goblins.push(goblin);

    result = `${goblin.name} the ${goblin.type} has arrived`;
    displayGoblin();
    displayResult();
});

removeButton.addEventListener('click', () => {
    const aliveGoblins = [];

    for (const goblin of goblins) {
        if (goblin.hp > 0) {
            aliveGoblins.push(goblin);
        }
    }
    goblins = aliveGoblins;
    displayGoblin();
});

function displayResult() {
    resultDisplay.textContent = result;
}

function displayScoreboard() {
    scoreboard.textContent = `You have killed ${defeated} goblins.`;
}

function displayGoblin() {
    goblinDisplay.innerHTML = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinDisplay.append(goblinEl);

        goblinEl.addEventListener('click', () => {
            if (goblin.hp < 1) {
                result = `C'mon man he's already dead.`;
                displayResult();
                return;
            }

            const playerMove = getRandomItem(playerMoves);
            const goblinMove = getRandomItem(goblinMoves);

            player.hp = Math.max(0, player.hp - goblinMove);
            goblin.hp = Math.max(0, goblin.hp - playerMove);
            result = '';

            if (goblinMove === 0) {
                result += `${goblin.name} has missed. `;
            } else {
                result += `${goblin.name} has hit you and did ${goblinMove} hitpoints. |  `;
            }

            if (playerMove === 0) {
                result += `Wow you actually missed. `;
            } else {
                result += `You've hit ${goblin.name} and did ${playerMove} in damage. `;
            }

            if (goblin.hp < 1) {
                defeated++;
                displayScoreboard();
            }
            displayPlayer();
            displayResult();
            displayGoblin();
        });
    }
}
// (don't forget to call any display functions you want to run on page load!)
// testing
displayPlayer();
displayGoblin();
