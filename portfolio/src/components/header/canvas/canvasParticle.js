import CanvasObject from "./canvasObject";

export class Particle extends CanvasObject {

    initialX = 0;
    initialY = 0;

    aX = 1;
    aY = 2;
    color = '#99000099'

    minSpeed = 1;
    maxSpeed = 20;

    canvas_width = 20;
    canvas_height = 20;

    randomMovement = 20;
    iteration = 0;

    // Parámetros para cambiar la forma de la partícula
    distortion = 0;
    sizeDistortion = 0;

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

        if (Math.abs(this.aX) < this.minSpeed || Math.abs(this.ay) < this.minSpeed) {
            this.changeSpeed();
        }

    }

    /**
     * Actualiza la posición de la partícula.
     * @param {*} canvas canvas en el que se quiere actualizar la partícula
     */
    update(canvas) {

        this.iteration++;
        if (this.iteration > this.randomMovement && this.randomMovement + this.sizeDistortion < 20 + this.sizeDistortion) {
            this.iteration = 0;
            this.changeSpeed();
        }

        this.positionX += this.aX;
        this.positionY += this.aY;

        if (this.positionX > canvas.width || this.positionX < -this.width ||
            this.positionY > canvas.height || this.positionY < -this.height ||
            Math.abs(this.aX) < this.minSpeed || Math.abs(this.ay) < this.minSpeed) {
            this.positionX = this.initialX;
            this.positionY = this.initialY;
            this.changeSpeed();
        }

        //var redValueString = (parseInt(this.color.substring(1, 3), 16) + Math.round(this.aX)) % 160;
        //var greenValueString = (parseInt(this.color.substring(3, 5), 16) + Math.round(this.aX)) % 160;
        //var blueValueString = ((parseInt(this.color.substring(5, 7), 16) - Math.round(this.aX))).toString(16);
        //this.color = this.color.substring(0, 5) + blueValueString + this.color.substring(7, 9);

    }

    /**
     * Dibuja la partícula en un canvas
     * @param {*} ctx contexto del canvas para dibujar la partícula
     */
    draw(ctx) {

        ctx.fillStyle = this.color;
        //this.color = '#' + (this.positionX * this.positionY % 255 * 4).toString(16);
        //ctx.strokeStyle = this.color;
        //ctx.fillRect(this.positionX, this.positionY, this.width, this.height);

        ctx.beginPath();
        ctx.moveTo(this.positionX, this.positionY);
        ctx.lineTo(this.positionX + this.width + this.sizeDistortion + this.distortion, this.positionY);
        ctx.lineTo(this.positionX + this.width + this.sizeDistortion, this.positionY + this.height + this.sizeDistortion);
        ctx.lineTo(this.positionX - this.distortion, this.positionY + this.height + this.sizeDistortion);
        ctx.closePath();
        ctx.fill();

    }

    /**
     * Cambia el color de la partícula de acuerdo a una temperatura recibida por parámetro
     * @param {number} temperature 
     */
    setColor(temperature) {

        var temperatureString = '00';
        var greenValueString = this.color.substring(3, 5);

        if (temperature > 50) {
            if (temperature !== undefined) {
                temperatureString = (Math.round(temperature * 2) - 50).toString(16);
                if (temperatureString.length < 2) {
                    temperatureString += '0';
                }
            }
        } else {
            var greenValue = parseInt(this.color.substring(3, 5), 16);
            greenValue = (70 - temperature) * 2;
            greenValueString = greenValue.toString(16);
        }

        this.color = '#' + temperatureString + greenValueString + this.color.substring(5, 9);

    }

    /**
     * Cambia la velocidad máxima y mínima de una partícula
     * @param {number} maxSpeed velocidad máxima que puede alcanzar la partícula 
     */
    setSpeedThreshold(maxSpeed) {
        this.maxSpeed = maxSpeed;
        this.minSpeed = Math.round(maxSpeed / 20);
    }

}

/**
 * Genera el color de una partícula de manera aleatoria.
 * @returns el color generado
 */
export function getParticleColor() {
    const colorValue = Math.round((Math.random() * 180)) + 70;
    const colorTransparency = Math.round((Math.random() * 100)) + 40;
    return '#0020' + colorValue.toString(16) + colorTransparency.toString(16);

}