var GardensSimulator;
(function (GardensSimulator) {
    class Consumables extends GardensSimulator.Farm {
        amount;
        typeConsumalbles;
        constructor(_amount, _typeConsumables) {
            super();
            this.amount = _amount;
            this.typeConsumalbles = _typeConsumables;
        }
        waterPlants() {
            console.log("C1");
        }
    }
    GardensSimulator.Consumables = Consumables;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=4Consumables.js.map