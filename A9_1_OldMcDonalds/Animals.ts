namespace A9_1_OldMcDonalds {

    export class Animal {
        name: string;
        sound: string;
        food: string;
        foodAmount: number;
        species: string;

        constructor(_species: string, _name: string, _sound: string, _food: string, _foodAmount: number,) {
            this.species = _species;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.foodAmount = _foodAmount;

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

        singSong(): void {
            document.getElementById("animal").innerHTML +=
                "<b>" + this.species + "</b>" + "<br>" +
                "Old MacDonald had a farm" + "<br>" +
                "E-I-E-I-O" + "<br>" +
                "And on his farm he had a " + "<b>" + this.species + "</b>" + "<br>" +
                "E-I-E-I-O" + "<br>" +
                "With a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "* here " + "<br>" +
                "And a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "* there " + "<br>" +
                "Here a *" + "<b>" + this.sound + "</b>" + "* there a *" + "<b>" + this.sound + "</b>" + "*" + "<br>" +
                "Everywhere a *" + "<b>" + this.sound + " " + this.sound + "</b>" + "*" + "<br>" +
                "Old MacDonald had a farm" + "<br>" +
                "E-I-E-I-O" + "</br>" + "</br>";

        }

        eat(_stable: {}): void {

            document.getElementById("animal").innerHTML += "<b>" + "<br>" + this.name + " the " + this.species + " just ate " + this.foodAmount + " " + this.food + "." + "</b>" + "<br>" + "<br>";
            _stable[this.food] -= this.foodAmount;

            document.getElementById("foodLeft").innerHTML += "<b>" + this.food + ": " + _stable[this.food] + "<br>" + "</b>";
            if (_stable[this.food] <= 0) {
                _stable[this.food] = 100;
            }

        }
    }
}