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
                this.position = new beachAnimation.Vector(45, 50);
            this.velocity = new beachAnimation.Vector(30, 0);
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
            beachAnimation.context.strokeStyle = "#90959a";
            beachAnimation.context.moveTo(225, 275);
            beachAnimation.context.lineTo(325, 275);
            beachAnimation.context.lineTo(325, 225);
            beachAnimation.context.lineTo(300, 225);
            beachAnimation.context.lineTo(300, 250);
            beachAnimation.context.lineTo(200, 250);
            beachAnimation.context.lineTo(225, 275);
            beachAnimation.context.fillStyle = "#90959a";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.stroke();
            //Red part
            beachAnimation.context.beginPath();
            beachAnimation.context.strokeStyle = "#db3e00";
            beachAnimation.context.moveTo(225, 275);
            beachAnimation.context.lineTo(325, 275);
            beachAnimation.context.lineTo(325, 265);
            beachAnimation.context.lineTo(215, 265);
            beachAnimation.context.lineTo(225, 275);
            beachAnimation.context.fillStyle = "#db3e00";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.stroke();
            //Windows
            beachAnimation.context.beginPath();
            beachAnimation.context.arc(313, 240, 5, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(250, 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(260, 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(270, 256, 3, 0, Math.PI * 2);
            beachAnimation.context.closePath();
            beachAnimation.context.arc(280, 256, 3, 0, Math.PI * 2);
            beachAnimation.context.fillStyle = "#000000";
            beachAnimation.context.fill();
            beachAnimation.context.closePath();
            beachAnimation.context.restore();
        }
    }
    beachAnimation.Ship = Ship;
})(beachAnimation || (beachAnimation = {}));
//# sourceMappingURL=Ship.js.map