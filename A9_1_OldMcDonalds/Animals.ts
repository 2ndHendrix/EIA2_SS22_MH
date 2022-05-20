namespace A9_1_OldMcDonalds {

    export class Animal {
        name: string;
        sound: string;
        food: string;
        foodAmount: number;
        species: string;

        constructor(_species: string) {
            this.species = _species;
            this.setParameters();
        }

        public eatFood(): string {
            return this.food;
        }

        setParameters(): void {
            let name: string[] = ["Berta", "Johnny", "Klaus", "Robby", "Koppa"];
            this.name = name[Math.floor(Math.random() * 5)];
            console.log(name);
        }

        iwas(): void {
            console.log("irgendwas");
        }
    }
}