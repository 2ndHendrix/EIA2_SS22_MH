var GardensSimulator;
(function (GardensSimulator) {
    class Field extends GardensSimulator.Farm {
        path = new Path2D();
        amount;
        field;
        position;
        constructor(_amount, _field) {
            super(_field);
            this.amount = _amount;
            this.field = _field;
            this.position = new GardensSimulator.Position(50, 250);
        }
        build() {
            GardensSimulator.context.fillStyle = "#84843C";
            GardensSimulator.context.fillRect(this.position.posX, this.position.posY, 100, 100);
            GardensSimulator.context.fillStyle = "#28df95";
            GardensSimulator.context.fillRect(this.position.posX + 10, this.position.posY + 10, 80, 80);
        }
    }
    GardensSimulator.Field = Field;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=2Field.js.map