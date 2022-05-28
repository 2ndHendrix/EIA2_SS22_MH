namespace beachAnimation {

    let positionX: number = 0;
    let positionY: number = 0;

    export let context: CanvasRenderingContext2D;
    let imageData: ImageData;
    let shipArray: Ship[] = [];
    let cloudArray: Cloud[] = [];
    let birdArray: Bird[] = [];

    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        context = document.querySelector("canvas").getContext("2d");
        imageData = context.getImageData(0, 0, 380, 680);
        context.canvas.width = 380;
        context.canvas.height = 680;

        buildCloud(4);
        buildBird(3);
        buildShip(1);

        window.setInterval(update, 15);

    }

    // Draw and animate CLOUD
    function buildCloud(_cloudNum: number): void {
        for (let i: number = 0; i < _cloudNum; i++) {
            let cloud: Cloud = new Cloud(1);
            cloudArray.push(cloud);
        }
    }

    // Draw and animate SHIP
    function buildShip(_shipNum: number): void {
        for (let i: number = 0; i < _shipNum; i++) {
            let ship: Ship = new Ship(1);
            shipArray.push(ship);
        }
    }

    // Draw and animate BIRD
    function buildBird(_birdNum: number): void {
        for (let i: number = 0; i < _birdNum; i++) {
            let bird: Bird = new Bird(1);
            birdArray.push(bird);
        }
    }

    function background(_x: number, _y: number): void {

        //WATER
        let gradientWater: CanvasGradient = context.createLinearGradient(0, 0, 0, 450);
        gradientWater.addColorStop(0.5, "#05376d");
        gradientWater.addColorStop(0.7, "#1457a1");
        gradientWater.addColorStop(0.9, "#0079ff");
        gradientWater.addColorStop(1.0, "#6497cf");

        context.beginPath();
        context.strokeStyle = gradientWater;
        context.fillStyle = gradientWater;

        context.moveTo(_x, _y + 200);
        context.lineTo(_x + 380, _y + 200);
        context.lineTo(_x + 380, _y + 475);
        context.lineTo(_x, _y + 475);
        context.lineTo(_x, _y + 200);

        context.closePath();
        context.stroke();
        context.fill();

        //BEACH
        let gradientBeach: CanvasGradient = context.createLinearGradient(0, 100, 0, 625);
        gradientBeach.addColorStop(0.5, "#fccb00");
        gradientBeach.addColorStop(0.7, "#fdd52b");
        gradientBeach.addColorStop(0.9, "#fee060");
        gradientBeach.addColorStop(1.0, "#fce997");

        context.beginPath();
        context.strokeStyle = gradientBeach;
        context.fillStyle = gradientBeach;

        context.moveTo(_x, _y + 475);
        context.bezierCurveTo(370, 470, 10, 400, 100, 400);
        context.lineTo(_x + 380, _y + 475);
        context.lineTo(_x + 380, _y + 780);
        context.lineTo(_x, _y + 780);
        context.lineTo(_x, _y + 475);

        context.closePath();
        context.stroke();
        context.fill();

        //SKY

        let gradientSKY: CanvasGradient = context.createLinearGradient(0, 100, 0, 200);
        gradientSKY.addColorStop(0.5, "#aad6ff");
        gradientSKY.addColorStop(0.7, "#91c8fb");
        gradientSKY.addColorStop(0.9, "#73bafb");
        gradientSKY.addColorStop(1.0, "#59aefd");

        context.beginPath();
        context.strokeStyle = gradientSKY;
        context.fillStyle = gradientSKY;

        context.moveTo(_x + 0, _y + 0);
        context.lineTo(_x + 380, _y + 0);
        context.lineTo(_x + 380, _y + 200);
        context.lineTo(_x + 0, _y + 200);
        context.lineTo(_x + 0, _y + 0);

        context.closePath();
        context.stroke();
        context.fill();

        //SUN
        let r1: number = 40;
        let r2: number = 300;
        let gradientSun: CanvasGradient = context.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradientSun.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

        context.save();
        context.translate(_x + 50, _y + 30);

        context.fillStyle = gradientSun;
        context.arc(0, 0, r2, 0, 2 * Math.PI);
        context.fill();

        context.restore();

        // VACATIONERS

        //Person1
        context.beginPath();
        context.fillStyle = "#00bcd4";
        context.fillRect(300, 610, 10, 25);
        context.fill();
        context.beginPath();
        context.fillStyle = "#202323";
        context.arc(305, 605, 6, 0, 2 * Math.PI);
        context.fill();

        //Person2
        context.beginPath();
        context.fillStyle = "#28df95";
        context.fillRect(120, 650, 10, 20);
        context.fill();
        context.beginPath();
        context.fillStyle = "#482112";
        context.arc(125, 645, 6, 0, 2 * Math.PI);
        context.fill();


        //Person4 im Wasser 
        context.beginPath();
        context.fillStyle = "#c9d4c4";
        context.fillRect(50, 450, 10, 15);
        context.fill();
        context.beginPath();
        context.fillStyle = "#8c6013";
        context.arc(54.5, 445, 6, 0, 2 * Math.PI);
        context.fill();

    }


    function update(): void {

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
}
