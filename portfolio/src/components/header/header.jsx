import React from "react";
import * as Tone from 'tone';
import testAudio from '../../resources/testAudio.mp3';
import { Slider } from "../elements/slider/slider";
import './header.css';
import HeaderCanvas from "./canvas/headerCanvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";

// Variables necesarias para el reproductor
var ready = false;
var isMusicPlaying = false;
var player = null;
var feedbackDelay = null;
var lowpassFilter = null;
var pitchShiftFilter = null;
var vibratoEffect = null;
var reverbEffect = null;

// Necesario para inicializar el módulo de sonido
(async () => {
    if (!ready) {
        await Tone.start();
        console.log('audio is ready');
        ready = true;
        player = new Tone.Player({
            url: testAudio,
            loop: true
        });

        // Efectos
        feedbackDelay = new Tone.FeedbackDelay(0.125, 0.1).toDestination();
        feedbackDelay.wet.value = 0;

        lowpassFilter = new Tone.Filter(
            {
                type: "highpass",
                frequency: 0,
                Q: 1,
                rolloff: -96,
                gain: -1,
                detune: 200
            }
        ).toDestination();
        lowpassFilter.detune.value = -1000;

        pitchShiftFilter = new Tone.PitchShift(
            {
                pitch: 0,
                delayTime: 0,
                windowSize: 0.1,
                feedback: 0,
                dry: 0
            }
        ).toDestination();
        pitchShiftFilter.wet.value = 1;

        vibratoEffect = new Tone.Vibrato(0, 0).toDestination();

        reverbEffect = new Tone.Reverb({
            decay: 1,
            preDelay: 0.05
        }).toDestination();

        // fin efectos

        //const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
        player.volume.value = -10;

        player.connect(pitchShiftFilter);

        // Es necesario conectar todo al pitch shifter o se aplica el efecto a la señal sin procesar
        pitchShiftFilter.connect(feedbackDelay);
        pitchShiftFilter.connect(lowpassFilter);
        pitchShiftFilter.connect(reverbEffect);
        pitchShiftFilter.connect(vibratoEffect);

    }
})();

function startMusic() {
    if (!isMusicPlaying) {
        isMusicPlaying = true;
        Tone.loaded().then(() => {
            player.start();
        });
        document.getElementById("header_sound_button_on").style.display = 'unset';
        document.getElementById("header_sound_button_off").style.display = 'none';

    } else {
        isMusicPlaying = false;
        player.stop();
        document.getElementById("header_sound_button_off").style.display = 'unset';
        document.getElementById("header_sound_button_on").style.display = 'none';

    }

}

//function changeVolume(value) {
//    player.volume.value = value - 110;
//}

function changeDelay(value) {

    feedbackDelay.wet.value = value / 100;
    const sizeDistortionInput = document.getElementById("canvasSizeDistortion");
    sizeDistortionInput.value = Math.round(value / 10);

}

function changeLowpass(value) {
    lowpassFilter.frequency.value = 20000 - value * 200;
    const speedInput = document.getElementById("canvasSpeed");
    speedInput.value = 5 + Math.round(value / 15);

}

function changePitchShift(value) {
    pitchShiftFilter.pitch = (value - 50) / 24
    const temperatureInput = document.getElementById("canvasTemperature");
    temperatureInput.value = value;
}

function changeVibrato(value) {
    vibratoEffect.depth.value = value / 100;
    vibratoEffect.frequency.value = value / 10;
    const vibrationInput = document.getElementById("canvasVibration");
    vibrationInput.value = 20 - Math.round(value / 7);

}

function changeReverb(value) {
    reverbEffect.decay = value / 10;
    const distiortionInput = document.getElementById("canvasDistortion");
    distiortionInput.value = Math.round(value / 10);
}

export function Header() {

    return <header id="header">
        <div id="header_container">

            <div id="canvasProperties">
                <input id="canvasTemperature" type="hidden" value="50" />
                <input id="canvasSpeed" type="hidden" value="5" />
                <input id="canvasVibration" type="hidden" value="20" />
                <input id="canvasDistortion" type="hidden" value="0" />
                <input id="canvasSizeDistortion" type="hidden" value="0" />
            </div>

            <div id="header_sound_button" className="my_button2" type="button" value="start" onClick={startMusic}>
                <FontAwesomeIcon id="header_sound_button_off" className="fa-icon" icon={faVolumeXmark} />
                <FontAwesomeIcon id="header_sound_button_on" style={{ 'display': 'none' }} className="fa-icon" icon={faVolumeHigh} />
            </div>

            <HeaderCanvas />
            <audio src={testAudio}></audio>
            <div id="center_container">
                <div id="synth_controls">
                    <div className="slider_row">
                        <Slider initialValue={0} sliderId="volumeSlider"
                            sliderRotation="-45deg" width="20vmin" onChange={changeDelay} />
                        <Slider initialValue={0} sliderId="volumeSlider"
                            sliderRotation="45deg" width="20vmin" onChange={changeLowpass} />
                        <Slider initialValue={0} sliderId="volumeSlider"
                            sliderRotation="-45deg" width="20vmin" onChange={changeReverb} />
                        <Slider initialValue={0} sliderId="volumeSlider"
                            sliderRotation="45deg" width="20vmin" onChange={changeVibrato} />
                    </div>
                    <div className="slider_row">
                        <Slider initialValue={50} sliderId="volumeSlider"
                            sliderRotation="0deg" width="80vw" onChange={changePitchShift} />
                    </div>
                </div>
                <div id="header_title">
                    <div><FormattedMessage id="welcomeMsg01" /> <span className="text_primary">Pablo Rivas</span></div>
                    <div><FormattedMessage id="welcomeMsg02" /></div>
                    <Link to="about" smooth={true} duration={1000}>
                        <div className="my_button" style={{ "marginTop": "0.5em" }}>
                            <span><FormattedMessage id="enter" /></span>
                            <div className="fa-icon" style={{ "marginLeft": "0.25em" }}>
                                <FontAwesomeIcon className="fa-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    </header >
}