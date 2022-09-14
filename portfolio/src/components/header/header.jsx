import React from "react";
import * as Tone from 'tone';
import testAudio from '../../resources/testAudio.mp3';
import { Slider } from "../slider/slider";
import './header.css';

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
    } else {
        isMusicPlaying = false;
        player.stop();
    }
}

//function changeVolume(value) {
//    player.volume.value = value - 110;
//}

function changeDelay(value) {
    feedbackDelay.wet.value = value / 100;
}

function changeLowpass(value) {
    lowpassFilter.frequency.value = value * 200;
}

function changePitchShift(value) {
    pitchShiftFilter.pitch = (value - 50) / 6
}

function changeVibrato(value) {
    vibratoEffect.depth.value = value / 100;
    vibratoEffect.frequency.value = value / 10;
}

function changeReverb(value) {
    reverbEffect.decay = value / 10;
}

export function Header() {
    return <div id="synth_container">
        <input type="button" value="start" onClick={startMusic} />
        <audio src={testAudio}></audio>
        <div id="slider_box">
            <Slider initialValue={0} sliderId="volumeSlider"
                sliderRotation="-45deg" width="50%" onChange={changeDelay} />
            <Slider initialValue={0} sliderId="volumeSlider"
                sliderRotation="45deg" width="50%" onChange={changeLowpass} />
            <Slider initialValue={0} sliderId="volumeSlider"
                sliderRotation="-45deg" width="50%" onChange={changeReverb} />
            <Slider initialValue={0} sliderId="volumeSlider"
                sliderRotation="45deg" width="50%" onChange={changeVibrato} />
        </div>
        <Slider initialValue={50} sliderId="volumeSlider"
            sliderRotation="0deg" width="100%" onChange={changePitchShift} />
    </div >
}