import React, { Fragment, useState } from "react";
import './App.css';
import { Header } from "./components/header/header";
import { IntlProvider } from "react-intl";
import { SPANISH } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { Navbar } from "./components/header/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { About } from "./components/about/about";

export function App() {

    function getInitialLocal() {
        const savedLocale = localStorage.getItem("locale");
        return savedLocale || SPANISH;
    }

    const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

    const changeLanguage = (code) => {
        setCurrentLocale(code);
        localStorage.setItem("locale", code);
    }

    return <Fragment>
        <IntlProvider
            messages={messages[currentLocale]}
            locale={currentLocale}
            defaultLocale={SPANISH}>
            <div>
                <Navbar currentLocale={currentLocale} handleChange={changeLanguage} />
                <Header />
            </div>
            <div style={{ marginTop: '100vh', position: 'absolute' }}>
                <About />
                <Footer />
            </div>
        </IntlProvider>
    </Fragment>;
}