namespace GardensSimulator {
    window.addEventListener("load", hndload);

    export let context: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    let startGameForm: HTMLFormElement;
    let startSimulationButton: HTMLButtonElement;



    let main: HTMLDivElement;
    let farm: Farm[] = [];
    let field: Field[] = [];
    let priceConsumable: number = Math.round(Math.random() * 100);



    function hndload(_event: Event): void {

        context = document.querySelector("canvas").getContext("2d");

        main = <HTMLDivElement>document.querySelector("#main");
        main.style.display = "none";

        startSimulationButton = <HTMLButtonElement>document.querySelector("#startSimulationButton");

        startGameForm = <HTMLFormElement>document.querySelector("#startGameForm");
        startGameForm.addEventListener("submit", hndchange);

        startSimulationButton.addEventListener("click", startGame);





        // Buttons for Panting veggies
        let broccoliButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#broccoli");
        let cabbageButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#cabbage");
        let cornButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#corn");
        let carrotButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#carrot");
        let spinachButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#spinach");

        broccoliButton.addEventListener("click", plantingVeggies);
        cabbageButton.addEventListener("click", plantingVeggies);
        cornButton.addEventListener("click", plantingVeggies);
        carrotButton.addEventListener("click", plantingVeggies);
        spinachButton.addEventListener("click", plantingVeggies);

        // Buttons for consumables
        let pesticidesButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#buttonPesticides");
        let waterButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#buttonWater");
        let fertilizerButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#buttonFertilizer");

        pesticidesButton.addEventListener("click", usingConsumables);
        waterButton.addEventListener("click", usingConsumables);
        fertilizerButton.addEventListener("click", usingConsumables);



        // canvas.addEventListener("mousedown", clickField);

    }


    function startGame(_event: Event): void {
        let startGameMenu: HTMLDivElement = <HTMLDivElement>document.querySelector("#startGameMenu");
        startGameMenu.style.display = "none";
        console.log("Game starts");
        main.style.display = "";

        buildFields();
        updateFarm();
        getFunds();
        getAmountConsumables();
        setInterval(updatePrices, 1000);
        // setInterval(updateFarm)

    }

    function plantingVeggies(_event: Event): void {

        console.log("button clicked");
    }

    function usingConsumables(_event: Event): void {
        console.log("Using consumables");
    }

    function getAmountConsumables(): void {
        let numberPesticides: HTMLInputElement = <HTMLInputElement>document.getElementById("setPesticides");
        let amountPesticides: number = parseInt(numberPesticides.value);
        document.querySelector("#amountPesticides").innerHTML = amountPesticides + "";
        console.log(amountPesticides);

    }

    // function clickField(_event: MouseEvent): void {

    //     let fieldButto: HTMLDivElement = <HTMLDivElement>document.getElementById("row");
    //     // let fieldClicked: Position = new Position(_event.clientX - context.canvas.offsetLeft, _event.clientY - context.canvas.offsetTop);
    //     //console.log(fieldClicked);
    // }

    function updatePrices(): void {
        setWorthHarvest();
        pricePlant();
        setPriceConsumalbles();
    }

    function getFunds(): void {

        let fundsAtStart: HTMLInputElement = <HTMLInputElement>document.getElementById("fundsAtStart");
        let inputValue: number = parseInt(fundsAtStart.value);
        document.querySelector("#funds").innerHTML = inputValue + "";
        console.log(inputValue);

    }

    function setWorthHarvest(): void {
        let inputHarvest: number = Math.round(Math.random() * 25);
        document.querySelector("#harvestWorth").innerHTML = inputHarvest + "";

    }

    function pricePlant(): void {
        let inputPlant: number = Math.round(Math.random() * 25.34);
        document.querySelector("#pricePlant").innerHTML = inputPlant + "";

    }

    function setPriceConsumalbles(): void {

        let priceRangeLow: HTMLInputElement = <HTMLInputElement>document.getElementById("priceRangeLow");
        let inputLow: number = parseInt(priceRangeLow.value);
        let priceRangeHigh: HTMLInputElement = <HTMLInputElement>document.getElementById("priceRangeHigh");
        let inputHigh: number = parseInt(priceRangeHigh.value);

        let priceNew: number;

        priceNew = Math.floor(Math.random() * (inputHigh - inputLow + 1)) + inputLow;

        document.querySelector("#pricePesticides").innerHTML = priceNew + "";
        document.querySelector("#priceFertilizer").innerHTML = priceNew + "";

        console.log(priceNew);
    }

    function hndchange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);

    }

    function buildFields(): void {

        for (let index: number = 0; index <= 4; index++) {
            document.querySelector("row" + index);
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index);


            for (let index: number = 0; index <= 7; index++) {
                let fieldRow: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                fieldRow.classList.add("field");
                rows.appendChild(fieldRow);


                let field: Field = new Field();
                farm.push(field);

                // let stateAd: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                // stateAd.classList.add("state");
                // field.appendChild(stateAd);
            }
        }


    }

    function updateFarm(): void {
        for (let farms of farm) {
            farms.build();
            farms.water();
            farms.fertilize();
            farms.pesticide();

        }


    }
}