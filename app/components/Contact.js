import React from 'react';

import { Nav } from "./Nav";

export class Contact extends React.Component{
    constructor(props){
        super(props);
        //backgroundColor
        window.document.body.style.backgroundColor = "#353C53";
    }

    render(){
        return(
            <div>
                <Nav collapsable={false}/>
                <div className="navbar-replace"></div>
                <div className="header-title" id="contactus-page-title">Have a question or comment?</div>
                <div className="header-title" id="contactus-page-subtitle">We would <span style={{color: '#b51e1e'}}>love</span> to hear from you!</div>
                <div id="form-container">
                    <div className="info-input-container">
                        <input placeholder="Name" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="E-mail address" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="Company (optional)" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="Subject" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <textarea placeholder="Message" className="contact-textarea"/>
                    </div>
                </div>
                <button className="btn btn-lg btn-success" id = "submit">Submit</button>
                <div className="horizontal-spacer" />
            </div>
        );
    }
}
