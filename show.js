document.onselectstart = () => { return false };
document.ondragstart = () => { return false };

let startContainer = document.querySelector(".starter");
let bodyElement = document.querySelector("body");

let score = 0;
let scoreContainer = document.createElement('div');
scoreContainer.className = 'score';
scoreContainer.addEventListener('animationend', () => bodyElement.removeChild(scoreContainer));
let scoreTxt = document.createElement('p');
scoreTxt.innerHTML = 'Score: ';
let scoreNum = document.createElement('span');
scoreNum.innerHTML = score;
scoreContainer.appendChild(scoreTxt).appendChild(scoreNum);

let discoBall = document.createElement("img");
discoBall.setAttribute("src", "discoball.gif");
discoBall.setAttribute("width", "12%");

let warning = document.createElement('small');
warning.className = 'warning';
warning.innerHTML = '*The cats requires a song';
document.querySelector('form').appendChild(warning);

let song = document.createElement('audio');
song.addEventListener("ended", partyEnd);
document.querySelector('head').appendChild(song);

let fx = document.createElement('audio');
fx.id = 'effect';
fx.src = 'play/collect.mp3';
fx.volume = 0.15;



let timeUnit;
let counterTime;
let catsTime;
let partyhardTime;

let cicaSet;
let showSet;

function letTheShowBegin() {
    score = 0;
    let value = document.querySelector('select').value;
    if (value == 0) {
        warning.style.display = 'inline';
    } else {
        switch (value) {
            case '1':
                discoDiscoPartyParty(0, 417.5, 24 * 417.5, 29 * 417.5, 60 * 417.5, 'play/BadgersInSpace.mp3');
                break;
            case '2':
                discoDiscoPartyParty(14250, 450, 25650, 28500, 57000, 'play/MarchOfTheNucleotides.mp3');
                break;
            case '3':
                discoDiscoPartyParty(0, 415, 27 * 415, 35 * 415, 100 * 413, 'play/PuiPui3.mp3');
                break;
            case '4':
                discoDiscoPartyParty(1856, 460, 28 * 460, 36 * 460, 31000, 'play/Beavis.mp3');
        }
        startContainer.style.animationPlayState = "running";
        startContainer.addEventListener("animationend", () => {
            startContainer.style.display = "none"
            startContainer.removeChild(document.querySelector('button'));
            startContainer.removeChild(document.querySelector('form'));
        });
    }
}

function discoDiscoPartyParty(showTime, timeUnit, counterTime, catsTime, partyhardTime, source) {
    song.src = source;
    song.play();
    setTimeout(() => showSet = setInterval(lightShow, timeUnit * 2), showTime);
    setTimeout(() => countBack(timeUnit), counterTime)
    setTimeout(() => cicaSet = setInterval(catWalk, timeUnit), catsTime);
    setTimeout(partyHard, partyhardTime);
}

function lightShow() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    bodyElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function countBack(timeUnit) {
    let counter = document.createElement("div");
    counter.setAttribute("class", "counter");
    counter.innerHTML = "3";
    bodyElement.appendChild(counter);
    setTimeout(() => counter.innerHTML = "2", timeUnit*2);
    setTimeout(() => counter.innerHTML = "1", timeUnit*4);
    setTimeout(() => counter.innerHTML = "GO", timeUnit*6);
    setTimeout(() => {
        bodyElement.removeChild(counter);
        bodyElement.appendChild(scoreContainer)}, timeUnit*8);
}

function cicaCreate(attr) {
    let cica = document.createElement("img");
    for (let k in attr) {
        cica.setAttribute(k, attr[k]);
    };
    cica.addEventListener("animationend", () => bodyElement.removeChild(cica));
    cica.addEventListener("mousedown", () => {
        cica.style.animationPlayState = "paused";
        cica.setAttribute("src", "starr.png");
        fx.addEventListener("ended", () => bodyElement.removeChild(cica));
        fx.play();
        scoreNum.innerHTML = ++score;
    }, {once: true});
    bodyElement.appendChild(cica)
}

function catWalk() {
    let side = Math.random();
    let catId = side.toString();
    if (side < 0.5) {
        let left = {
            class: 'left',
            id: catId,
            src: 'cicaLeft.gif',
            width: '6.8%',
            style: `bottom: ${parseInt(side * window.innerHeight + 1)}px`
        };
        cicaCreate(left);
    } else {
        let right = {
            class: 'right',
            id: catId,
            src: 'cicaRight.gif',
            width: '6.8%',
            style: `bottom: ${parseInt(side * window.innerHeight + 1)}px`
        };
        cicaCreate(right);
    }
}

function partyHard() {
    discoBall.setAttribute("class", "partyHard");
    discoBall.addEventListener("click", partyEnd);
    discoBall.addEventListener("click", () => {
        song.pause();
        song.currentTime = 0;
    });
    bodyElement.appendChild(discoBall);
}

function partyEnd() {
    bodyElement.removeChild(document.querySelector(".partyHard"));
    discoBall.setAttribute("class", "partyEnd")
    bodyElement.appendChild(discoBall);
    scoreContainer.style.animationPlayState = 'running';
    discoBall.addEventListener("animationend", () => {
        clearInterval(showSet);
        clearInterval(cicaSet);
        bodyElement.style.backgroundColor = "#fff";
        bodyElement.removeChild(document.querySelector(".partyEnd"));
        let ending = document.createElement('p');
        ending.innerHTML = 'Thanks for the game!';
        let final = document.createElement('p');
        final.innerHTML = `You've made ${score} cat high!`;
        if(score > 1){
            final.innerHTML = final.innerHTML.replace('cat', 'cats');
        };
        startContainer.insertBefore(ending, document.querySelector('#creator'));
        startContainer.insertBefore(final, document.querySelector('#creator'));
        startContainer.style.animationPlayState = "paused";
        startContainer.style.display = "block";
        warning.style.display = "none";
    });
}