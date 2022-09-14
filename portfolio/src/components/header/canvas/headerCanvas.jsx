import React, { useRef, useEffect } from "react";

const HeaderCanvas = props => {

    const CANVAS_WIDTH = 1200;
    const CANVAS_HEIGHT = 200;

    var canvasElement = useRef(null);

    // Equivalente a cuando se crea o actualiza el componente
    useEffect(() => {
        canvasElement.current = document.getElementById("header_canvas");

        var ctx = canvasElement.current.getContext("2d");
        //initialize(ctx);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#203241'
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fill();

        setInterval(() => {
            ctx.fillStyle = '#203241'
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.fill();

        }, 100);

    })

    return <canvas id="header_canvas" width={CANVAS_WIDTH} heigh={CANVAS_HEIGHT} ref={canvasElement} {...props} />
}

export default HeaderCanvas