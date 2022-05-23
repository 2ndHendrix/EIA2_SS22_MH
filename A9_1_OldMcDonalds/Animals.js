var A9_1_OldMcDonalds;
(function (A9_1_OldMcDonalds) {
    class Animal {
        name;
        sound;
        food;
        foodAmount;
        species;
        constructor(_species, _name, _sound, _food, _foodAmount) {
            this.species = _species;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.setParameters();
        }
        eatFood() {
            return this.food;
        }
        setParameters() {
            let name = ["Berta", "Johnny", "Klaus", "Robby", "Koppa"];
            this.name = name[Math.floor(Math.random() * 5)];
            console.log(name);
        }
        singSong() {
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
        eat(_stable) {
            document.getElementById("animal").innerHTML += "<b>" + "<br>" + this.name + " the " + this.species + " just ate " + this.foodAmount + " " + this.food + "." + "</b>" + "<br>" + "<br>";
            _stable[this.food] -= this.foodAmount;
            document.getElementById("foodLeft").innerHTML += "<b>" + this.food + ": " + _stable[this.food] + "<br>" + "</b>";
            if (_stable[this.food] <= 0) {
                _stable[this.food] = 100;
            }
        }
    }
    A9_1_OldMcDonalds.Animal = Animal;
})(A9_1_OldMcDonalds || (A9_1_OldMcDonalds = {}));
//# sourceMappingURL=Animals.js.map