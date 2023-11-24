// Fetch play ideas from JSON file
fetch('playideas.json')
    .then(response => response.json())
    .then(data => {
        playIdeas = data;
    })
    .catch(error => console.error('Error fetching play ideas:', error));

let playIdeas = [];
let currentPlayIdeaIndex = -1;
let isFirstLoad = true;

function displayPlayIdea(index) {
    const playIdeaElement = document.getElementById('playIdea');
    const playIdeaImage = document.getElementById('playIdeaImage');


    playIdeaElement.textContent = playIdeas[index].name;


    playIdeaImage.src = playIdeas[index].image;
    playIdeaImage.alt = playIdeas[index].name;
    playIdeaImage.style.display = 'block';
}

function displayRandomPlayIdea() {
    if (playIdeas.length > 0) {

        const randomIndex = getRandomIndex(playIdeas.length);
        currentPlayIdeaIndex = randomIndex;


        if (!isFirstLoad) {
            displayPlayIdea(randomIndex);
        }

        isFirstLoad = false;
    } else {
        alert("No play ideas available.");
    }
}

function getNewPlayIdea() {
    if (playIdeas.length > 0) {

        let newIndex;
        do {
            newIndex = getRandomIndex(playIdeas.length);
        } while (newIndex === currentPlayIdeaIndex);
        
        currentPlayIdeaIndex = newIndex;


        displayPlayIdea(newIndex);
    } else {
        alert("No play ideas available.");
    }
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
