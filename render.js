export function renderGoblin(goblin) {
    const li = document.createElement('li');
    li.classList.add('goblin-list');

    const goblinName = document.createElement('span');
    goblinName.textContent = goblin.name;
    goblinName.classList.add('name');

    const hp = document.createElement('span');
    hp.textContent = goblin.hp;
    hp.classList.add('hp');

    const goblinImage = document.createElement('img');
    if (goblin.hp < 1) {
        goblinImage.src = `assets/tombstone.png`;
    } else {
        goblinImage.src = `assets/goblin.png`;
    }
    li.append(hp, goblinImage, goblinName);
}
