import React from "react";
import './footer.css';
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";

export function Footer() {
    return <footer id="footer">
        <Link to="header" smooth={true} duration={1000}>
            <div id="footer_return_button" className="return-button">
                <FontAwesomeIcon className="fa-icon" icon={faAngleDoubleUp} />
            </div>
        </Link>
        <p>Pablo Rivas Camino - 2022</p>
    </footer>
}