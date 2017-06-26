/*This class is resposible for the login page of
FoodLove LLC 2017 */

import React from 'react';
import { Nav } from "./Nav";
import {Footer} from './Footer';

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {registerClicked:false}
        this.state = {backClicked: false}

        window.document.body.style.backgroundColor = "#b51e1e";
    }

    render(){
        //create a body that is empty at first to hold the corresponding forms and buttons
        var body = null;

        //if the user has not clicked the register button use the login setup
        if(!this.state.registerClicked ){
            body = (
                <div>
                    <div id="contact-submit">
                        <button className="btn btn-primary" id = "login">Login</button>
                        <button className="btn btn-primary" id = "register" onClick={this.registerClick.bind(this)}>Need an Account?</button>
                    </div>
                </div>
                );
            }else { /*register format */
                body = (
                <div>
                    <div className="info-input-container">
                        <input placeholder="Re-enter password" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="First name" className="contact-input"/>
                    </div>
                    <div className="info-input-container">
                        <input placeholder="Last name" className="contact-input"/>
                    </div>
                    <div id="contact-submit">
                        <button className="btn btn-primary" id = "back-button" onClick={this.backClick.bind(this)}>Back</button>
                        <button className="btn btn-primary" id = "create-account">Submit</button>
                    </div>
                </div>
                );
            }
                return(
                    <div>
                        <Nav collapsable={false}/>
                        <div className="navbar-replace"></div>
                        <div className="header-title" id="contactus-page-title">Welcome to FoodLove</div>
                        <div className="info-input-container">
                            <input placeholder="User Name" className="contact-input"/>
                        </div>
                        <div className="info-input-container">
                            <input placeholder="Password" className="contact-input"/>
                        </div>
                        {body} /* renders out the body that is neccessary*/
                        <div className="horizontal-spacer"></div>
                    </div>
            );
        }

    registerClick(){
            this.setState({
                registerClicked:true
            }
        )
    }

    backClick(){
        this.setState({
            registerClicked:false
        })
    }
}
