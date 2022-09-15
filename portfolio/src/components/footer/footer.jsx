import React from "react";
import './footer.css';
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return <footer id="footer">
        <div id="footer_return_button" className="return-button">
            <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleUp} />
        </div>
        Pablo Rivas Camino - 2022
    </footer>
}