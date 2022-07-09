var GardensSimulator;
(function (GardensSimulator) {
    class Fertilizer extends GardensSimulator.Consumables {
        fertilizePlants() {
            console.log("C2");
        }
    }
    GardensSimulator.Fertilizer = Fertilizer;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=C2fertilizer.js.map