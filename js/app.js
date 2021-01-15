const cardsImage = [
    {
        id: 1,
        src: 'img/barbossa.jpg'
    },
    {
        id: 2,
        src: 'img/jack.jpg'
    },
    {
        id: 3,
        src: 'img/davy.jpg'
    },
    {
        id: 4,
        src: 'img/will.jpg'
    },
    {
        id: 5,
        src: 'img/elizabeth.jpg'
    },
    {
        id: 6,
        src: 'img/teach.jpg'
    }
];
//--------------------------------------------
const playArea = document.querySelector('#play-area');

//--------------------------------------------
function ShuffleArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        let k = Math.floor( Math.random() * arr.length);
        [arr[i], arr[k]] = [arr[k], arr[i]];
    }
	return arr;
}

function createCard(src) {
    return `
    <div class="card"> 
        <div class="flipper"> 
            <div class="front">
                <img src="${src}" class="image">
            </div>              
            <div class="back"></div>                
        </div>        
    </div>
`;
}

function addCardsToPlayArea(arr) {
    let cardsArr = arr.concat(arr);
    let cardsStr = '';

    ShuffleArr(cardsArr).forEach((item) => cardsStr += createCard(item['src']));
    playArea.innerHTML = cardsStr;
}

//--------------------------------------------
function clickCard({target}) {
    let clickTarget = target.closest('div.card')
    if (!clickTarget) return;
    clickTarget.classList.add('open');
}

function openCard() {
    playArea.addEventListener('click', clickCard);
}

//--------------------------------------------
function gameStart() {
    addCardsToPlayArea(cardsImage);
    openCard();
}

//--------------------------------------------
gameStart();
