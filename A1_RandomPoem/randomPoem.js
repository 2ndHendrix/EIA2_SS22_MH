var radnomizedPoemScript;
(function (radnomizedPoemScript) {
    var array_subjekte;
    array_subjekte = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];
    var array_prädikate;
    array_prädikate = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];
    var array_objekte;
    array_objekte = ["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];
    console.log(getVerse(array_objekte, array_prädikate, array_subjekte));
    function getVerse(_sub, _prä, _obj) {
        var versAufnahme = " ";
        var _random = Math.random() * _sub.length;
        var _random = Math.floor(_random);
        var result = _random;
        var wordPick = array_subjekte.splice(result);
        versAufnahme = versAufnahme + wordPick[0] + " ";
        var _random = Math.random() * _prä.length;
        var _random = Math.floor(_random);
        var result = _random;
        var wordPick = array_prädikate.splice(result);
        versAufnahme = versAufnahme + wordPick[0] + " ";
        var _random = Math.random() * _obj.length;
        var _random = Math.floor(_random);
        var result = _random;
        var wordPick = array_objekte.splice(result);
        versAufnahme = versAufnahme + wordPick[0];
        console.log(result);
        return versAufnahme;
    }
})(radnomizedPoemScript || (radnomizedPoemScript = {}));
