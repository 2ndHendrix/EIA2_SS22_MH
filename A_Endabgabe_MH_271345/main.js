var GardensSimulator;
(function (GardensSimulator) {
    window.addEventListener("load", hndload);
    let canvas = document.querySelector("canvas");
    let startGameForm;
    let startSimulationButton;
    let main;
    let farm = [];
    let field = [];
    let priceConsumable = Math.round(Math.random() * 100);
    function hndload(_event) {
        GardensSimulator.context = document.querySelector("canvas").getContext("2d");
        main = document.querySelector("#main");
        main.style.display = "none";
        startSimulationButton = document.querySelector("#startSimulationButton");
        startGameForm = document.querySelector("#startGameForm");
        startGameForm.addEventListener("submit", hndchange);
        startSimulationButton.addEventListener("click", startGame);
        // Buttons for Panting veggies
        let broccoliButton = document.querySelector("button#broccoli");
        let cabbageButton = document.querySelector("button#cabbage");
        let cornButton = document.querySelector("button#corn");
        let carrotButton = document.querySelector("button#carrot");
        let spinachButton = document.querySelector("button#spinach");
        broccoliButton.addEventListener("click", plantingVeggies);
        cabbageButton.addEventListener("click", plantingVeggies);
        cornButton.addEventListener("click", plantingVeggies);
        carrotButton.addEventListener("click", plantingVeggies);
        spinachButton.addEventListener("click", plantingVeggies);
        // Buttons for consumables
        let pesticidesButton = document.querySelector("button#buttonPesticides");
        let waterButton = document.querySelector("button#buttonWater");
        let fertilizerButton = document.querySelector("button#buttonFertilizer");
        pesticidesButton.addEventListener("click", usingConsumables);
        waterButton.addEventListener("click", usingConsumables);
        fertilizerButton.addEventListener("click", usingConsumables);
        // canvas.addEventListener("mousedown", clickField);
    }
    function startGame(_event) {
        let startGameMenu = document.querySelector("#startGameMenu");
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
    function plantingVeggies(_event) {
        console.log("button clicked");
    }
    function usingConsumables(_event) {
        console.log("Using consumables");
    }
    function getAmountConsumables() {
        let numberPesticides = document.getElementById("setPesticides");
        let amountPesticides = parseInt(numberPesticides.value);
        document.querySelector("#amountPesticides").innerHTML = amountPesticides + "";
        console.log(amountPesticides);
    }
    // function clickField(_event: MouseEvent): void {
    //     let fieldButto: HTMLDivElement = <HTMLDivElement>document.getElementById("row");
    //     // let fieldClicked: Position = new Position(_event.clientX - context.canvas.offsetLeft, _event.clientY - context.canvas.offsetTop);
    //     //console.log(fieldClicked);
    // }
    function updatePrices() {
        setWorthHarvest();
        pricePlant();
        setPriceConsumalbles();
    }
    function getFunds() {
        let fundsAtStart = document.getElementById("fundsAtStart");
        let inputValue = parseInt(fundsAtStart.value);
        document.querySelector("#funds").innerHTML = inputValue + "";
        console.log(inputValue);
    }
    function setWorthHarvest() {
        let inputHarvest = Math.round(Math.random() * 25);
        document.querySelector("#harvestWorth").innerHTML = inputHarvest + "";
    }
    function pricePlant() {
        let inputPlant = Math.round(Math.random() * 25.34);
        document.querySelector("#pricePlant").innerHTML = inputPlant + "";
    }
    function setPriceConsumalbles() {
        let priceRangeLow = document.getElementById("priceRangeLow");
        let inputLow = parseInt(priceRangeLow.value);
        let priceRangeHigh = document.getElementById("priceRangeHigh");
        let inputHigh = parseInt(priceRangeHigh.value);
        let priceNew;
        priceNew = Math.floor(Math.random() * (inputHigh - inputLow + 1)) + inputLow;
        document.querySelector("#pricePesticides").innerHTML = priceNew + "";
        document.querySelector("#priceFertilizer").innerHTML = priceNew + "";
        console.log(priceNew);
    }
    function hndchange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
    }
    function buildFields() {
        for (let index = 0; index <= 4; index++) {
            document.querySelector("row" + index);
            let rows = document.getElementById("row" + index);
            for (let index = 0; index <= 7; index++) {
                let fieldRow = document.createElement("div");
                fieldRow.classList.add("field");
                rows.appendChild(fieldRow);
                let field = new GardensSimulator.Field();
                farm.push(field);
                // let stateAd: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                // stateAd.classList.add("state");
                // field.appendChild(stateAd);
            }
        }
    }
    function updateFarm() {
        for (let farms of farm) {
            farms.build();
            farms.water();
            farms.fertilize();
            farms.pesticide();
        }
    }
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=main.js.map