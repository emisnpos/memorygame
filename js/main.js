document.addEventListener('DOMContentLoaded', () => {

    const albumCovers = [
        {
            name: 'album_1',
            img: 'img/album_1.png'
        },
        {
            name: 'album_2',
            img: 'img/album_2.png'
        },
        {
            name: 'album_3',
            img: 'img/album_3.png'
        },
        {
            name: 'album_4',
            img: 'img/album_4.png'
        },
        {
            name: 'album_5',
            img: 'img/album_5.png'
        },
        {
            name: 'album_6',
            img: 'img/album_6.png'
        },
        {
            name: 'album_7',
            img: 'img/album_7.png'
        },
        {
            name: 'album_8',
            img: 'img/album_8.png'
        },
        {
            name: 'album_9',
            img: 'img/album_9.png'
        },
        {
            name: 'album_1',
            img: 'img/album_1.png'
        },
        {
            name: 'album_2',
            img: 'img/album_2.png'
        },
        {
            name: 'album_3',
            img: 'img/album_3.png'
        },
        {
            name: 'album_4',
            img: 'img/album_4.png'
        },
        {
            name: 'album_5',
            img: 'img/album_5.png'
        },
        {
            name: 'album_6',
            img: 'img/album_6.png'
        },
        {
            name: 'album_7',
            img: 'img/album_7.png'
        },
        {
            name: 'album_8',
            img: 'img/album_8.png'
        },
        {
            name: 'album_9',
            img: 'img/album_9.png'
        },
    ]

    albumCovers.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard(){
        for (let i = 0; i < albumCovers.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //cehck for matches
    function checkForMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        //resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === albumCovers.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(albumCovers[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', albumCovers[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()





})