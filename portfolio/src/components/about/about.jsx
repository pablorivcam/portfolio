import React from "react";
import './about.css';

import { FormattedMessage } from "react-intl";

function getDayOfWeek() {
    const d = new Date();
    let day = d.getDay();

    switch (day) {
        case 0: return <FormattedMessage id="sunday" />
        case 1: return <FormattedMessage id="monday" />
        case 2: return <FormattedMessage id="tuesday" />
        case 3: return <FormattedMessage id="wednesday" />
        case 4: return <FormattedMessage id="thursday" />
        case 5: return <FormattedMessage id="friday" />
        case 6: return <FormattedMessage id="saturday" />
        default: return <FormattedMessage id="monday" />
    }

}

export function About() {
    return <section id="about">
        <div id="about_content">
            <h1 className="section_title text_primary_gradient"><FormattedMessage id="about_title" /></h1>
            <div id="about_container">
                <div id="about_description">
                    <h2 id="about_section_highlight_description" className="sectionParagraph"><FormattedMessage id="about_highlight_description" /></h2>
                    <p id="about_section_description"><FormattedMessage id="about_description" /></p>
                    <p id="about_section_description2"><FormattedMessage id="about_description2" /></p>
                    <br />
                    <p id="greeting_msg"><FormattedMessage id="greeting_msg" /> {getDayOfWeek()}!</p>
                </div>
                <div id="about_img">
                    <img src="https://scontent.fvgo3-1.fna.fbcdn.net/v/t39.30808-6/267513200_4609125692547812_5914964504741754312_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Hi7Vp88LE10AX-ma3tb&_nc_ht=scontent.fvgo3-1.fna&oh=00_AT9VABJugb5DMOEI0Y0WUYY8-7NEbD8HtJ2eUTQbL7j6bw&oe=632B71DC" alt="me" />
                </div>
            </div>
        </div>
    </section >
}

//                <img src="data:image/jpeg;base64,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" alt="Pablo Rivas Camino" />
