namespace beachAnimation {

    export class Ship {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(45, 50); 
            this.velocity = new Vector(30, 0); 
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

            //Hull
            context.beginPath();
            context.strokeStyle = "#90959a";
            context.moveTo(225, 275);
            context.lineTo(325, 275);
            context.lineTo(325, 225);
            context.lineTo(300, 225);
            context.lineTo(300, 250);
            context.lineTo(200, 250);
            context.lineTo(225, 275);

            context.fillStyle = "#90959a";
            context.fill();
            context.closePath();
            context.stroke();

            //Red part
            context.beginPath();
            context.strokeStyle = "#db3e00";
            context.moveTo(225, 275);
            context.lineTo(325, 275);
            context.lineTo(325, 265);
            context.lineTo(215, 265);
            context.lineTo(225, 275);

            context.fillStyle = "#db3e00";
            context.fill();
            context.closePath();
            context.stroke();

            //Windows
            context.beginPath();
            context.arc(313, 240, 5, 0, Math.PI * 2);
            context.closePath();
            context.arc(250, 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(260, 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(270, 256, 3, 0, Math.PI * 2);
            context.closePath();
            context.arc(280, 256, 3, 0, Math.PI * 2);

            context.fillStyle = "#000000";
            context.fill();
            context.closePath();
            context.restore();
        }
    }
}