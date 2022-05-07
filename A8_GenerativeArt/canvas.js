var canvas;
(function (canvas_1) {
    let hue;
    let saturation;
    let light;
    window.addEventListener("load", hndload);
    function hndload(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let random = Math.random() * 100;
        let gradient = crc2.createLinearGradient(50, 100, 150, 400);
        hue = Math.round(Math.random() * 400);
        gradient.addColorStop(0, "hsl(" + hue + "," + "13%, " + "55%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 2000, 1000);
        //gernerate random number
        for (let index = 0; index < 35; index++) {
            let x = Math.random() * 1000;
            let y = Math.random() * 1000;
            buildCircle(x, y);
            buildRectangle(x, y);
            buildText(x, y);
            buildLines(x, y);
        }
        function buildCircle(_x, _y) {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);
            let radius = Math.round(Math.random() * random);
            crc2.beginPath();
            crc2.arc(_x, _y, radius, 0, Math.PI * 2);
            crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.fill();
            crc2.closePath();
        }
        function buildRectangle(_x, _y) {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);
            let x1 = Math.round(Math.random() * 1000);
            let y1 = Math.round(Math.random() * 1000);
            let x2 = Math.round(Math.random() * 250);
            let y2 = Math.round(Math.random() * 125);
            crc2.beginPath();
            crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.rect(_x, _y, x2, y2);
            crc2.stroke();
            crc2.closePath();
        }
        function buildText(_x, _y) {
            hue = Math.round(Math.random() * random);
            saturation = Math.round(Math.random() * random);
            light = Math.round(Math.random() * random);
            crc2.font = "30px Comic Sans MS";
            crc2.fillText("But is it art?", _x, _y);
            crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + light + "%" + ")";
            crc2.lineWidth = saturation / hue;
        }
        function buildLines(_x, _y) {
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
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map