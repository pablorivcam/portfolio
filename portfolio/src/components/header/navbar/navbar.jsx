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
                <div value={key} key={value.code + '_languageBtn'} className="my_button" onClick={changeLanguage}>
                    {key}
                </div>)
        });

        return result;
    }


    return <div id="navbar">
        <div id="navbar_language_container">

            {getLanguageButtons()}

        </div>
    </div>
}