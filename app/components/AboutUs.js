import React from 'react';

import { Nav } from "./Nav";
import { Footer } from './Footer';

export class AboutUs extends React.Component{
    constructor(props){
        super(props);
        window.document.body.style.backgroundColor = "#232428";
    }

    render(){
        return(
            <div>
                <Nav collapsable={false}/>
                <div className="navbar-replace"></div>
                <div className="blurb-box" style={{height: 'auto'}}>
                    <div id="aboutus-title">About Us</div>
                    <div id="aboutus-image" style={{display: isMobile() ? "none" : "block"}}>
                        <img src="assets/team.jpg" style={{width: '100%'}}/>
                    </div>
                    <div id="aboutus-text">
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                          </p>
                          <br/>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                          </p>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <div className="horizontal-spacer"></div>
                <div id="aboutus-profiles">
                    <div className="person-profile">
                        <img src="assets/sprofile.jpg" className="profile-pic" />
                        <div className="profile-name">Joe Bergeron</div>
                        <div className="profile-name profile-title">Job Title</div>
                        <div className="profile-description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/sprofile.jpg" className="profile-pic" />
                        <div className="profile-name">Mia Gancayco</div>
                        <div className="profile-name profile-title">Job Title</div>
                        <div className="profile-description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/sprofile.jpg" className="profile-pic" />
                        <div className="profile-name">Michael Wong</div>
                        <div className="profile-name profile-title">Job Title</div>
                        <div className="profile-description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </div>
                    </div>
                    <div className="person-profile">
                        <img src="assets/sprofile.jpg" className="profile-pic" />
                        <div className="profile-name">Eddy Varela</div>
                        <div className="profile-name profile-title">Job Title</div>
                        <div className="profile-description">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        </div>
                    </div>
                </div>
                <div className="horizontal-spacer"></div>
                <Footer/>
            </div>
        );
    }   
}