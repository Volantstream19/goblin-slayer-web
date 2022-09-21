/* Imports */

/* Get DOM Elements */
const addGoblinForm = document.getElementById('goblin-name');
const resultDisplay = document.getElementById('goblin-name');
/* State */
let result = '';
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
addGoblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(addGoblinForm);
    const goblinName = data.get('name');
    const goblinType = getRandomItem(goblinTypes);
    const newGoblin = {
        name: goblinName,
        type: goblinType.type,
        hp: goblinType.hp,
    };
    goblins.push(newGoblin);

    console.log(goblins);
    result = `${goblins.name} The ${goblins.Type} has arrived`;

    displayResult();

    addGoblinForm.reset();
});
/* Display Functions */
function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function displayResult() {
    resultDisplay.textContent = result;
}

// (don't forget to call any display functions you want to run on page load!)
