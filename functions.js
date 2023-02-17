function show (element) {
    element.classList.remove("hide");
}

function hide (element) {
    element.classList.add("hide");
}

function shuffleCards (cards) {
    cards.sort(() => Math.random() - 0.5);
}