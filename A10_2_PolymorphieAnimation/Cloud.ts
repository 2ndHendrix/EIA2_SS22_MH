namespace beachPolymorphie {

    export class Cloud extends SuperMoves {

        constructor(_size?: Vector, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(50, 50);
            this.velocity = new Vector(3, 0);
            this.size = _size;

        }

        draw(): void {

            context.save();
            context.beginPath();


            context.arc(this.position.x + 10, this.position.y + 30, 25, 0, 2 * Math.PI);
            context.arc(this.position.x + 80, this.position.y + 30, 40, 0, 2 * Math.PI);
            context.arc(this.position.x + 50, this.position.y + 20, 35, 0, 2 * Math.PI);
            context.arc(this.position.x + 100, this.position.y + 40, 25, 0, 2 * Math.PI);

            context.strokeStyle = "white";
            context.stroke();
            context.fillStyle = "white";
            context.fill();
            context.closePath();

            context.restore();

        }
    }
}
