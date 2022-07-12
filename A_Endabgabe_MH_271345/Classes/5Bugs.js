var GardensSimulator;
(function (GardensSimulator) {
    class Bugs extends GardensSimulator.Farm {
        eatPlant;
        bugPosition;
        constructor(_eatPlant, _bugposition) {
            super();
            this.eatPlant = _eatPlant;
            this.bugPosition = _bugposition;
        }
        timer() {
            let seconds = 0;
            let minutes = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (seconds < 10 && minutes < 10)
                document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
            else if (seconds >= 10 && minutes < 10)
                document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
            else if (seconds < 10 && minutes >= 10)
                document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
            else if (seconds >= 10 && minutes >= 10)
                document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
        }
    }
    GardensSimulator.Bugs = Bugs;
})(GardensSimulator || (GardensSimulator = {}));
//# sourceMappingURL=5Bugs.js.map