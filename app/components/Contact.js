import React from 'react';

import { Nav } from "./Nav";
import {Footer} from './Footer';

export class Contact extends React.Component{
    constructor(props){
        super(props);
        window.document.body.style.backgroundColor = "#b51e1e";
    }

    render(){
        return(
            <div>
                <Nav collapsable={false}/>
                <div className="navbar-replace"></div>
                <div className="header-title" id="contactus-page-title">Have a question or comment?</div>
                <div className="header-title" id="contactus-page-subtitle">We'd love to hear from you!</div>
                <div id="form-container">
                    <div className="info-input-container">
                        <input placeholder="Name" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="E-mail Address" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="Company (Optional)" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="Subject" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <textarea placeholder="Message" className="contact-textarea"/>
                    </div>
                    <div id="contact-submit">
                        <button >Submit</button>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <Footer/>
            </div>
        );
    }   
}