var GardensSimulator;
(function (GardensSimulator) {
    let startGameForm;
    let startSimulationButton;
    let main;
    let farm = [];
    let priceConsumable = Math.round(Math.random() * 100);
    window.addEventListener("load", hndload);
    function hndload(_event) {
        GardensSimulator.context = document.querySelector("canvas").getContext("2d");
        main = document.querySelector("#main");
        main.style.display = "none";
        startSimulationButton = document.querySelector("#startSimulationButton");
        startGameForm = document.querySelector("#startGameForm");
        startGameForm.addEventListener("submit", hndchange);
        startSimulationButton.addEventListener("click", startGame);
        console.log("Handled");
    }
    function startGame(_event) {
        let startGameMenu = document.querySelector("#startGameMenu");
        startGameMenu.style.display = "none";
        console.log("Game starts");
        main.style.display = "";
        buildField();
        updateFarm();
        getFunds();
        setWorthHarvest();
        pricePlant();
        setPriceConsumalbles();
        setInterval(updatePrices, 1000);
    }
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
        let priceRangeHigh = document.querySelector("#priceRangeHigh");
        let inputHigh = parseInt(priceRangeHigh.value);
        let priceNew;
        if (inputHigh < priceConsumable) {
            priceConsumable = priceNew - 1;
        }
        document.querySelector("#pricePesticides").innerHTML = priceConsumable + "";
        document.querySelector("#priceFertilizer").innerHTML = priceConsumable + "";
        console.log(inputLow);
    }
    function hndchange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
    }
    function buildField() {
        let field = new GardensSimulator.Field();
        farm.push(field);
        for (let index = 0; index <= 5; index++) {
            document.querySelector("row" + index);
            let rows = document.getElementById("row" + index);
            for (let index = 0; index <= 8; index++) {
                let fieldHTML = document.createElement("div");
                fieldHTML.classList.add("field");
                rows.appendChild(fieldHTML);
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