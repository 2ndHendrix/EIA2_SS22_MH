namespace beachPolymorphie {

    export class Bird extends SuperMoves {
    
        constructor(_size?: Vector, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(150, 150);
            this.velocity = new Vector(10, 0);
            this.size = _size;

        }

        draw(): void {
            context.save();

            context.beginPath();
            context.moveTo(this.position.x, this.position.y);
            context.quadraticCurveTo(this.position.x + 15, this.position.y - 15, this.position.x + 60, this.position.y);
            context.moveTo(this.position.x, this.position.y);
            context.quadraticCurveTo(this.position.x - 20, this.position.y - 7, this.position.x - 60, this.position.y);
            context.strokeStyle = "#000000";
            context.lineWidth = 2;
            context.stroke();
            context.closePath();
            
            context.restore();

        }
    }
}
