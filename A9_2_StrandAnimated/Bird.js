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
                this.position = new beachAnimation.Vector(50, 50);
            this.velocity = new beachAnimation.Vector(10, 0);
            this.size = _size;
        }
        animateBird(_timeslice) {
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
        drawBird() {
            beachAnimation.context.save();
            beachAnimation.context.beginPath();
            beachAnimation.context.moveTo(this.position.x, this.position.y);
            beachAnimation.context.quadraticCurveTo(this.position.x + 15, this.position.y - 15, this.position.x + 60, this.position.y);
            beachAnimation.context.moveTo(this.position.x, this.position.y);
            beachAnimation.context.quadraticCurveTo(this.position.x - 20, this.position.y - 7, this.position.x - 60, this.position.y);
            beachAnimation.context.strokeStyle = "#000000";
            beachAnimation.context.lineWidth = 2;
            beachAnimation.context.stroke();
            beachAnimation.context.closePath();
            beachAnimation.context.restore();
        }
    }
    beachAnimation.Bird = Bird;
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=Bird.js.map