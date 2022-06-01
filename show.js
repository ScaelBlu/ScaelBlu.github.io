function letTheShowBegin() {
buttonElement = document.querySelector(".button-div");
buttonElement.style.animationPlayState = "running";
buttonElement.addEventListener("animationend", () => {
    document.querySelector("body").removeChild(buttonElement);
    discoDiscoPartyParty();
});

}

function lightShow() {
        let r = parseInt(Math.random()*256);
        let g = parseInt(Math.random()*256);
        let b = parseInt(Math.random()*256);
        document.querySelector("body").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    
    function catWalk() {
        let side = Math.random();
        let catId = side.toString;
    if(side < 0.5) {
        let cicaLeft = document.createElement("img");
        cicaLeft.className = "left";
        cicaLeft.setAttribute("id", catId);
        cicaLeft.setAttribute("src", "cicaLeft.gif");
        cicaLeft.setAttribute("width", "6.8%");
        cicaLeft.style.bottom = `${parseInt(side * window.innerHeight+1)}px`;
        cicaLeft.style.left = "0px";
        cicaLeft.addEventListener("animationend", () => document.querySelector("body").removeChild(document.getElementById(catId)));
        document.querySelector("body").appendChild(cicaLeft)
    } else {
        let cicaRight = document.createElement("img");
        cicaRight.className = "right";
        cicaRight.setAttribute("id", catId);
        cicaRight.setAttribute("src", "cicaRight.gif");
        cicaRight.setAttribute("width", "6.8%");
        cicaRight.style.bottom = `${parseInt(side * window.innerHeight+1)}px`;
        cicaRight.style.right = "0px";
        cicaRight.addEventListener("animationend", () => document.querySelector("body").removeChild(document.getElementById(catId)));
        document.querySelector("body").appendChild(cicaRight)
    }
}

function getHigh() {
    let discoBall = document.createElement("img");
    discoBall.setAttribute("src", "discoball.gif");
    discoBall.setAttribute("width", "10%");
    discoBall.setAttribute("class", "discoball");
    document.querySelector("body").appendChild(discoBall);
}

function discoDiscoPartyParty() {
    document.getElementById("BadgersInSpace").play();
    setInterval(lightShow, 835);
    setTimeout(() => setInterval(catWalk, 417.5), 12000);
    setTimeout(getHigh, 250);
}