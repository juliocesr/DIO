let order = [];
let clickOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementColor = createColorElement (order[i]);
        lightColor (elementColor, Number(i) + 1);
    }
}
let lightColor = (element, time) => {
    time *= 250;
    setTimeout(() => {
        element.classList.add('selected');
    }, time - 125);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

let checkOrder = () => {
    for(let i in clickOrder) {
        if (clickOrder != order[i]) {
            gameover();
            break;
        }
    }
    if (clickOrder.length == order.length) {
        alert(`Pontuação ${score}`);
        nextLevel();
    }
}
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    });
    checkOrder();
}
let createColorElement = (color) => {
    if (color == 0) {
        return blue;
    } else if (color == 1) {
        return yellow;
    } else if (color == 2) {
        return green;
    } else if (color == 3) {
        return red;
    }
}
let nextLevel = () => {
    score++;
    shuffleOrder();
}
let gameover = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o jogo, clique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];
    playgame();
}
let playgame = () => {
    alert('Clique em OK para iniciar o jogo');
    score = 0;
    nextLevel();
}
blue.onclick = () => click(0);
yellow.onclick = () => click(0);
green.onclick = () => click(0);
red.onclick = () => click(0);

