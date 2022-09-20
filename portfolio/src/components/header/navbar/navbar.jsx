import React from "react";
import { LOCALES } from "../../../i18n/locales";
import './navbar.css';

export const Navbar = (props) => {

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

    return <div id="navbar">
        <div id="navbar_container">
            <div id="navbar_right_container">
                <svg width="24px" height="24px" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"><g id="ic-places-mountains">
                        <path className="cls-1" d="M9,12.42l4.83-6.76a.2.2,0,0,1,.33,0L21.8,18.11a.2.2,0,0,1-.17.31H13" /><path className="cls-1" d="M5.84,12.65,2.2,18.11a.2.2,0,0,0,.17.31h7.79a.2.2,0,0,0,.15-.32L6.16,12.64A.2.2,0,0,0,5.84,12.65Z" /></g></svg>
            </div>
            <div id="navbar_language_container">
                {getLanguageButtons()}
            </div>
        </div>
    </div>
}