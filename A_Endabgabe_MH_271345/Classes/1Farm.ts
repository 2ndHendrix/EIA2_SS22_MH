namespace GardensSimulator {

    export class Farm {
        target: Position;
        condition: string;
        amountFields: number;

        constructor(_position?: Position) {
            if (_position)
                this.target = _position;
            else
                this.target = new Position(50, 50);

            this.target = new Position(1, 0);


        }

        build(): void {
            console.log("1Farm build");
        }

        water(): void {
            console.log("1Farm water");
        }

        fertilize(): void {
            console.log("1Farm fertilize");
        }

        pesticide(): void {
            console.log("1Farm pesticide");
        }
    }
}