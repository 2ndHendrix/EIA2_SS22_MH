// tslint:disable-next-line: no-namespace
var radnomizedPoemScript;
(function (radnomizedPoemScript) {
    var subject = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];
    var praedicates = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];
    var objects = ["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];
    // tslint:disable-next-line: no-console
    var versComplete = getVerse(subject, praedicates, objects);
    console.log(versComplete);
    function getVerse(_sub, _prä, _obj) {
        var versAufnahme = " ";
        var _random1 = Math.floor(Math.random() * _sub.length);
        var wordPick = subject.splice(_random1);
        versAufnahme = versAufnahme + wordPick[0] + " ";
        var _random2 = Math.floor(Math.random() * _sub.length);
        var wordPick2 = subject.splice(_random2);
        versAufnahme = versAufnahme + wordPick2[0] + " ";
        var _random3 = Math.floor(Math.random() * _sub.length);
        var wordPick3 = subject.splice(_random3);
        versAufnahme = versAufnahme + wordPick3[0] + " ";
        return versAufnahme;
    }
})(radnomizedPoemScript || (radnomizedPoemScript = {}));
