namespace beachPolymorphie {

    export class SuperMoves {

        position: Vector;
        velocity: Vector;
        size: Vector;


        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(50, 50);

            this.velocity = new Vector(1, 0);


        }

        move(_timeslice: number): void {
          //  console.log("Moveable move");
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
            // console.log("update");
        }

    }
}