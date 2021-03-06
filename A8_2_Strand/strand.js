var strand;
(function (strand) {
    let positionX = 0;
    let positionY = 0;
    let hue;
    let saturation;
    let light;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let random = Math.random() * 100;
        buildSea(positionX, positionY);
        buildBeach(positionX, positionY);
        buildSky(positionX, positionY);
        buildClouds(positionX + 20, positionY + 150, "#FFFFFF");
        buildClouds(positionX + 200, positionY + 88, "#e5e5e5");
        buildClouds(positionX + 100, positionY, "#ebf1f7");
        buildSun(positionX + 50, positionY + 50, "#fdeb4e", "#ffe60a");
        buildBirds(positionX, positionY);
        buildShip(positionX, positionY);
        buildVacationers(positionX, positionY);
        //  buildVacationers();
        function buildSea(_x, _y) {
            let gradient = crc2.createLinearGradient(0, 0, 0, 450);
            gradient.addColorStop(0.5, "#05376d");
            gradient.addColorStop(0.7, "#1457a1");
            gradient.addColorStop(0.9, "#0079ff");
            gradient.addColorStop(1.0, "#6497cf");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 200);
            crc2.lineTo(_x + 380, _y + 200);
            crc2.lineTo(_x + 380, _y + 475);
            crc2.lineTo(_x, _y + 475);
            crc2.lineTo(_x, _y + 200);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        function buildBeach(_x, _y) {
            let gradient = crc2.createLinearGradient(0, 100, 0, 625);
            gradient.addColorStop(0.5, "#fccb00");
            gradient.addColorStop(0.7, "#fdd52b");
            gradient.addColorStop(0.9, "#fee060");
            gradient.addColorStop(1.0, "#fce997");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 475);
            crc2.bezierCurveTo(370, 470, 10, 400, 100, 400);
            crc2.lineTo(_x + 380, _y + 475);
            crc2.lineTo(_x + 380, _y + 780);
            crc2.lineTo(_x, _y + 780);
            crc2.lineTo(_x, _y + 475);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        function buildSky(_x, _y) {
            let gradient = crc2.createLinearGradient(0, 100, 0, 200);
            gradient.addColorStop(0.5, "#aad6ff");
            gradient.addColorStop(0.7, "#91c8fb");
            gradient.addColorStop(0.9, "#73bafb");
            gradient.addColorStop(1.0, "#59aefd");
            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x + 380, _y + 0);
            crc2.lineTo(_x + 380, _y + 200);
            crc2.lineTo(_x + 0, _y + 200);
            crc2.lineTo(_x + 0, _y + 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        function buildClouds(_x, _y, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(_x + 80, _y + 30, 40, 0, 2 * Math.PI);
            crc2.arc(_x + 50, _y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(_x + 100, _y + 40, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        function buildSun(_x, _y, _strokeColor, _fillColor) {
            let r1 = 40;
            let r2 = 300;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function buildBirds(_y, _x) {
            crc2.beginPath();
            crc2.moveTo(50, 150);
            crc2.bezierCurveTo(50, 150, 60, 100, 75, 150);
            crc2.moveTo(70, 150);
            crc2.bezierCurveTo(80, 150, 60, 100, 100, 150);
            crc2.moveTo(100, 200);
            crc2.bezierCurveTo(100, 200, 110, 150, 125, 200);
            crc2.moveTo(120, 200);
            crc2.bezierCurveTo(130, 200, 110, 150, 150, 200);
            crc2.lineWidth = 3;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }
        function buildShip(_y, _x) {
            //Hull
            crc2.beginPath();
            crc2.strokeStyle = "#90959a";
            crc2.moveTo(225, 275);
            crc2.lineTo(325, 275);
            crc2.lineTo(325, 225);
            crc2.lineTo(300, 225);
            crc2.lineTo(300, 250);
            crc2.lineTo(200, 250);
            crc2.lineTo(225, 275);
            crc2.fillStyle = "#90959a";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            //Red part
            crc2.beginPath();
            crc2.strokeStyle = "#db3e00";
            crc2.moveTo(225, 275);
            crc2.lineTo(325, 275);
            crc2.lineTo(325, 265);
            crc2.lineTo(215, 265);
            crc2.lineTo(225, 275);
            crc2.fillStyle = "#db3e00";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            //Windows
            crc2.beginPath();
            crc2.arc(313, 240, 5, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(250, 256, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(260, 256, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(270, 256, 3, 0, Math.PI * 2);
            crc2.closePath();
            crc2.arc(280, 256, 3, 0, Math.PI * 2);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
        }
        function buildVacationers(_x, _y) {
            //Person1
            crc2.beginPath();
            crc2.fillStyle = "#00bcd4";
            crc2.fillRect(300, 610, 10, 25);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#202323";
            crc2.arc(305, 605, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person2
            crc2.beginPath();
            crc2.fillStyle = "#28df95";
            crc2.fillRect(120, 650, 10, 20);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#482112";
            crc2.arc(125, 645, 6, 0, 2 * Math.PI);
            crc2.fill();
            //Person4 im Wasser 
            crc2.beginPath();
            crc2.fillStyle = "#c9d4c4";
            crc2.fillRect(50, 450, 10, 15);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#8c6013";
            crc2.arc(54.5, 445, 6, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
})(strand || (strand = {}));
//# sourceMappingURL=strand.js.map