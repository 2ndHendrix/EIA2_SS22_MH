var GardensSimulator;
(function (GardensSimulator) {
    class Farm {
        target;
        condition;
        amountFields;
        constructor(_target, _condition, _amountFields) {
            this.target = _target;
            this.condition = _condition;
            this.amountFields = _amountFields;
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