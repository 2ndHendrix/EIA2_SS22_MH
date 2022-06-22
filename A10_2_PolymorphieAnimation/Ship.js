var beachPolymorphie;
(function (beachPolymorphie) {
    class Ship extends beachPolymorphie.SuperMoves {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new beachPolymorphie.Vector(50, 50);
            this.velocity = new beachPolymorphie.Vector(10, 0);
            this.size = _size;
        }
        draw() {
            beachPolymorphie.context.save();
            //Hull
            beachPolymorphie.context.beginPath();
            beachPolymorphie.context.moveTo(this.position.x, this.position.y + 275);
            beachPolymorphie.context.lineTo(this.position.x + 100, this.position.y + 275);
            beachPolymorphie.context.lineTo(this.position.x + 125, this.position.y + 250);
            beachPolymorphie.context.lineTo(this.position.x + 0, this.position.y + 250);
            beachPolymorphie.context.lineTo(this.position.x + 0, this.position.y + 225);
            beachPolymorphie.context.lineTo(this.position.x + 25, this.position.y + 225);
            beachPolymorphie.context.lineTo(this.position.x + 25, this.position.y + 250);
            beachPolymorphie.context.lineTo(this.position.x + 0, this.position.y + 250);
            beachPolymorphie.context.strokeStyle = "#909599";
            beachPolymorphie.context.fillStyle = "#90959a";
            beachPolymorphie.context.fill();
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.stroke();
            beachPolymorphie.context.restore();
            //Red part
            beachPolymorphie.context.save();
            beachPolymorphie.context.beginPath();
            beachPolymorphie.context.strokeStyle = "#db3e00";
            beachPolymorphie.context.moveTo(this.position.x, this.position.y + 275);
            beachPolymorphie.context.lineTo(this.position.x + 100, this.position.y + 275);
            beachPolymorphie.context.lineTo(this.position.x + 110, this.position.y + 265);
            beachPolymorphie.context.lineTo(this.position.x + 0, this.position.y + 265);
            beachPolymorphie.context.fillStyle = "#db3e00";
            beachPolymorphie.context.fill();
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.stroke();
            beachPolymorphie.context.restore();
            //Windows
            beachPolymorphie.context.save();
            beachPolymorphie.context.beginPath();
            beachPolymorphie.context.arc(this.position.x + 12, this.position.y + 240, 5, 0, Math.PI * 2);
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.arc(this.position.x + 30, this.position.y + 256, 3, 0, Math.PI * 2);
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.arc(this.position.x + 50, this.position.y + 256, 3, 0, Math.PI * 2);
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.arc(this.position.x + 70, this.position.y + 256, 3, 0, Math.PI * 2);
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.arc(this.position.x + 90, this.position.y + 256, 3, 0, Math.PI * 2);
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.fillStyle = "#000000";
            beachPolymorphie.context.fill();
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.restore();
        }
    }
    beachPolymorphie.Ship = Ship;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=Ship.js.map