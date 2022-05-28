var beachAnimation;
(function (beachAnimation) {
    class Bird {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new beachAnimation.Vector(0, 50);
            this.velocity = new beachAnimation.Vector(1, 0);
            this.size = _size;
        }
        animate(_timeslice) {
            let movement = new beachAnimation.Vector(this.velocity.x, this.velocity.y);
            movement.scale(_timeslice);
            this.position.add(movement);
            if (this.position.x < 0)
                this.position.x += beachAnimation.context.canvas.width;
            if (this.position.y < 0)
                this.position.y += beachAnimation.context.canvas.height;
            if (this.position.x > beachAnimation.context.canvas.width)
                this.position.x -= beachAnimation.context.canvas.width;
            if (this.position.y > beachAnimation.context.canvas.height)
                this.position.y -= beachAnimation.context.canvas.height;
        }
        draw() {
            beachAnimation.context.save();
            beachAnimation.context.beginPath();
            beachAnimation.context.moveTo(50, 150);
            beachAnimation.context.bezierCurveTo(50, 150, 60, 100, 75, 150);
            beachAnimation.context.moveTo(70, 150);
            beachAnimation.context.bezierCurveTo(80, 150, 60, 100, 100, 150);
            beachAnimation.context.moveTo(100, 200);
            beachAnimation.context.bezierCurveTo(100, 200, 110, 150, 125, 200);
            beachAnimation.context.moveTo(120, 200);
            beachAnimation.context.bezierCurveTo(130, 200, 110, 150, 150, 200);
            beachAnimation.context.lineWidth = 3;
            beachAnimation.context.strokeStyle = "#000000";
            beachAnimation.context.stroke();
            beachAnimation.context.restore();
        }
    }
    beachAnimation.Bird = Bird;
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=Bird.js.map