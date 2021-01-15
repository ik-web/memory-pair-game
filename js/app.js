const cardsImage = [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'blue'
    },
    {
        id: 3,
        color: 'green'
    },
    {
        id: 4,
        color: 'yellow'
    },
    {
        id: 5,
        color: 'cyan'
    },
    {
        id: 6,
        color: 'orange'
    }
];

//--------------------------------------------

function ShuffleArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        let k = Math.floor( Math.random() * arr.length);
        [arr[i], arr[k]] = [arr[k], arr[i]];
    }
	return arr;
}

//--------------------------------------------
