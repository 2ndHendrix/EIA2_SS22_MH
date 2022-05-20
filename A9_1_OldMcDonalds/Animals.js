var A9_1_OldMcDonalds;
(function (A9_1_OldMcDonalds) {
    class Animal {
        name;
        sound;
        food;
        species;
        constructor(_species) {
            this.species = _species;
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
        iwas() {
            console.log("irgendwas");
        }
    }
    A9_1_OldMcDonalds.Animal = Animal;
})(A9_1_OldMcDonalds || (A9_1_OldMcDonalds = {}));
//# sourceMappingURL=Animals.js.map