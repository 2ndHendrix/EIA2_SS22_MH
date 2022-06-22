var beachPolymorphie;
(function (beachPolymorphie) {
    let imageData;
    let superMove = [];
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        beachPolymorphie.context = document.querySelector("canvas").getContext("2d");
        imageData = beachPolymorphie.context.getImageData(0, 0, 380, 680);
        beachPolymorphie.context.canvas.width = 380;
        beachPolymorphie.context.canvas.height = 680;
        buildBird();
        buildCloud();
        buildShip();
        window.setInterval(update, 20);
    }
    function buildBird() {
        let bird = new beachPolymorphie.Bird();
        superMove.push(bird);
    }
    function buildCloud() {
        let cloud = new beachPolymorphie.Cloud();
        superMove.push(cloud);
    }
    function buildShip() {
        console.log("Ship built");
        let ship = new beachPolymorphie.Ship();
        superMove.push(ship);
    }
    function update() {
        buildBackground(0, 0);
        for (let moves of superMove) {
            moves.move(1 / 25);
            moves.draw();
        }
    }
    function buildBackground(_x, _y) {
        //WATER
        let gradientWater = beachPolymorphie.context.createLinearGradient(0, 0, 0, 450);
        gradientWater.addColorStop(0.5, "#05376d");
        gradientWater.addColorStop(0.7, "#1457a1");
        gradientWater.addColorStop(0.9, "#0079ff");
        gradientWater.addColorStop(1.0, "#6497cf");
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.strokeStyle = gradientWater;
        beachPolymorphie.context.fillStyle = gradientWater;
        beachPolymorphie.context.moveTo(_x, _y + 200);
        beachPolymorphie.context.lineTo(_x + 380, _y + 200);
        beachPolymorphie.context.lineTo(_x + 380, _y + 475);
        beachPolymorphie.context.lineTo(_x, _y + 475);
        beachPolymorphie.context.lineTo(_x, _y + 200);
        beachPolymorphie.context.closePath();
        beachPolymorphie.context.stroke();
        beachPolymorphie.context.fill();
        //BEACH
        let gradientBeach = beachPolymorphie.context.createLinearGradient(0, 100, 0, 625);
        gradientBeach.addColorStop(0.5, "#fccb00");
        gradientBeach.addColorStop(0.7, "#fdd52b");
        gradientBeach.addColorStop(0.9, "#fee060");
        gradientBeach.addColorStop(1.0, "#fce997");
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.strokeStyle = gradientBeach;
        beachPolymorphie.context.fillStyle = gradientBeach;
        beachPolymorphie.context.moveTo(_x, _y + 475);
        beachPolymorphie.context.bezierCurveTo(370, 470, 10, 400, 100, 400);
        beachPolymorphie.context.lineTo(_x + 380, _y + 475);
        beachPolymorphie.context.lineTo(_x + 380, _y + 780);
        beachPolymorphie.context.lineTo(_x, _y + 780);
        beachPolymorphie.context.lineTo(_x, _y + 475);
        beachPolymorphie.context.closePath();
        beachPolymorphie.context.stroke();
        beachPolymorphie.context.fill();
        //SKY
        let gradientSKY = beachPolymorphie.context.createLinearGradient(0, 100, 0, 200);
        gradientSKY.addColorStop(0.5, "#aad6ff");
        gradientSKY.addColorStop(0.7, "#91c8fb");
        gradientSKY.addColorStop(0.9, "#73bafb");
        gradientSKY.addColorStop(1.0, "#59aefd");
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.strokeStyle = gradientSKY;
        beachPolymorphie.context.fillStyle = gradientSKY;
        beachPolymorphie.context.moveTo(_x + 0, _y + 0);
        beachPolymorphie.context.lineTo(_x + 380, _y + 0);
        beachPolymorphie.context.lineTo(_x + 380, _y + 200);
        beachPolymorphie.context.lineTo(_x + 0, _y + 200);
        beachPolymorphie.context.lineTo(_x + 0, _y + 0);
        beachPolymorphie.context.closePath();
        beachPolymorphie.context.stroke();
        beachPolymorphie.context.fill();
        //SUN
        let r1 = 40;
        let r2 = 300;
        let gradientSun = beachPolymorphie.context.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradientSun.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
        beachPolymorphie.context.save();
        beachPolymorphie.context.translate(_x + 50, _y + 30);
        beachPolymorphie.context.fillStyle = gradientSun;
        beachPolymorphie.context.arc(0, 0, r2, 0, 2 * Math.PI);
        beachPolymorphie.context.fill();
        beachPolymorphie.context.restore();
        // VACATIONERS
        //Person1
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#00bcd4";
        beachPolymorphie.context.fillRect(300, 610, 10, 25);
        beachPolymorphie.context.fill();
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#202323";
        beachPolymorphie.context.arc(305, 605, 6, 0, 2 * Math.PI);
        beachPolymorphie.context.fill();
        //Person2
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#28df95";
        beachPolymorphie.context.fillRect(120, 650, 10, 20);
        beachPolymorphie.context.fill();
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#482112";
        beachPolymorphie.context.arc(125, 645, 6, 0, 2 * Math.PI);
        beachPolymorphie.context.fill();
        //Person4 im Wasser 
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#c9d4c4";
        beachPolymorphie.context.fillRect(50, 450, 10, 15);
        beachPolymorphie.context.fill();
        beachPolymorphie.context.beginPath();
        beachPolymorphie.context.fillStyle = "#8c6013";
        beachPolymorphie.context.arc(54.5, 445, 6, 0, 2 * Math.PI);
        beachPolymorphie.context.fill();
    }
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=main.js.map