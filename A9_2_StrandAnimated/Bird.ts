namespace beachAnimation {

    export class Bird {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(50, 50); 
            this.velocity = new Vector(10, 0); 
            this.size = _size;
        }


        animateBird(_timeslice: number): void {
            let movement: Vector = new Vector(this.velocity.x, this.velocity.y);
            movement.scale(_timeslice);
            this.position.add(movement);

            if (this.position.x < 0)
                this.position.x += context.canvas.width;
            if (this.position.y < 0)
                this.position.y += context.canvas.height;
            if (this.position.x > context.canvas.width)
                this.position.x -= context.canvas.width;
            if (this.position.y > context.canvas.height)
                this.position.y -= context.canvas.height;
        }

        drawBird(): void {
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
