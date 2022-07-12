namespace GardensSimulator {


    let startGameForm: HTMLFormElement;
    let startSimulationButton: HTMLButtonElement;
    let main: HTMLDivElement;
    let farm: Farm[] = [];
    let priceConsumable: number = Math.round(Math.random() * 100);


    window.addEventListener("load", hndload);
    export let context: CanvasRenderingContext2D;

    function hndload(_event: Event): void {

        context = document.querySelector("canvas").getContext("2d");

        main = <HTMLDivElement>document.querySelector("#main");
        main.style.display = "none";

        startSimulationButton = <HTMLButtonElement>document.querySelector("#startSimulationButton");

        startGameForm = <HTMLFormElement>document.querySelector("#startGameForm");
        startGameForm.addEventListener("submit", hndchange);

        startSimulationButton.addEventListener("click", startGame);

    }

    function startGame(_event: Event): void {
        let startGameMenu: HTMLDivElement = <HTMLDivElement>document.querySelector("#startGameMenu");
        startGameMenu.style.display = "none";
        console.log("Game starts");
        main.style.display = "";

        buildFields();
        //updateFarm();
        getFunds();
        setInterval(updatePrices, 1000);
       // setInterval(updateFarm)

    }

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
        let priceRangeHigh: HTMLInputElement = <HTMLInputElement>document.querySelector("#priceRangeHigh");
        let inputHigh: number = parseInt(priceRangeHigh.value);

        let priceNew: number;

        if (inputHigh < priceConsumable) {
            priceConsumable = priceNew - 1;

        }

        document.querySelector("#pricePesticides").innerHTML = priceConsumable + "";
        document.querySelector("#priceFertilizer").innerHTML = priceConsumable + "";



        console.log(inputLow);
    }

    function hndchange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);

    }

    function buildFields(): void {
        let field: Field = new Field();     // Instanzierung von field
        farm.push(field);                   // Aufrufen von field aus Farm


    }

    // function updateFarm(): void {
    //     for (let farms of farm) {
    //         farms.build();
    //         farms.water();
    //         farms.fertilize();
    //         farms.pesticide();

    //     }


    // }



}