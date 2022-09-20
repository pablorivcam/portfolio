import React from "react";
import './skills.css';
import { FormattedMessage } from "react-intl";
import { SwaggerRequest } from "./swagger-request";

export function Skills() {

    function getLanguages() {
        return <span>{"{"}
            <br />&ensp;&ensp;&ensp;"languages": [
            <br />&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"java": <span style={{ color: 'yellow' }}>"5*"</span>
            <br />&ensp;&ensp;&ensp;]
            <br />{"}"}
        </span>
    }

    return <section id="skills" >
        <div id="skills_container">
            <h1 className="section_title"><FormattedMessage id="skills_title" /></h1>
            <SwaggerRequest methodType={'GET'} methodPath={'/pablorivas/skills/languages'}
                methodDescription={<FormattedMessage id="skills_languages_description" />}
                methodInfo={<FormattedMessage id="skills_languages_info" />}
                methodResponse={getLanguages()} />
            <SwaggerRequest methodType={'GET'} methodPath={'/pablorivas/skills/frameworks'} methodDescription={<FormattedMessage id="skills_frameworks_description" />} methodInfo={<FormattedMessage id="skills_frameworks_info" />} />
            <SwaggerRequest methodType={'GET'} methodPath={'/pablorivas/skills/tools'} methodDescription={<FormattedMessage id="skills_tools_description" />} methodInfo={<FormattedMessage id="skills_tools_info" />} />
        </div>
    </section >
}
