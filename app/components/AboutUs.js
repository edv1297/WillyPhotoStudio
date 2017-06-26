import React from 'react';

import { Nav } from "./Nav";
import { Footer } from './Footer';

export class AboutUs extends React.Component{
    constructor(props){
        super(props);
        window.document.body.style.backgroundColor = "#f7f7f7";
    }

    render(){
        return(
            <div>
                <Nav collapsable={false}/>
                <div className="navbar-replace"></div>
                <div className="blurb-box" style={{height: 'auto'}}>
                    <div id="aboutus-title">About Us</div>
                    <div id="aboutus-image" style={{display: isMobile() ? "none" : "block"}}>
                        <img src="assets/logo/FoodLoveDarkStrawberry.png" style={{width: '100%'}}/>
                    </div>
                    <div id="aboutus-text">
                          <p>
                            FoodLove was founded in August of 2016 and based in Williamstown, Massachusetts. We have created a platform that merges the gap between the local food community and retailers. Our platform facilitates the interactions between producers and distributors with hopes of promoting sustainable food practices.
                            </p>
                          <br/>
                          <p>
                            Whether you want a pound of strawberries, a clove of garlic, or a granola bar, FoodLove facilitates the connection from producers to retailers.
                          </p>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>
                <div id="aboutus-profiles">
                    <div className="person-profile">
                        <img src="assets/aboutus/joe-headshot.png" className="founder-profile-pic" />
                        <div className="profile-name">Joe Bergeron</div>
                        <div className="profile-name profile-title">Co-founder, Technology <br/>Backend Development</div>
                        <div className="profile-description">
                             He makes a crunchy croissant.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/aboutus/mia-headshot.png" className="founder-profile-pic" />
                        <div className="profile-name">Mia Gancayco</div>
                        <div className="profile-name profile-title">Co-founder, Marketing, <br/>Business Development</div>
                        <div className="profile-description">
                            She makes a mean carrot cake.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/aboutus/michael-headshot.jpg" className="dev-profile-pic" />
                        <div className="profile-name">Michael Wong</div>
                        <div className="profile-name profile-title">Software Developer & <br />Web Design</div>
                        <div className="profile-description">
                        In-N-Out Connoisseur.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/aboutus/eddy-headshot.jpg" className="dev-profile-pic" />
                        <div className="profile-name">Eddy Varela</div>
                        <div className="profile-name profile-title">Software Developer &<br/> Photography</div>
                        <div className="profile-description">
                            Coffee is his lifeline.
                        </div>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>
                <Footer/>
            </div>
        );
    }
}
