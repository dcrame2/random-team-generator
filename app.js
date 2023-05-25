let buttonClickCount = 0;

function generateTeam() {
    const nameContainers = document.getElementsByClassName('name-container');
    const remainingElements = [...nameContainers].filter(container => !container.classList.contains('team-fall'));

    if (remainingElements.length < 2) {
        const lastRemainingElement = remainingElements[0];
        const randomTeamNumber = getRandomNumber(1, 4);
        lastRemainingElement.classList.add(`team-${randomTeamNumber}-fall`);
        lastRemainingElement.classList.add('team-fall');
    } else {
        const randomIndexes = getRandomIndexes(remainingElements.length, 2);
        const randomTeamNumber = ++buttonClickCount;

        randomIndexes.forEach(index => {
            const randomElement = remainingElements[index];
            randomElement.classList.add(`team-${randomTeamNumber}-fall`);
            randomElement.classList.add('team-fall');
        });
    }
}

function getRandomIndexes(max, count) {
    const indexes = new Set();
    while (indexes.size < count) {
        const randomIndex = Math.floor(Math.random() * max);
        indexes.add(randomIndex);
    }
    return Array.from(indexes);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
