var beachAnimation;
(function (beachAnimation) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new beachAnimation.Vector(50, 50);
            this.velocity = new beachAnimation.Vector(5, 0);
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
            beachAnimation.context.arc(this.position.x + 10, this.position.y + 30, 25, 0, 2 * Math.PI);
            beachAnimation.context.arc(this.position.x + 80, this.position.y + 30, 40, 0, 2 * Math.PI);
            beachAnimation.context.arc(this.position.x + 50, this.position.y + 20, 35, 0, 2 * Math.PI);
            beachAnimation.context.arc(this.position.x + 100, this.position.y + 40, 25, 0, 2 * Math.PI);
            beachAnimation.context.strokeStyle = "white";
            beachAnimation.context.stroke();
            beachAnimation.context.fillStyle = "white";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.restore();
        }
    }
    beachAnimation.Cloud = Cloud;
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=Cloud.js.map