var GardensSimulator;
(function (GardensSimulator) {
    class Field extends GardensSimulator.Farm {
        plantSeedling() {
            console.log("planting seedlings");
        }
        build() {
            for (let index = 1; index < 10; index++) {
                let fieldPlus = 100;
                GardensSimulator.context.save();
                GardensSimulator.context.beginPath();
                GardensSimulator.context.fillStyle = "#28df95";
                GardensSimulator.context.fillRect(this.target.posX + fieldPlus, this.target.posY + fieldPlus, 100, 100);
                GardensSimulator.context.fill();
                GardensSimulator.context.closePath();
                GardensSimulator.context.restore();
                console.log("Test Field");
                fieldPlus = fieldPlus + 100;
            }
        }
    }
    GardensSimulator.Field = Field;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=2Field.js.map