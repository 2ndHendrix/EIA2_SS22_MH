var A9_1_OldMcDonalds;
(function (A9_1_OldMcDonalds) {
    window.addEventListener("load", hdnload);
    let cow;
    let dog;
    let animal;
    function hdnload(_event) {
        cow = new A9_1_OldMcDonalds.Animal("Kuh");
        dog = new A9_1_OldMcDonalds.Animal("Hund");
        console.log(cow.name);
        cow.iwas();
    }
})(A9_1_OldMcDonalds || (A9_1_OldMcDonalds = {}));
//# sourceMappingURL=script.js.map