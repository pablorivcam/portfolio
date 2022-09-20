import React from "react";
import './experience.css';
import { FormattedMessage } from "react-intl";
import backgroundImg from '../../resources/background.png';

export function Experience() {
    return <section id="experience" style={{ 'background': 'url(' + backgroundImg + '' }}>
        <div id="experience_container">
            <h1 className="section_title"><FormattedMessage id="experience_title" /></h1>

            <p>2015 UDC </p>
            <p>2015 UDC </p>
            <p>Pablo Rivas Camino - 2022</p>
            <p>Pablo Rivas Camino - 2022</p>
            <p>Pablo Rivas Camino - 2022</p>
        </div>
    </section>
}