namespace beachPolymorphie {

    export class Ship extends SuperMoves {

        constructor(_size?: Vector, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(50, 50);
            this.velocity = new Vector(10, 0);
            this.size = _size;

        }

        draw(): void {
            context.save();

            //Hull
            context.beginPath();
            context.moveTo(this.position.x, this.position.y + 275);
            context.lineTo(this.position.x + 100, this.position.y + 275);
            context.lineTo(this.position.x + 125, this.position.y + 250);
            context.lineTo(this.position.x + 0, this.position.y + 250);
            context.lineTo(this.position.x + 0, this.position.y + 225);
            context.lineTo(this.position.x + 25, this.position.y + 225);
            context.lineTo(this.position.x + 25, this.position.y + 250);
            context.lineTo(this.position.x + 0, this.position.y + 250);


            context.strokeStyle = "#909599";
            context.fillStyle = "#90959a";
            context.fill();
            context.closePath();
            context.stroke();

            context.restore();

            //Red part
            context.save();

            context.beginPath();
            context.strokeStyle = "#db3e00";
            context.moveTo(this.position.x, this.position.y + 275);
            context.lineTo(this.position.x + 100, this.position.y + 275);
            context.lineTo(this.position.x + 110, this.position.y + 265);
            context.lineTo(this.position.x + 0, this.position.y + 265);

            context.fillStyle = "#db3e00";
            context.fill();
            context.closePath();
            context.stroke();

            context.restore();

            //Windows
            context.save();

            context.beginPath();
            context.arc(this.position.x + 12, this.position.y + 240, 5, 0, Math.PI * 2);
            context.closePath();
            context.arc(this.position.x + 30, this.position.y + 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(this.position.x + 50, this.position.y + 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(this.position.x + 70, this.position.y + 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(this.position.x + 90, this.position.y + 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = "#000000";
            context.fill();
            context.closePath();


            context.restore();
        }
    }
}