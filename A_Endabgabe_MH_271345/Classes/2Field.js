var GardensSimulator;
(function (GardensSimulator) {
    class Field extends GardensSimulator.Farm {
        path = new Path2D();
        amount;
        field;
        position;
        constructor(_amount, _field) {
            super();
            this.amount = _amount;
            this.field = _field;
            this.position = new GardensSimulator.Position(300, 300);
            this.build();
        }
        build() {
            GardensSimulator.context.fill(this.path);
            GardensSimulator.context.fillStyle = "#00ff7f";
            console.log("Test field XXX");
            this.drawField();
        }
        drawField() {
            GardensSimulator.context.beginPath();
            GardensSimulator.context.fillStyle = "#28df95";
            GardensSimulator.context.fillRect(this.target.posX, this.target.posY, 100, 100);
            GardensSimulator.context.fill();
            GardensSimulator.context.closePath();
        }
        plantSeedling() {
            console.log("planting seedlings");
        }
    }
    GardensSimulator.Field = Field;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=2Field.js.map