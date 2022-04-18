namespace MemoryGame {


    let cardArray: number[] = [];
    let cardNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardValue: string[] = [];
    let cardBox: HTMLElement[] = [];
    let startGameButton: HTMLElement;
    let pairValue: number;
    let pairTrue: number = 0;
    let board: HTMLElement;
    let main: HTMLFormElement;
    let winMessage: HTMLSpanElement;
    let seconds: number = 0;
    let minutes: number = 0;

    window.addEventListener("load", hndload);


    function hndload(_event: Event): void {
        board = <HTMLDivElement>document.querySelector("#board");
        board.classList.add("visible");
        startGameButton = <HTMLElement>document.querySelector("#startGameButton");
        main = <HTMLFormElement>document.querySelector("#main");
        main.addEventListener("submit", hndchange);
        winMessage = <HTMLSpanElement>document.querySelector("#message");
        winMessage.classList.add("visible");
    }

    function hndchange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }
        startGame();
    }

    // Spiel starten -> Spielfeld anzeigen 
    function startGame(): void {
        main.classList.add("hidden");
        startGameButton.classList.add("hidden");
        board.classList.add("show");
        pairValue = Number(cardValue[0]);
        for (let index: number = 0; index < 2; index++) {
            for (let x: number = 0; x < pairValue; x++) {
                cardArray.push(cardNumber[x]);
            }
        }

        cardArray.sort(() => 0.5 - Math.random());
        board.innerHTML = "";
        document.body.style.background = cardValue[2];
        document.body.style.fontFamily = cardValue[5];
        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement(thisElement());
            card.style.width = cardValue[1] + "px";
            card.style.height = cardValue[1] + "px";
            card.style.background = cardValue[4];
            card.style.color = cardValue[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span";
            board.appendChild(card);
            card.addEventListener("click", turnCards);
            let allSpans: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            allSpans[index].classList.add("visible");
        }
        function thisElement(): "div" {
            return "div";
        }
        startTimer();
    }

    // Timer starten
    function startTimer(): void {
        setInterval(timer, 1000);
    }

    // Timer generierung 
    function timer(): void {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }
    // Karte umdrehen bei Klick
    function turnCards(_event: MouseEvent): void {

        let target: HTMLElement = <HTMLElement>_event.target;
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
    function compareCards(): void {
        let valueCard0: string = <string>cardBox[0].querySelector("span").innerHTML;
        let valueCard1: string = <string>cardBox[1].querySelector("span").innerHTML;
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
    function winCheck(): void {
        if (pairTrue == pairValue) {
            winMessage.classList.add("show");
            document.querySelector("#win").innerHTML = "Congrats! <br> Your time "  + minutes + " minutes and  " + seconds + " seconds " + "! <br> If you want to play again click the Button!";
            let timer: HTMLElement = document.getElementById("timer");
            timer.remove();
            let gameField: HTMLElement = document.getElementById("gameField");
            gameField.remove();
        }
    }
}