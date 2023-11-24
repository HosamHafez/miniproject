// Fetch play ideas from JSON file
fetch('playideas.json')
    .then(response => response.json())
    .then(data => {
        playIdeas = data;
    })
    .catch(error => console.error('Error fetching play ideas:', error));

let playIdeas = [];
let currentPlayIdeaIndex = -1;

function displayRandomPlayIdea() {
    const playIdeaElement = document.getElementById('playIdea');
    const playIdeaImage = document.getElementById('playIdeaImage');

    if (playIdeas.length > 0) {

        const randomIndex = getRandomIndex(playIdeas.length);
        currentPlayIdeaIndex = randomIndex;
        

        playIdeaElement.textContent = playIdeas[randomIndex].name;
        

        playIdeaImage.src = playIdeas[randomIndex].image;
        playIdeaImage.alt = playIdeas[randomIndex].name;
    } else {
        playIdeaElement.textContent = "No play ideas available.";
        playIdeaImage.src = "";
        playIdeaImage.alt = "";
    }
}

function getNewPlayIdea() {
    if (playIdeas.length > 0) {
        let newIndex;
        do {
            newIndex = getRandomIndex(playIdeas.length);
        } while (newIndex === currentPlayIdeaIndex);
        
        currentPlayIdeaIndex = newIndex;

        displayRandomPlayIdea();
    } else {
        alert("No play ideas available.");
    }
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
