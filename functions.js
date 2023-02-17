function show (element) {
    element.classList.remove("hide");
}

function hide (element) {
    element.classList.add("hide");
}

function shuffle (cards) {
    cards.sort(() => Math.random() - 0.5);
}

function flip (card) {
    card.classList.add("flipped");
}

function toOriginalPositionFlip (card) {
    card.classList.remove("flipped");

}