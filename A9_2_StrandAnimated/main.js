var beachAnimation;
(function (beachAnimation) {
    let positionX = 0;
    let positionY = 0;
    let imageData;
    let shipArray = [];
    let cloudArray = [];
    let birdArray = [];
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        beachAnimation.context = document.querySelector("canvas").getContext("2d");
        imageData = beachAnimation.context.getImageData(0, 0, 380, 680);
        beachAnimation.context.canvas.width = 380;
        beachAnimation.context.canvas.height = 680;
        buildCloud(4);
        buildBird(3);
        buildShip(1);
        window.setInterval(update, 15);
    }
    // Draw and animate CLOUD
    function buildCloud(_cloudNum) {
        for (let i = 0; i < _cloudNum; i++) {
            let cloud = new beachAnimation.Cloud(1);
            cloudArray.push(cloud);
        }
    }
    // Draw and animate SHIP
    function buildShip(_shipNum) {
        for (let i = 0; i < _shipNum; i++) {
            let ship = new beachAnimation.Ship(1);
            shipArray.push(ship);
        }
    }
    // Draw and animate BIRD
    function buildBird(_birdNum) {
        for (let i = 0; i < _birdNum; i++) {
            let bird = new beachAnimation.Bird(1);
            birdArray.push(bird);
        }
    }
    function background(_x, _y) {
        //WATER
        let gradientWater = beachAnimation.context.createLinearGradient(0, 0, 0, 450);
        gradientWater.addColorStop(0.5, "#05376d");
        gradientWater.addColorStop(0.7, "#1457a1");
        gradientWater.addColorStop(0.9, "#0079ff");
        gradientWater.addColorStop(1.0, "#6497cf");
        beachAnimation.context.beginPath();
        beachAnimation.context.strokeStyle = gradientWater;
        beachAnimation.context.fillStyle = gradientWater;
        beachAnimation.context.moveTo(_x, _y + 200);
        beachAnimation.context.lineTo(_x + 380, _y + 200);
        beachAnimation.context.lineTo(_x + 380, _y + 475);
        beachAnimation.context.lineTo(_x, _y + 475);
        beachAnimation.context.lineTo(_x, _y + 200);
        beachAnimation.context.closePath();
        beachAnimation.context.stroke();
        beachAnimation.context.fill();
        //BEACH
        let gradientBeach = beachAnimation.context.createLinearGradient(0, 100, 0, 625);
        gradientBeach.addColorStop(0.5, "#fccb00");
        gradientBeach.addColorStop(0.7, "#fdd52b");
        gradientBeach.addColorStop(0.9, "#fee060");
        gradientBeach.addColorStop(1.0, "#fce997");
        beachAnimation.context.beginPath();
        beachAnimation.context.strokeStyle = gradientBeach;
        beachAnimation.context.fillStyle = gradientBeach;
        beachAnimation.context.moveTo(_x, _y + 475);
        beachAnimation.context.bezierCurveTo(370, 470, 10, 400, 100, 400);
        beachAnimation.context.lineTo(_x + 380, _y + 475);
        beachAnimation.context.lineTo(_x + 380, _y + 780);
        beachAnimation.context.lineTo(_x, _y + 780);
        beachAnimation.context.lineTo(_x, _y + 475);
        beachAnimation.context.closePath();
        beachAnimation.context.stroke();
        beachAnimation.context.fill();
        //SKY
        let gradientSKY = beachAnimation.context.createLinearGradient(0, 100, 0, 200);
        gradientSKY.addColorStop(0.5, "#aad6ff");
        gradientSKY.addColorStop(0.7, "#91c8fb");
        gradientSKY.addColorStop(0.9, "#73bafb");
        gradientSKY.addColorStop(1.0, "#59aefd");
        beachAnimation.context.beginPath();
        beachAnimation.context.strokeStyle = gradientSKY;
        beachAnimation.context.fillStyle = gradientSKY;
        beachAnimation.context.moveTo(_x + 0, _y + 0);
        beachAnimation.context.lineTo(_x + 380, _y + 0);
        beachAnimation.context.lineTo(_x + 380, _y + 200);
        beachAnimation.context.lineTo(_x + 0, _y + 200);
        beachAnimation.context.lineTo(_x + 0, _y + 0);
        beachAnimation.context.closePath();
        beachAnimation.context.stroke();
        beachAnimation.context.fill();
        //SUN
        let r1 = 40;
        let r2 = 300;
        let gradientSun = beachAnimation.context.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradientSun.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
        beachAnimation.context.save();
        beachAnimation.context.translate(_x + 50, _y + 30);
        beachAnimation.context.fillStyle = gradientSun;
        beachAnimation.context.arc(0, 0, r2, 0, 2 * Math.PI);
        beachAnimation.context.fill();
        beachAnimation.context.restore();
        // VACATIONERS
        //Person1
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#00bcd4";
        beachAnimation.context.fillRect(300, 610, 10, 25);
        beachAnimation.context.fill();
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#202323";
        beachAnimation.context.arc(305, 605, 6, 0, 2 * Math.PI);
        beachAnimation.context.fill();
        //Person2
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#28df95";
        beachAnimation.context.fillRect(120, 650, 10, 20);
        beachAnimation.context.fill();
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#482112";
        beachAnimation.context.arc(125, 645, 6, 0, 2 * Math.PI);
        beachAnimation.context.fill();
        //Person4 im Wasser 
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#c9d4c4";
        beachAnimation.context.fillRect(50, 450, 10, 15);
        beachAnimation.context.fill();
        beachAnimation.context.beginPath();
        beachAnimation.context.fillStyle = "#8c6013";
        beachAnimation.context.arc(54.5, 445, 6, 0, 2 * Math.PI);
        beachAnimation.context.fill();
    }
    function update() {
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        // context.clearRect(0, 0, 380, 680);
        background(0, 0);
        for (let bird of birdArray) {
            bird.animate(1 / 50);
            bird.draw();
        }
        for (let ship of shipArray) {
            ship.animate(1 / 50);
            ship.draw();
        }
        for (let cloud of cloudArray) {
            cloud.animate(1 / 50);
            cloud.draw();
        }
    }
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=main.js.map