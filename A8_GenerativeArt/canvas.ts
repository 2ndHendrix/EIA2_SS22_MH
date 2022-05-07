namespace canvas {

    let hue: number;
    let saturation: number;
    let light: number;


    window.addEventListener("load", hndload);

    function hndload(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        let random: number = Math.random() * 100;
        let gradient: CanvasGradient = crc2.createLinearGradient(50, 100, 150, 400);

        hue = Math.round(Math.random() * 400);
        gradient.addColorStop(0, "hsl(" + hue + "," + "13%, " + "55%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);

        //gernerate random number
        for (let index: number = 0; index < 35; index++) {
            let x: number = Math.random() * 1000;
            let y: number = Math.random() * 1000;

            buildCircle(x, y);
            buildRectangle(x, y);
            buildText(x, y);
            buildLines(x, y);
        }


        function buildCircle(_x: number, _y: number): void {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);

            let radius: number = Math.round(Math.random() * random);

            crc2.beginPath();
            crc2.arc(_x, _y, radius, 0, Math.PI * 2);
            crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.fill();
            crc2.closePath();
        }

        function buildRectangle(_x: number, _y: number): void {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);

            let x1: number = Math.round(Math.random() * 1000);
            let y1: number = Math.round(Math.random() * 1000);
            let x2: number = Math.round(Math.random() * 250);
            let y2: number = Math.round(Math.random() * 125);

            crc2.beginPath();
            crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.rect(_x, _y, x2, y2);
            crc2.stroke();
            crc2.closePath();

        }

        function buildText(_x: number, _y: number): void {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);

            crc2.font = "30px Comic Sans MS";
            crc2.fillText("But is it art?", _x, _y);
            crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.lineWidth = saturation / hue;
        }

        function buildLines(_x: number, _y: number): void {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);

            crc2.beginPath();
            crc2.lineTo(_x + light, _y + hue);
            crc2.lineTo(_x, _y + light);
            crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.closePath();
            crc2.lineWidth = saturation / hue;
            crc2.stroke();

        }

    }
}