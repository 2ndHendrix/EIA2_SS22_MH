namespace A1_2_Events {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", mouseEvent);
        document.addEventListener("click", clickEvent);
        document.addEventListener("keyup", keyUpEvent);
        document.addEventListener("click", customButtonEvent);
    }

    function mouseEvent(_event: MouseEvent): void {
        //Display Mouse position and events target in span
        var posX: number = _event.clientX;
        var posY: number = _event.clientY;
        var mousePosition: string = "x: " + posX + "y: " + posY;
        console.log(mousePosition);
        // Select Span Element (queryselector)
        let infobox: HTMLElement = <HTMLElement>document.querySelector("span");
        //Sets Target as HTML Span Element
        let target: HTMLElement = <HTMLElement>_event.target;
        // Prints px position on span element
        infobox.innerHTML = "Mouseposition" + "<br> " + posX + " px" + "<br>" + posY + " px" + "<br>" + target;
        // Gives Position the x and y coordinates which the mouse is on currently
        infobox.style.left = posX + 10 + "px";
        infobox.style.top = posY + "px";

    }

    function clickEvent(_event: Event): void {
        //log events type, target. currentTarget and the whole eventobject to console
        console.log(typeof _event);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("event", _event);
    }

    function keyUpEvent(_event: Event): void {
        //log events type, target, currentTarget and the whole eventobject to console
        console.log(typeof _event);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("event", _event);
    }

    function customButtonEvent(_event: Event): void {
        let button: HTMLButtonElement = document.querySelector("button");
        console.log(button);


    }
}