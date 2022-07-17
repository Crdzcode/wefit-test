function editMenu(){
    buttonGroup = document.getElementsByClassName("btn-group-vertical")[0];
    buttonGroup.classList.remove('btn-group-vertical');
    buttonGroup.classList.add('btn-group');

    menuButtons = Array.from(getMenuButtons());

    menuButtons.forEach(button => {
        button.classList.add('rounded');
        button.classList.add('mr-1');
    });
}

function editHeader(){
    header = document.getElementsByClassName("jumbotron")[0];
    header.classList.add('bg-secondary');
    header.classList.add('text-right');
    header.classList.add('text-white');

    button = document.getElementsByClassName("btn btn-primary btn-lg")[0]; 
    button.classList.add('bg-success');
    button.classList.add('border-0');
}

function editCards(){
    cardsRow = getCardsRow();
    cards = Array.from(getCards(cardsRow));

    cards.forEach(card => {
        card.remove();
    });

    cards = sortCards(cards);

    animalsCard = cards[1];

    animalsCardButton = animalsCard.getElementsByClassName("btn btn-primary")[0];

    animalsCardButton.classList.add('bg-success');
    animalsCardButton.classList.add('border-0');

    cards.forEach(card => {
        cardsRow.appendChild(card);
    });

}

function editList(){
    list = document.getElementsByClassName("list-group")[0];

    firstItem = list.firstElementChild;
    firstItem.classList.remove('active');

    fourthItem = document.createElement('li');
    fourthItem.classList.add('list-group-item');
    fourthItem.classList.add('active');
    fourthItem.innerHTML = "Quarto item";

    fifthItem = document.createElement('li');
    fifthItem.classList.add('list-group-item');
    fifthItem.innerHTML = "Quinto item";

    list.appendChild(fourthItem);
    list.appendChild(fifthItem);

}

window.onload = function init(){
    editMenu();
    editHeader();
    editCards();
    editList();
}

function getMenuButtons(){
    return document.getElementsByClassName("btn btn-secondary");
}

function getCardsRow(){
    return document.getElementsByClassName("row")[2];
}

function getCards(cardsRow){
    return cardsRow.getElementsByClassName('col-lg-3');
}

function sortCards(cards){
    return [cards[3], cards[0], cards[2], cards[1]];
}