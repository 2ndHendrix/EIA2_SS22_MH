namespace radnomizedPoemScript {

    var array_subjekte: string[];
    array_subjekte = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];

    var array_prädikate: string[];
    array_prädikate = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];

    var array_objekte: string[];
    array_objekte = ["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];

    console.log(getVerse(array_objekte, array_prädikate, array_subjekte));


    function getVerse(_sub: string[], _prä: string[], _obj: string[]) {

        var versAufnahme: string = " ";

        var _random = Math.random() * _sub.length;
        var _random = Math.floor(_random);
        var result: number = _random;
        var wordPick = array_subjekte.splice(result);
        versAufnahme = versAufnahme + wordPick[0] + " ";

        var _random = Math.random() * _prä.length;
        var _random = Math.floor(_random);
        var result: number = _random;
        var wordPick = array_prädikate.splice(result);
        versAufnahme = versAufnahme + wordPick[0] + " ";

        var _random = Math.random() * _obj.length;
        var _random = Math.floor(_random);
        var result: number = _random;
        var wordPick = array_objekte.splice(result);
        versAufnahme = versAufnahme + wordPick[0];

        console.log(result);

        return versAufnahme;

    }
}