import React, { Fragment } from "react";
import './experience.css';
import { FormattedMessage } from "react-intl";
import backgroundImg from '../../resources/background.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Experience() {

    const experiences = [
        {
            year: 2021,
            title: "Global Incubator",
            subtitle: "Backend Developer",
            dates: "02.2021 - present",
            description: ""
        },
        {
            year: 2020,
            title: "AtoS",
            subtitle: "Fullstack Developer",
            dates: "01.2020 - 02.2021",
            description: ""
        },
        {
            year: 2015,
            title: "skills_udc",
            subtitle: "skills_informatics_degree",
            dates: "09.2015 - 06.2019",
            description: ""
        },
        {
            year: 2014,
            title: "skills_usc",
            subtitle: "skills_informatics_degree",
            dates: "09.2014 - 06.2015",
            description: ""
        },
        {
            year: 2014,
            title: "Primate Multimedia Ibérica S.L.",
            subtitle: "Prácticas en empresa",
            dates: "03.2014 - 06.2014",
            description: ""
        },
        {
            year: 2012,
            title: "IES San Clemente",
            subtitle: "Grado Superior en Desesarrollo de Aplicaciones Multiplataforma",
            dates: "09.2012 - 06.2014",
            description: ""
        },
    ];

    function experience_item(year, title, subtitle, dates, description, right) {
        return <Fragment>

            {right ? <div className="col-xs-6 time-left">
                <div className="date-description">{description}</div>
            </div> : ""}

            <div className={right ? "col-xs-6 time-right" : "col-xs-6  time-left"}>
                <div className="date">
                    <h1>{year}</h1>
                </div>
                <div className={right ? "inner-right" : "inner-left"}>
                </div>
                <div className="date-details">
                    <h3><FormattedMessage id={title} /></h3>
                    <h4><FormattedMessage id={subtitle} /></h4>
                    <p>{dates}</p>
                </div>
            </div>

            {!right ? <div className="col-xs-6 time-right">
                <div className="date-description">{description !== undefined ? description : ""}</div>
            </div> : ""}

        </Fragment>;
    }


    function getExperienceTimeline() {
        var result = [];

        for (let i = 0; i < experiences.length; i++) {
            result.push(experience_item(experiences[i].year, experiences[i].title, experiences[i].subtitle, experiences[i].dates, "", i % 2 !== 0));
        }

        return result;
    }

    return <section id="experience" style={{ 'background': 'url(' + backgroundImg + '' }}>
        <div id="experience_container">
            <h1 className="section_title"><FormattedMessage id="experience_title" /></h1>

            <div className="timeline">
                <div style={{ display: 'flex' }}>
                    <div className="col-6 timeline_header_left"></div>
                    <div className="col-6 timeline_header_right"></div>
                </div>

                {getExperienceTimeline()}

            </div>
        </div>
    </section>
}