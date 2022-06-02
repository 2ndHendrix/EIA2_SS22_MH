var beachAnimation;
(function (beachAnimation) {
    class Ship {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new beachAnimation.Vector(50, 50);
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
            //Hull
            beachAnimation.context.beginPath();
            beachAnimation.context.moveTo(this.position.x, this.position.y + 275);
            beachAnimation.context.lineTo(this.position.x + 100, this.position.y + 275);
            beachAnimation.context.lineTo(this.position.x + 125, this.position.y + 250);
            beachAnimation.context.lineTo(this.position.x + 0, this.position.y + 250);
            beachAnimation.context.lineTo(this.position.x + 0, this.position.y + 225);
            beachAnimation.context.lineTo(this.position.x + 25, this.position.y + 225);
            beachAnimation.context.lineTo(this.position.x + 25, this.position.y + 250);
            beachAnimation.context.lineTo(this.position.x + 0, this.position.y + 250);
            beachAnimation.context.strokeStyle = "#909599";
            beachAnimation.context.fillStyle = "#90959a";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.stroke();
            beachAnimation.context.restore();
            //Red part
            beachAnimation.context.save();
            beachAnimation.context.beginPath();
            beachAnimation.context.strokeStyle = "#db3e00";
            beachAnimation.context.moveTo(this.position.x, this.position.y + 275);
            beachAnimation.context.lineTo(this.position.x + 100, this.position.y + 275);
            beachAnimation.context.lineTo(this.position.x + 110, this.position.y + 265);
            beachAnimation.context.lineTo(this.position.x + 0, this.position.y + 265);
            beachAnimation.context.fillStyle = "#db3e00";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.stroke();
            beachAnimation.context.restore();
            //Windows
            beachAnimation.context.save();
            beachAnimation.context.beginPath();
            beachAnimation.context.arc(this.position.x + 12, this.position.y + 240, 5, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(this.position.x + 30, this.position.y + 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(this.position.x + 50, this.position.y + 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(this.position.x + 70, this.position.y + 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(this.position.x + 90, this.position.y + 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.fillStyle = "#000000";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.restore();
        }
    }
    beachAnimation.Ship = Ship;
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=Ship.js.map