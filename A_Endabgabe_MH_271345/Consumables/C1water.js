var GardensSimulator;
(function (GardensSimulator) {
    class Water extends GardensSimulator.Farm {
        waterPlants() {
            console.log("C1");
        }
    }
    GardensSimulator.Water = Water;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=C1water.js.map