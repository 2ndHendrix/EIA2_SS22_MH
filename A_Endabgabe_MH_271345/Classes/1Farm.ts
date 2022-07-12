namespace GardensSimulator {

    export class Farm {
       public target: Position;
       public condition: string;
       public amountFields: number;

        constructor(_target?: Position, _condition?: string, _amountFields?: number) {
            this.target = _target;
            this.condition = _condition;
            this.amountFields = _amountFields;


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