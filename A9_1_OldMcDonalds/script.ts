namespace A9_1_OldMcDonalds {

    window.addEventListener("load", hdnload);
    let cow: Animal;
    let dog: Animal;
    let cat: Animal;
    let rooster: Animal;
    let pig: Animal;
    let animal: Animal;

    function hdnload(_event: Event): void {
        cow = new Animal("Kuh");
        dog = new Animal("Hund");
        console.log(cow.name);
        cow.iwas();
    }
}