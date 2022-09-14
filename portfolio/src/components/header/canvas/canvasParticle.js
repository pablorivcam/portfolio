import CanvasObject from "./canvasObject";

export class Particle extends CanvasObject {

    initialX = 0;
    initialY = 0;

    aX = 1;
    aY = 2;
    color = '#99000099'
    maxSpeed = 20;

    canvas_width = 20;
    canvas_height = 20;

    /**
     * Crea una nueva partícula
     * @param {*} initialX posición X inicial de la partícula
     * @param {*} initialY  posición Y inicial de la partícula
     * @param {*} size tamaño de la partícula
     * @param {*} color color de la partícula
     * @param {*} maxSpeed  verlocidad máxima que puede alcanzar la partícula
     */
    constructor(initialX, initialY, size, color, maxSpeed) {
        super(initialX, initialY, size, size);
        this.color = color;

        this.initialX = initialX;
        this.initialY = initialY;

        this.positionX = initialX;
        this.positionY = initialY;
        this.width = size;
        this.height = size;

        this.maxSpeed = maxSpeed;

        this.changeSpeed();

    }

    changeInitialPosition(initialX, initialY) {
        this.initialX = initialX;
        this.initialY = initialY;
    }

    /**
     * Cambia la velocidad de la partícula aleatoriamente
     */
    changeSpeed() {
        this.aX = Math.round((Math.random() * this.maxSpeed)) - this.maxSpeed / 2;
        this.aY = Math.round((Math.random() * this.maxSpeed)) - this.maxSpeed / 2;
    }

    /**
     * Actualiza la posición de la partícula.
     * @param {*} canvas canvas en el que se quiere actualizar la partícula
     */
    update(canvas) {
        this.positionX += this.aX;
        this.positionY += this.aY;

        if (this.positionX > canvas.width || this.positionX < -this.width ||
            this.positionY > canvas.height || this.positionY < -this.height ||
            this.aX === 0 || this.ay === 0) {
            this.positionX = this.initialX;
            this.positionY = this.initialY;
            this.changeSpeed();
        }

    }

    /**
     * Dibuja la partícula en un canvas
     * @param {*} ctx contexto del canvas para dibujar la partícula
     */
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }

}

export function getParticleColor() {
    const colorValue = Math.round((Math.random() * 180)) + 70;
    const colorTransparency = Math.round((Math.random() * 100)) + 40;

    return '#00' + colorValue.toString(16) / 4 + colorValue.toString(16) + colorTransparency.toString(16);

}