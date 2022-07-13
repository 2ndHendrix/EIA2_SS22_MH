namespace GardensSimulator {

    export class Field extends Farm {

        public path: Path2D = new Path2D();

        amount: number;
        field: Position;
        position: Position;


        constructor(_amount?: number, _field?: Position) {
            super(_field);
            this.amount = _amount;
            this.field = _field;
            this.position = new Position(50, 250);
        }


        build(): void {

            context.fillStyle = "#84843C"; 
            context.fillRect(this.position.posX, this.position.posY, 100, 100);
            context.fillStyle = "#28df95";
            context.fillRect(this.position.posX + 10, this.position.posY + 10, 80, 80);

        }
        // plantSeedling(): void {
        //     console.log("planting seedlings");
        // }
    }

}