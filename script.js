const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

let seconds = 0,
    minutes = 0;

let movesCount = 0,
    winCount = 0;

const timerGenerator = () => {
    seconds += 1;

    if(seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span> ${minutesValue}:${secondsValue}`;
}

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
}

const generateRandom = (size = 4) => {
    let temporaryArray = [...items];
    let cardValues = [];
    // The size should be double (4*4 matrix)/2 sice pairs of objects would exist
    size = (size * size) / 2;

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * temporaryArray.length);
        // list of cards
        cardValues.push(temporaryArray[randomIndex]);

        // Once selected remove the object from temporaryArray
        temporaryArray.splice(randomIndex, 1);
    }

    return cardValues;
}

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];

    shuffle(cardValues);

    for (let i = 0; i < size * size; i++) {
        gameContainer.innerHTML += `
            <div class="card-container" data-card-value="${cardValues[i].name}">
                <div class="card-before">?</div>
                <div class="card-after">
                    <img src="${cardValues[i].image}" class="image">
                </div>
            </div>
        `
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

    cards = document.querySelectorAll(".card-container")
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                flip(card);
                
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute ("data-card-value");
                } else {
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
    
                   let delay = setTimeout(() => {
                        if (firstCardValue == secondCardValue) {
                            firstCard.classList.add("matched");
                            secondCard.classList.add("matched");
        
                            firstCard =  false;
        
                            winCount += 1;
        
                            if (winCount == Math.floor(cardValues.length / 2)) {
                                result.innerHTML = `<h2>You won</h2>
                                <h4>Moves: ${movesCount}</h4>`;
                                stopGame()
                            }     
                        } else {
                            toOriginalPositionFlip(firstCard);
                            toOriginalPositionFlip(secondCard);
                            firstCard = false;
                            secondCard = false;
                        }
                    }, 400)
                }
            } 
        })
    })

}

startButton.addEventListener("click", () => {
    movesCount = 0;
    time = 0;
    seconds = 0;
    minutes = 0,

    hide(controls);
    show(stopButton);
    hide(startButton);

    interval = setInterval(timerGenerator, 1000);
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
    initializer();
})

stopButton.addEventListener(
    "click",
    (stopGame = () => {
        show(controls);
        hide(stopButton);
        show(startButton);
        clearInterval(interval);
    })
  );

const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
}