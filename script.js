// Fetch play ideas from JSON file
fetch('playideas.json')
    .then(response => response.json())
    .then(data => {
        playIdeas = data;
        displayRandomPlayIdea();
    })
    .catch(error => console.error('Error fetching play ideas:', error));

let playIdeas = [];
let currentPlayIdeaIndex = -1;

function displayRandomPlayIdea() {
    const playIdeaElement = document.getElementById('playIdea');
    const playIdeaImage = document.getElementById('playIdeaImage');
    
    // Randomly select a play idea
    const randomIndex = getRandomIndex(playIdeas.length);
    currentPlayIdeaIndex = randomIndex;
    
    // Display the play idea text
    playIdeaElement.textContent = playIdeas[randomIndex].name;
    
    // Display the play idea image
    playIdeaImage.src = playIdeas[randomIndex].image;
    playIdeaImage.alt = playIdeas[randomIndex].name;
}

function getNewPlayIdea() {
    // Avoid showing the same play idea consecutively
    let newIndex;
    do {
        newIndex = getRandomIndex(playIdeas.length);
    } while (newIndex === currentPlayIdeaIndex);
    
    currentPlayIdeaIndex = newIndex;

    displayRandomPlayIdea();
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
