import React, { useEffect, useState } from "react";
import { Particle, getParticleColor } from "./canvasParticle";

const HeaderCanvas = props => {

    const CANVAS_WIDTH = 1200;
    const CANVAS_HEIGHT = 600;

    var canvasElement = useState(null);

    var fpsInterval, now, then, elapsed;

    var lastTemperature = 50;
    var lastSpeed = 5;
    var lastVibration = 20;
    var lastDistortion = 0;
    var lastSizeDistortion = 0;

    var mouseIn = true;

    // Se inicializan las partículas
    const particles = [];
    for (let i = 0; i < 400; i++) {
        const size = Math.round((Math.random() * 15)) + 5;

        const positionX = Math.round((Math.random() * CANVAS_WIDTH)) + 70;
        const positionY = Math.round((Math.random() * CANVAS_HEIGHT)) + 70;

        particles.push(new Particle(positionX, positionY, size, getParticleColor(), lastSpeed));
    }

    /**
     * Función que comprueba si hay cambios en las variables del componente padre
     */
    function checkHeaderParams() {

        const temperatureInput = document.getElementById("canvasTemperature");
        const speedInput = document.getElementById("canvasSpeed");
        const vibrationInput = document.getElementById("canvasVibration");
        const distiortionInput = document.getElementById("canvasDistortion");
        const sizeDistortionInput = document.getElementById("canvasSizeDistortion");

        if (temperatureInput !== undefined && parseInt(temperatureInput.value) !== lastTemperature) {
            lastTemperature = parseInt(temperatureInput.value);

            particles.forEach(p => {
                p.setColor(lastTemperature);
            });

        }

        if (speedInput !== undefined && parseInt(speedInput.value) !== lastSpeed) {
            lastSpeed = parseInt(speedInput.value);

            particles.forEach(p => {
                p.setSpeedThreshold(lastSpeed);
            });

        }

        if (vibrationInput !== undefined && parseInt(vibrationInput.value) !== lastVibration) {
            lastVibration = parseInt(vibrationInput.value);

            particles.forEach(p => {
                p.randomMovement = lastVibration;
            });
        }

        if (distiortionInput !== undefined && parseInt(distiortionInput.value) !== lastDistortion) {
            lastDistortion = parseInt(distiortionInput.value);

            particles.forEach(p => {
                p.distortion = lastDistortion;
            });
        }

        if (sizeDistortionInput !== undefined && parseInt(sizeDistortionInput.value) !== lastSizeDistortion) {
            lastSizeDistortion = parseInt(sizeDistortionInput.value);

            particles.forEach(p => {
                p.sizeDistortion = lastSizeDistortion;
            });
        }

    }

    /**
     * Método donde se dibuja el canvas
     */
    function draw() {
        var c = document.getElementById("header_canvas");
        var ctx = c.getContext("2d");

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 1200, 600);

        ctx.fill();

        particles.forEach(p => { p.update(c); p.draw(ctx); });
        checkHeaderParams();

    }

    function start(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
        animation();
    }

    function animation() {

        window.requestAnimationFrame(animation);

        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            draw();
        }

    }
    // Equivalente a cuando se crea o actualiza el componente
    useEffect(() => {
        start(60);
        window.addEventListener('mousemove', changeParticleInitialPositions);
        window.addEventListener('mouseout', changeParticleInitialPositions);
    })

    /**
     * Cambia la posición inicial de todas las partículas al punto en 
     * el que se encuentre el ratón o a un punto aleatorio en caso de 
     * que este se salga de la pantalla.
     * @param {e} evento del ratón 
     */
    function changeParticleInitialPositions(e) {
        particles.forEach(p => {
            var positionX;
            var positionY;

            if (e.type === 'mouseout') {
                positionX = Math.round((Math.random() * CANVAS_WIDTH)) + 70;
                positionY = Math.round((Math.random() * CANVAS_HEIGHT)) + 70;
            } else {
                positionX = e.clientX * (CANVAS_WIDTH / window.innerWidth);
                positionY = (e.clientY + document.documentElement.scrollTop) * (CANVAS_HEIGHT / window.innerHeight);
            }

            if (mouseIn && positionY > CANVAS_HEIGHT) {
                mouseIn = false;
            } else {
                mouseIn = true;
                p.changeInitialPosition(positionX, positionY);
            }

        });

    }

    return <canvas id="header_canvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvasElement.current} {...props} />
}

export default HeaderCanvas