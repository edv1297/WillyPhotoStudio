import React from 'react';

import { Nav } from "./Nav";
import {Footer} from './Footer';

export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {registerClicked:false}

        window.document.body.style.backgroundColor = "#b51e1e";
    }

    render(){

        if(this.state.registerClicked){
            return (
                <div>
                    <Nav collapsable={false}/>
                        <div className="navbar-replace"></div>
                            <div className="header-title" id="contactus-page-title">Welcome to FoodLove</div>

                            <div className="info-input-container">
                                <input placeholder="First Name" className="contact-input"/></div>
                            <div className="info-input-container">
                                <input placeholder="Last Name" className="contact-input"/></div>
                            <div className="info-input-container">
                                <input placeholder="Email address" className="contact-input"/></div>
                            <div className="info-input-container">
                                <input placeholder="Password" className="contact-input"/></div>
                            <div className="info-input-container">
                                <input placeholder="Re-enter password" className="contact-input"/>
                            </div>
                            <div id="contact-submit">
                                <button className="btn btn-primary" id = "login">Back</button>
                                <button className="btn btn-primary" id = "register" onClick={this.onClick.bind(this)}
                                >Confirm</button>
                            </div>
                        </div>
                        )
            }else{
                return(
                    <h>swag</h>

                )
            }

        }

            <div id="contact-submit">
                <button className="btn btn-primary" id = "login">Login</button>
                <button className="btn btn-primary" id = "register" onClick={this.onClick.bind(this)}
                        >Need an account?</button>
                    </div>
                </div>
            <div className="horizontal-spacer"></div>
        <Footer/>
        </div>

        );
    }

    onClick(){
            this.setState({
                registerClicked:true
            }
        )
    }
}
