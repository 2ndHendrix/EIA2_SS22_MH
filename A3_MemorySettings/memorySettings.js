var MemoryGame;
(function (MemoryGame) {
    let cardArray = [];
    let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardValue = [];
    let cardBox = [];
    let startGameButton;
    let pairValue;
    let pairTrue = 0;
    let board;
    let main;
    let winMessage;
    let seconds = 0;
    let minutes = 0;
    window.addEventListener("load", hndload);
    function hndload(_event) {
        board = document.querySelector("#board");
        board.classList.add("visible");
        startGameButton = document.querySelector("#startGameButton");
        main = document.querySelector("#main");
        main.addEventListener("submit", hndchange);
        winMessage = document.querySelector("#message");
        winMessage.classList.add("visible");
    }
    function hndchange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }
        startGame();
    }
    // Spiel starten -> Spielfeld anzeigen 
    function startGame() {
        main.classList.add("hidden");
        startGameButton.classList.add("hidden");
        board.classList.add("show");
        pairValue = Number(cardValue[0]);
        for (let index = 0; index < 2; index++) {
            for (let x = 0; x < pairValue; x++) {
                cardArray.push(cardNumber[x]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        board.innerHTML = "";
        document.body.style.background = cardValue[2];
        document.body.style.fontFamily = cardValue[5];
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement(thisElement());
            card.style.width = cardValue[1] + "px";
            card.style.height = cardValue[1] + "px";
            card.style.background = cardValue[4];
            card.style.color = cardValue[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span";
            board.appendChild(card);
            card.addEventListener("click", turnCards);
            let allSpans = document.querySelectorAll("span");
            allSpans[index].classList.add("visible");
        }
        function thisElement() {
            return "div";
        }
        startTimer();
    }
    // Timer starten
    function startTimer() {
        setInterval(timer, 1000);
    }
    // Timer generierung 
    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }
    // Karte umdrehen bei Klick
    function turnCards(_event) {
        let target = _event.target;
        cardBox.push(target);
        cardBox[0].style.background = "white";
        cardBox[0].querySelector("span").classList.remove("visible");
        if (cardBox.length == 2) {
            cardBox[1].style.background = "white";
            cardBox[1].querySelector("span").classList.remove("visible");
            setTimeout(compareCards, 500);
        }
    }
    // Karten werden verglichen
    function compareCards() {
        let valueCard0 = cardBox[0].querySelector("span").innerHTML;
        let valueCard1 = cardBox[1].querySelector("span").innerHTML;
        if (valueCard0 == valueCard1) {
            cardBox[0].classList.add("visible");
            cardBox[1].classList.add("visible");
            cardBox = [];
            window.alert("Nice one!");
            pairTrue++;
            winCheck();
        }
        else {
            cardBox[0].style.background = cardValue[4];
            cardBox[1].style.background = cardValue[4];
            cardBox[0].querySelector("span").classList.add("visible");
            cardBox[1].querySelector("span").classList.add("visible");
            cardBox = [];
            window.alert("False");
            setTimeout(compareCards, 2000);
        }
    }
    //Check if game is won
    function winCheck() {
        if (pairTrue == pairValue) {
            winMessage.classList.add("show");
            document.querySelector("#win").innerHTML = "Congrats! <br> Your time " + minutes + " minutes and  " + seconds + " seconds " + "! <br> If you want to play again click the Button!";
            let timer = document.getElementById("timer");
            timer.remove();
            let gameField = document.getElementById("gameField");
            gameField.remove();
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memorySettings.js.map