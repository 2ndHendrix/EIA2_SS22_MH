var beachPolymorphie;
(function (beachPolymorphie) {
    class Bird extends beachPolymorphie.SuperMoves {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new beachPolymorphie.Vector(150, 150);
            this.velocity = new beachPolymorphie.Vector(10, 0);
            this.size = _size;
        }
        draw() {
            beachPolymorphie.context.save();
            beachPolymorphie.context.beginPath();
            beachPolymorphie.context.moveTo(this.position.x, this.position.y);
            beachPolymorphie.context.quadraticCurveTo(this.position.x + 15, this.position.y - 15, this.position.x + 60, this.position.y);
            beachPolymorphie.context.moveTo(this.position.x, this.position.y);
            beachPolymorphie.context.quadraticCurveTo(this.position.x - 20, this.position.y - 7, this.position.x - 60, this.position.y);
            beachPolymorphie.context.strokeStyle = "#000000";
            beachPolymorphie.context.lineWidth = 2;
            beachPolymorphie.context.stroke();
            beachPolymorphie.context.closePath();
            beachPolymorphie.context.restore();
        }
    }
    beachPolymorphie.Bird = Bird;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=Bird.js.map