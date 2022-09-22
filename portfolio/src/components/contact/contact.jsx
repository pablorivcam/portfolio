import React from "react";
import './contact.css';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
    return <section id="contact">
        <div id="contact_container">
            <h1 className="section_title"><FormattedMessage id="contact_title" /></h1>

            <p>
                <FontAwesomeIcon className="fa-icon" icon={faEnvelope}></FontAwesomeIcon>
                pablorivcam@gmail.com
            </p>
            <p>            <a href="https://www.linkedin.com/in/pablo-rivas-camino">LinkedIn</a>
            </p>
            <a href="https://github.com/pablorivcam">GitHub</a>
        </div>
    </section>
}