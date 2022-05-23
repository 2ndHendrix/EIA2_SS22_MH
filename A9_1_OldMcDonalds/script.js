var A9_1_OldMcDonalds;
(function (A9_1_OldMcDonalds) {
    let animal = [];
    let stable = { "Wheat": 100, "Dog Food": 100, "Fish": 100, "Seeds": 100, "Protein Shake": 100 };
    window.addEventListener("load", hdnload);
    let cow;
    let dog;
    let cat;
    let rooster;
    let pig;
    function hdnload(_event) {
        document.querySelector(".button").addEventListener("click", hdnload);
        cow = new A9_1_OldMcDonalds.Animal("Cow", "Berta", "Muuuh", "Wheat", 10);
        dog = new A9_1_OldMcDonalds.Animal("Dog", "Johnny", "Wuff", "Dog Food", 9);
        cat = new A9_1_OldMcDonalds.Animal("Cat", "Klaus", "Miau", "Fish", 8);
        rooster = new A9_1_OldMcDonalds.Animal("Rooster", "Robby", "Kikerikii", "Seeds", 7);
        pig = new A9_1_OldMcDonalds.Animal("Pig", "Koppa", "Oink", "Protein Shake", 6);
        document.getElementById("animal").innerHTML = "";
        document.getElementById("foodLeft").innerHTML = "";
        cow.singSong();
        dog.singSong();
        cat.singSong();
        rooster.singSong();
        pig.singSong();
        cow.eat(stable);
        dog.eat(stable);
        cat.eat(stable);
        rooster.eat(stable);
        pig.eat(stable);
        console.log(cow, dog, cat, rooster, pig);
    }
})(A9_1_OldMcDonalds || (A9_1_OldMcDonalds = {}));
//# sourceMappingURL=script.js.map