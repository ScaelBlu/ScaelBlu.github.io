document.onselectstart = () => {return false};
document.ondragstart = () => {return false};
let buttonElement = document.querySelector(".button-div");
let bodyElement = document.querySelector("body");
let score = 0;
document.getElementsByTagName("span")[0].innerHTML = score;

let discoBall = document.createElement("img");
discoBall.setAttribute("src", "discoball.gif");
discoBall.setAttribute("width", "10%");

let fx = document.getElementById("effect");

let cicaSet;
let showSet;

function letTheShowBegin() {
    score = 0;
    buttonElement.style.animationPlayState = "running";
    buttonElement.addEventListener("animationend", () => {
        buttonElement.style.display = "none";
        discoDiscoPartyParty();
    });
}

function discoDiscoPartyParty() {
    document.getElementById("BadgersInSpace").play();
    document.getElementById("BadgersInSpace").addEventListener("ended", partyEnd);
    showSet = setInterval(lightShow, 835);
    setTimeout(countBack, 10020)
    setTimeout(() => cicaSet = setInterval(catWalk, 417.5), 12107.5);
    setTimeout(partyHard, 25050);
}

function lightShow() {
        let r = parseInt(Math.random()*256);
        let g = parseInt(Math.random()*256);
        let b = parseInt(Math.random()*256);
        bodyElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    
function countBack() {
    let counter = document.createElement("div");
    counter.setAttribute("class", "counter");
    counter.innerHTML = "3";
    bodyElement.appendChild(counter);
    setTimeout(() => counter.innerHTML = "2", 835);
    setTimeout(() => counter.innerHTML = "1", 835*2);
    setTimeout(() => counter.innerHTML = "GO", 835*3 );
    setTimeout(() => bodyElement.removeChild(counter), 835*4);
}


function catWalk() {
    let side = Math.random();
    let catId = side.toString();
    if(side < 0.5) {
        let cicaLeft = document.createElement("img");
        cicaLeft.className = "left";
        cicaLeft.setAttribute("id", catId);
        cicaLeft.setAttribute("src", "cicaLeft.gif");
        cicaLeft.setAttribute("width", "6.8%");
        cicaLeft.style.bottom = `${parseInt(side * window.innerHeight+1)}px`;
        cicaLeft.style.left = "0px";
        cicaLeft.addEventListener("mousedown", () => {
            cicaLeft.setAttribute("src", "starr.png");
            cicaLeft.style.animationPlayState = "paused";
            fx.play();
            score++;
            fx.addEventListener("ended", () => bodyElement.removeChild(document.getElementById(catId)));
        });
        cicaLeft.addEventListener("animationend", () => bodyElement.removeChild(document.getElementById(catId)));
        bodyElement.appendChild(cicaLeft)
    } else {
        let cicaRight = document.createElement("img");
        cicaRight.className = "right";
        cicaRight.setAttribute("id", catId);
        cicaRight.setAttribute("src", "cicaRight.gif");
        cicaRight.setAttribute("width", "6.8%");
        cicaRight.style.bottom = `${parseInt(side * window.innerHeight+1)}px`;
        cicaRight.style.right = "0px";
            cicaRight.addEventListener("mousedown", () => {
                cicaRight.setAttribute("src", "starr.png");
                cicaRight.style.animationPlayState = "paused";
                fx.play();
                score++;
                fx.addEventListener("ended", () => bodyElement.removeChild(document.getElementById(catId)));
            });
            cicaRight.addEventListener("animationend", () => bodyElement.removeChild(document.getElementById(catId)));
            bodyElement.appendChild(cicaRight)
        }
    }
    
    function partyHard() {
    discoBall.setAttribute("class", "partyHard");
    discoBall.addEventListener("click", partyEnd);
    discoBall.addEventListener("click", () => {
        document.getElementById("BadgersInSpace").pause();
        document.getElementById("BadgersInSpace").currentTime = 0;
    });
    bodyElement.appendChild(discoBall);
}

function partyEnd() {
    bodyElement.removeChild(document.querySelector(".partyHard"));
    discoBall.setAttribute("class", "partyEnd")
    bodyElement.appendChild(discoBall);
    discoBall.addEventListener("animationend", () => {
        clearInterval(showSet);
        clearInterval(cicaSet);
        bodyElement.style.backgroundColor = "#fff";
        bodyElement.removeChild(document.querySelector(".partyEnd"));
        document.getElementsByTagName("span")[0].innerHTML = score;
        buttonElement.style.animationPlayState = "paused";
        buttonElement.style.display = "block";
    });
}