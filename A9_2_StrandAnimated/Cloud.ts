namespace beachAnimation {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(50, 50); 
            this.velocity = new Vector(3, 0); 
            this.size = _size;
        }

        animate(_timeslice: number): void {
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