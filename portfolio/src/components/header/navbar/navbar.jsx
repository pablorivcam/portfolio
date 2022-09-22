import React, { useState } from "react";
import { LOCALES } from "../../../i18n/locales";
import './navbar.css';
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";

export const Navbar = (props) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [navbarHeight, setnavbarHeight] = useState(0);

    function changeLanguage(e) {
        props.handleChange(e.target.textContent);
    }

    function getLanguageButtons() {
        var result = [];
        LOCALES.forEach((value, key) => {
            result.push(
                <div value={key} key={value.code + '_languageBtn'} className="my_button2" onClick={changeLanguage}>
                    {key}
                </div>)
        });

        return result;
    }

    window.addEventListener('scroll', e => {
        setScroll(window.pageYOffset);
        setIsScrolled(window.pageYOffset > window.innerHeight - (document.getElementById("navbar").offsetHeight));
        setnavbarHeight(document.getElementById("navbar").offsetHeight);
    });

    function isHighlighted(id) {
        const element = document.getElementById(id);
        if (element === null) {
            return false;
        }

        const elementPosition = window.innerHeight + element.offsetTop - navbarHeight;

        return (window.pageYOffset > elementPosition) && (window.pageYOffset < elementPosition + element.offsetHeight);
    }

    return <div id="navbar" className={window.pageYOffset > window.innerHeight - navbarHeight ? 'scrolled_navbar' : ''}>
        <div id="navbar_container">
            <div id="navbar_right_container">
                <Link to="header" smooth={true} duration={1000}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"><g id="ic-places-mountains">
                            <path className="cls-1" d="M9,12.42l4.83-6.76a.2.2,0,0,1,.33,0L21.8,18.11a.2.2,0,0,1-.17.31H13" /><path className="cls-1" d="M5.84,12.65,2.2,18.11a.2.2,0,0,0,.17.31h7.79a.2.2,0,0,0,.15-.32L6.16,12.64A.2.2,0,0,0,5.84,12.65Z" /></g></svg>
                </Link>
            </div>
            <div id="navbar_middle_container">
                <Link to="about" smooth={true} duration={1000} >
                    <div className={isHighlighted("about") ? "my_button2 highlight_element" : "my_button2"}>
                        <FormattedMessage id="about_title" />
                    </div>
                </Link>
                <Link to="experience" smooth={true} duration={1000}>
                    <div className={isHighlighted("experience") ? "my_button2 highlight_element" : "my_button2"}>
                        <FormattedMessage id="experience_title" />
                    </div>
                </Link>
                <div style={{ padding: '1vh 10vw' }}></div>
                <Link to="skills" smooth={true} duration={1000}>
                    <div className={isHighlighted("skills") ? "my_button2 highlight_element" : "my_button2"}>
                        <FormattedMessage id="skills_title" />
                    </div>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                    <div className={isHighlighted("contact") ? "my_button2 highlight_element" : "my_button2"}>
                        <FormattedMessage id="contact_title" />
                    </div>
                </Link>
            </div>
            <div id="navbar_language_container">
                {getLanguageButtons()}
            </div>
        </div>
    </div>
}