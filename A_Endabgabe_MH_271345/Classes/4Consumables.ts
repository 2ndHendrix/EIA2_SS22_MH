namespace GardensSimulator {

    export class Consumables extends Farm {

        amount: number;
        typeConsumalbles: string;


        constructor(_amount: number, _typeConsumables: string) {
            super();
            this.amount = _amount;
            this.typeConsumalbles = _typeConsumables;
        }

        waterPlants(): void {
            console.log("C1");
        }
    }





}