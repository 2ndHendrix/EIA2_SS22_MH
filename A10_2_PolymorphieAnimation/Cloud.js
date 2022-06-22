var beachPolymorphie;
(function (beachPolymorphie) {
    class Cloud extends beachPolymorphie.SuperMoves {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new beachPolymorphie.Vector(50, 50);
            this.velocity = new beachPolymorphie.Vector(3, 0);
            this.size = _size;
        }
        draw() {
            beachPolymorphie.context.save();
            beachPolymorphie.context.beginPath();
            beachPolymorphie.context.arc(this.position.x + 10, this.position.y + 30, 25, 0, 2 * Math.PI);
            beachPolymorphie.context.arc(this.position.x + 80, this.position.y + 30, 40, 0, 2 * Math.PI);
            beachPolymorphie.context.arc(this.position.x + 50, this.position.y + 20, 35, 0, 2 * Math.PI);
            beachPolymorphie.context.arc(this.position.x + 100, this.position.y + 40, 25, 0, 2 * Math.PI);
            beachPolymorphie.context.strokeStyle = "white";
            beachPolymorphie.context.stroke();
            beachPolymorphie.context.fillStyle = "white";
            beachPolymorphie.context.fill();
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.restore();
        }
    }
    beachPolymorphie.Cloud = Cloud;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=Cloud.js.map