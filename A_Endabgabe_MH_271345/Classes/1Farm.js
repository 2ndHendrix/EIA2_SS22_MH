var GardensSimulator;
(function (GardensSimulator) {
    class Farm {
        target;
        condition;
        amountFields;
        constructor(_position) {
            if (_position)
                this.target = _position;
            else
                this.target = new GardensSimulator.Position(50, 50);
            this.target = new GardensSimulator.Position(1, 0);
        }
        build() {
            console.log("1Farm build");
        }
        water() {
            console.log("1Farm water");
        }
        fertilize() {
            console.log("1Farm fertilize");
        }
        pesticide() {
            console.log("1Farm pesticide");
        }
    }
    GardensSimulator.Farm = Farm;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=1Farm.js.map