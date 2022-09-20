/* Imports */

/* Get DOM Elements */
const addGoblinForm = document.getElementById('goblin-name');

/* State */

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

const goblinTypes = [
    drunkard,
    drunkard,
    drunkard,
    brawler,
    brawler,
    brawler,
    brawler,
    cyclops,
    cyclops,
    cyclops,
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
/* Events */
addGoblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addGoblin = new FormData(addGoblinForm);
    const goblinType = getRandomItem(goblinTypes);
    const goblin = {
        name: FormData.get('name'),
        type: goblinType.type,
        hp: goblinType.hp,
    };
    goblin.push(goblin);

    result = `${goblin.name} The ${goblin.Type} has arrived`;

    displayGoblins();
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
// (don't forget to call any display functions you want to run on page load!)
