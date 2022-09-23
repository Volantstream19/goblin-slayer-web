/* Imports */
import { getRandomItem, getRandomNumber } from './utils.js';
/* Get DOM Elements */
const playerHp = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');
/* State */
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
/* Events */

function displayPlayer() {
    playerHp.textContent = Math.max(0, player.hp);
    if (player.hp < 1) {
        playerImage.src = 'assets/deadPekka.png';
    } else {
        playerImage.src = 'assets/miniPekka.png';
    }
}
// (don't forget to call any display functions you want to run on page load!)
// testing
displayPlayer();
