var beachPolymorphie;
(function (beachPolymorphie) {
    class SuperMoves {
        position;
        velocity;
        size;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new beachPolymorphie.Vector(50, 50);
            this.velocity = new beachPolymorphie.Vector(1, 0);
        }
        move(_timeslice) {
            //  console.log("Moveable move");
            let movement = new beachPolymorphie.Vector(this.velocity.x, this.velocity.y);
            movement.scale(_timeslice);
            this.position.add(movement);
            if (this.position.x < 0)
                this.position.x += beachPolymorphie.context.canvas.width;
            if (this.position.y < 0)
                this.position.y += beachPolymorphie.context.canvas.height;
            if (this.position.x > beachPolymorphie.context.canvas.width)
                this.position.x -= beachPolymorphie.context.canvas.width;
            if (this.position.y > beachPolymorphie.context.canvas.height)
                this.position.y -= beachPolymorphie.context.canvas.height;
        }
        draw() {
            // console.log("update");
        }
    }
    beachPolymorphie.SuperMoves = SuperMoves;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=SuperMoves.js.map