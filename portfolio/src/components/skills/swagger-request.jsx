
import React, { useState } from "react";
import './swagger-request.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function SwaggerRequest({ methodType, methodPath, methodDescription, methodInfo, methodResponse }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isExecuteBtnVisible, setIsExecuteBtnVisible] = useState(false);

    function open() {
        setIsOpen(!isOpen);
    }

    function showExecuteBtn() {
        setIsExecuteBtnVisible(!isExecuteBtnVisible);
    }

    return <div>
        <div className="swagger-element-get swagger-element">
            <div className="swagger-header">
                <button className="swagger-header-button" onClick={open}>
                    <span className="swagger-method-type">{methodType}</span>
                    <span className="swagger-method-name">{methodPath}</span>
                    <span className="swagger-method-description">{methodDescription}</span>
                    <span className={!isOpen ? 'visible' : 'hidden'}><FontAwesomeIcon className="fa-icon" icon={faChevronUp} /></span>
                    <span className={isOpen ? 'visible' : 'hidden'}><FontAwesomeIcon className="fa-icon" icon={faChevronDown} /></span>
                </button>
            </div>
            <div className={isOpen ? 'swagger-content visible' : 'swagger-content hidden'}>
                <div className="swagger-element-description"><p>{methodInfo}</p></div>
                <div className="swagger-elements-parameter-header">
                    <div className="swagger-elements-parameter-header-title">
                        <h4>Parameters</h4>
                        <button className={isExecuteBtnVisible ? "try-out-btn hidden" : "try-out-btn"} onClick={showExecuteBtn}>Try it out</button>
                        <button className={!isExecuteBtnVisible ? "hidden" : "try-out-btn cancel_btn"} onClick={showExecuteBtn}>Cancel</button>
                    </div>
                </div>
                <div className="swagger_element_container">
                    No parameters
                </div>
                <div className="swagger_element_container" style={{ display: 'flex' }}>
                    <button className={isExecuteBtnVisible ? 'execute_btn visible' : 'execute_btn hidden'}>Execute</button>
                    <button className={isExecuteBtnVisible ? 'execute_btn clear_btn' : 'hidden'}>Clear</button>
                </div>
                <div className="swagger-elements-parameter-header">
                    <div className="swagger-elements-parameter-header-title">
                        <h4>Responses</h4>
                        <label>
                            <span style={{ padding: '0 10px 0 0', fontWeight: 700, fontFamily: 'Verdana, sans-serif' }}>Response content type</span>
                            <select className="try-out-btn">
                                <option>application/json</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="swagger_element_container">
                    <table className="swagger-parameters-table">

                        <thead>
                            <tr>
                                <th style={{ fontSize: '14px' }}>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ padding: '10px' }}>
                                <td style={{ verticalAlign: 'top', padding: '10px 0' }}>
                                    <div style={{ minWidth: '6em' }}>200</div>
                                </td>
                                <td style={{ padding: '10px 0' }} className="swagger-param-description-td">
                                    <p>successful operation</p>
                                    <div className="swagger-example">
                                        <ul>
                                            <li style={{ fontWeight: 700 }}>Example Value</li>
                                            <li>Model</li>
                                        </ul>
                                        <div>
                                            <pre>
                                                {methodResponse}
                                            </pre>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div >
    /*
        return <div className="opblock opblock-get" id="operations-pet-findPetsByStatus">
            <div className="opblock-summary opblock-summary-get">
                <button aria-label="get &ZeroWidthSpace;/pet&ZeroWidthSpace;/findByStatus" aria-expanded="false" className="opblock-summary-control">
                    <span className="opblock-summary-method">GET</span><span className="opblock-summary-path" data-path="/pet/findByStatus"><a className="nostyle" href="#/pet/findPetsByStatus"><span>/pet/findByStatus</span></a></span>
                    <div className="opblock-summary-description">Finds Pets by status</div>
                    <FontAwesomeIcon className="fa-icon" icon={faCaretDown} />
                </button>
                <button className="authorization__btn unlocked" aria-label="authorization button unlocked">
                    C
                </button>
                <div className="view-line-link copy-to-clipboard" title="Copy to clipboard">
                    COP
                </div>
            </div>
            <noscript></noscript>
        </div>**/

    /*
     <table className="swagger-parameters-table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div style={{ color: "#3b4151", fontFamily: "sans-serif", fontSize: "16px", fontWeight: "700", marginRight: "0.75em" }} >paramName</div>
                                <div>paramType</div>
                                <div>(query)</div>
                            </td>
                            <td className="swagger-param-description-td">
                                <p>Param description</p>
                            </td>
                        </tr>
                    </tbody>
                </table>*/
}