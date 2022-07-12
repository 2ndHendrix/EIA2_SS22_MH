namespace GardensSimulator {

    export class Field extends Farm {

        public path: Path2D = new Path2D();

        amount: number;
        field: Position;
        position: Position;


        constructor(_amount?: number, _field?: Position) {
            super();
            this.amount = _amount;
            this.field = _field;
            this.position = new Position(300, 300);
            this.build();
        }


        build(): void {
            context.fill(this.path);
            context.fillStyle = "#00ff7f";
            console.log("Test field XXX");

            this.drawField();
        }

        drawField(): void { //Pfadmodell das wiederverwendbar ist

            context.beginPath();
            context.fillStyle = "#28df95";
            context.fillRect(this.target.posX, this.target.posY, 100, 100);
            context.fill();
            context.closePath();




        }
        plantSeedling(): void {
            console.log("planting seedlings");
        }
    }

}