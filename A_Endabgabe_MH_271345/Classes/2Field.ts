namespace GardensSimulator {

    export class Field extends Farm {

        plantSeedling(): void {
            console.log("planting seedlings");
        }


        build(): void {

            for (let index: number = 1; index < 10; index++) {

                let fieldPlus: number = 100;
                context.save();

                context.beginPath();
                context.fillStyle = "#28df95";
                context.fillRect(this.target.posX + fieldPlus, this.target.posY + fieldPlus, 100, 100);
                context.fill();
                context.closePath();

                context.restore();

                console.log("Test Field");

                fieldPlus = fieldPlus + 100;
            }
        }
    }
}