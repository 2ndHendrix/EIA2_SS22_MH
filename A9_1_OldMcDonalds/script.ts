namespace A9_1_OldMcDonalds {

    let animal: Animal[] = [];
    let stable = {"Wheat": 100, "Dog Food": 100, "Fish": 100, "Seeds": 100, "Protein Shake": 100};

    window.addEventListener("load", hdnload);
    let cow: Animal;
    let dog: Animal;
    let cat: Animal;
    let rooster: Animal;
    let pig: Animal;

    function hdnload(_event: Event): void {
        document.querySelector(".button").addEventListener("click", hdnload);

        cow = new Animal("Cow", "Berta", "Muuuh", "Wheat", 10);
        dog = new Animal("Dog", "Johnny", "Wuff", "Dog Food", 9);
        cat = new Animal("Cat", "Klaus", "Miau", "Fish", 8);
        rooster = new Animal("Rooster", "Robby", "Kikerikii", "Seeds", 7);
        pig = new Animal("Pig", "Koppa", "Oink", "Protein Shake", 6);

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
}