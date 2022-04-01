var A1_2_Events;
(function (A1_2_Events) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", mouseEvent);
        document.addEventListener("click", clickEvent);
        document.addEventListener("keyup", keyUpEvent);
        document.addEventListener("click", customButtonEvent);
    }
    function mouseEvent(_event) {
        //Display Mouse position and events target in span
        var posX = _event.clientX;
        var posY = _event.clientY;
        var mousePosition = "x: " + posX + "y: " + posY;
        console.log(mousePosition);
        // Select Span Element (queryselector)
        let infobox = document.querySelector("span");
        //Sets Target as HTML Span Element
        let target = _event.target;
        // Prints px position on span element
        infobox.innerHTML = "Mouseposition" + "<br> " + posX + " px" + "<br>" + posY + " px" + "<br>" + target;
        // Gives Position the x and y coordinates which the mouse is on currently
        infobox.style.left = posX + 10 + "px";
        infobox.style.top = posY + "px";
    }
    function clickEvent(_event) {
        //log events type, target. currentTarget and the whole eventobject to console
        console.log(typeof _event);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("event", _event);
    }
    function keyUpEvent(_event) {
        //log events type, target, currentTarget and the whole eventobject to console
        console.log(typeof _event);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("event", _event);
    }
    function customButtonEvent(_event) {
        let button = document.querySelector("button");
        console.log(button);
    }
})(A1_2_Events || (A1_2_Events = {}));
//# sourceMappingURL=eventInspector.js.map