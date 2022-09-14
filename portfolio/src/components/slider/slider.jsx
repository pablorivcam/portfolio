import React, { useState } from "react";
import './slider.css';

export function Slider({ initialValue, sliderId, onChange, width, sliderRotation }) {
    const [value, setValue] = useState(initialValue);

    return (
        <div style={{ width: width }} id={sliderId} className="slidecontainer">
            <input style={{ transform: "rotate(" + sliderRotation + ")" }} type="range" min="1" max="100" value={value}
                onChange={({ target: { value: position } }) => {
                    setValue(position);
                    onChange(position);
                }}
                className="slider" id="myRange"
            />
        </div>
    );
}