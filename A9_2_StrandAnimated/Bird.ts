namespace beachAnimation {

    export class Bird {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(0, 50); 
            this.velocity = new Vector(1, 0); 
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

            context.moveTo(50, 150);
            context.bezierCurveTo(50, 150, 60, 100, 75, 150);
            context.moveTo(70, 150);
            context.bezierCurveTo(80, 150, 60, 100, 100, 150);

            context.moveTo(100, 200);
            context.bezierCurveTo(100, 200, 110, 150, 125, 200);
            context.moveTo(120, 200);
            context.bezierCurveTo(130, 200, 110, 150, 150, 200);

            context.lineWidth = 3;
            context.strokeStyle = "#000000";
            context.stroke();

            context.restore();
        }
    }
}
