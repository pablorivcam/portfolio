import React from "react";
import './skills.css';
import { FormattedMessage } from "react-intl";
import { SwaggerRequest } from "./swagger-request";

export function Skills() {

    var languages = {
        languages: [{ name: "Java", progress: "90%" }, { name: "JavaScript", progress: "80%" },
        { name: "SQL", progress: "80%" }, { name: "TypeScript", progress: "75%" },
        { name: "C#", progress: "60%" }, { name: "PHP", progress: "60%" }, { name: "Python", progress: "50%" }, { name: "C", progress: "50%" }]
    }

    var frameworks = {
        frameworks: [{ name: "Spring" }, { name: "Thymeleaf" },
        { name: "Angular" }, { name: "React" }, { name: "Vue" },
        { name: "Hibernate" }, { name: "Bootstrap" }]
    }

    var tools = {
        tools: [{ name: "Git" }, { name: "Maven" },
        { name: "Gradle" }, { name: "Sonar" }, { name: "Jenkins" },
        { name: "Eclipse" }, { name: "Jira" }, { name: "Redmine" }]
    }

    function jsonBeautify(json) {

        var result = [];

        for (let i = 0; i < json.length; i++) {
            result.push(<span key={"a" + i}>
                <br /> &ensp;&ensp;&ensp;&ensp;
                {"{"}"name": <span style={{ color: "#A2FFA2" }}>"{json[i].name}"</span>
                {json[i].progress !== undefined ? <span>, "progress": <span style={{ color: "yellow" }}>"{json[i].progress}"</span></span> : ''}
                {"}"}{i === json.length - 1 ? "" : ","}
            </span>);
        }

        return result;
    }

    function getLanguages() {
        return <span>{"{"}
            <br />&ensp;&ensp;"languages": [
            {jsonBeautify(languages.languages)}
            <br />&ensp;&ensp;]
            <br />{"}"}
        </span>
    }

    function getFrameworks() {
        return <span>{"{"}
            <br />&ensp;&ensp;"tools": [
            {jsonBeautify(frameworks.frameworks)}
            <br />&ensp;&ensp;]
            <br />{"}"}
        </span>

    }

    function getTools() {

        return <span>{"{"}
            <br />&ensp;&ensp;"tools": [
            {jsonBeautify(tools.tools)}
            <br />&ensp;&ensp;]
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
            <SwaggerRequest methodType={'GET'} methodPath={'/pablorivas/skills/frameworks'}
                methodDescription={<FormattedMessage id="skills_frameworks_description" />}
                methodInfo={<FormattedMessage id="skills_frameworks_info" />}
                methodResponse={getFrameworks()} />
            <SwaggerRequest methodType={'GET'} methodPath={'/pablorivas/skills/tools'}
                methodDescription={<FormattedMessage id="skills_tools_description" />}
                methodInfo={<FormattedMessage id="skills_tools_info" />}
                methodResponse={getTools()} />
        </div>
    </section >
}
