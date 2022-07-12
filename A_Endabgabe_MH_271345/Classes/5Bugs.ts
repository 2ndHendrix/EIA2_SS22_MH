namespace GardensSimulator {


    export class Bugs extends Farm {
        eatPlant: number;
        bugPosition: Position;


        constructor(_eatPlant: number, _bugposition: Position) {
            super();
            this.eatPlant = _eatPlant;
            this.bugPosition = _bugposition;
       }

   

        timer(): void {
            let seconds: number = 0;
            let minutes: number = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (seconds < 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
            else if (seconds >= 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
            else if (seconds < 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
            else if (seconds >= 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
        }

    }

}