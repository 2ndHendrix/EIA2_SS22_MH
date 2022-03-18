// tslint:disable-next-line: no-namespace
namespace radnomizedPoemScript {

    let subject: string[] = ["Gandalf", "Gimli", "Frodo", "Eragon", "Boromir", "Golum", "Alf", "Wilmar", "Saruman"];
    let praedicates: string[] = ["trägt", "vergisst", "klaut", "snackt", "liebt", "hasst", "riecht", "mag", "fürchtet"];
    let objects: string[] =["sein zweites Frühstück", "die schwarzen Reiter", "Gondor", "den einen Ring", "Orkses", "Mordor", "Vulkangestein", "Riesenspinnen", "Kriegselefanten"];

    // tslint:disable-next-line: no-console
    let versComplete: string= getVerse(subject, praedicates, objects);
    console.log(versComplete);

    function getVerse(_sub: string[], _prä: string[], _obj: string[]) {

        let versAufnahme: string = " ";

        let _random1: number = Math.floor(Math.random() * _sub.length);
        let wordPick = subject.splice(_random1);
        versAufnahme = versAufnahme + wordPick[0] + " ";

        let _random2: number = Math.floor(Math.random() * _sub.length);
        let wordPick2 = subject.splice(_random2);
        versAufnahme = versAufnahme + wordPick2[0] + " ";

        let _random3: number = Math.floor(Math.random() * _sub.length);
        let wordPick3 = subject.splice(_random3);
        versAufnahme = versAufnahme + wordPick3[0] + " ";

        return versAufnahme;

    }
}