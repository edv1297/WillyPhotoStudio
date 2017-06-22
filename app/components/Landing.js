import React from "react";

import { Nav } from "./Nav";
import {Footer} from "./Footer";

export const Landing = () => {

    window.document.body.style.backgroundColor = "#232428";

    return(
        <div>
            <Nav collapsable={!isMobile()}/>
            <div id="main-image" className="drop-shadow">
                <img src={!isMobile() ? "assets/farmImage.jpg" : "assets/gallery-zoomin.png"} width="100%"/>
                <div id="page-title-text" className="header-title">Uniting the local food community</div>
                <div id="page-sub-title" className="header-title">One<span style={{color: '#DE1500'}}> byte</span> at a time.</div>
            </div>
            <div className="horizontal-spacer"/>
            <Bio/>
            <div className="horizontal-spacer"/>
            <CustomerTypeSelection />
            <div className="horizontal-spacer"/>
            <NewsletterSignup/>
            <div className="horizontal-spacer"/>
            <div className="horizontal-spacer"/>
            <Footer/>
        </div>
    );

}

export const MainLinks = (props) => {
    return(
        <div className="blurb-box" style={{height: 'auto'}}>

          <div className="main-link-button">
            <img src = "./assets/gallery.png" style = {{width:'25vw'}}/>
            <div id = "img-text">gallery</div>

          </div>

          <div className="main-link-button">
            <img src = "./assets/frontFacing/pot.png" style = {{width:'25vw'}}/>
            <div id = "img-text">blog</div>
          </div>

          <div className="main-link-button">
            <img src = "./assets/frontFacing/sign.png" style = {{width:'25vw'}}/>
            <div id = "img-text">support</div>
          </div>

          <div className="main-link-button">
            <img src = "./assets/frontFacing/creamery.png" style = {{width:'25vw'}}/>
            <div id = "img-text">services</div>
          </div>
       </div>
    );
}

export const NewsletterSignup = (props) => {
    if(window.innerWidth < 700){
        return(
            <div className="blurb-box" style={{}}>
                    <div className="header-title" style={{marginTop: '2vw', fontSize: '6.6vw'}}>
                    Would you like to hear from us?
                </div>

                <div className="header-title" style={{marginTop: '16vw', fontSize: '4vw'}}>
                    Submit your email address for our newsletter
                </div>
                <input id="email-input" placeholder="yourname@mail.com"/>
            </div>
        );
    }else{
        return(
            <div className="blurb-box">
                    <div className="header-title" style={{marginTop: '30px', fontSize: '40px'}}>
                    Would you like to hear from us?
                </div>

                <div className="header-title" style={{marginTop: '90px', fontSize: '20px'}}>
                    Submit your email address for our newsletter
                </div>
                <input id="email-input" placeholder="yourname@mail.com"/>
            </div>
        );
    }
}

export const CustomerTypeSelection = (props) => {

    return(
       <div className="blurb-box" style={{height: 'auto'}}>
          <div className="customer-type-button">
              <a href="/producer"><img src = "./assets/frontFacing/producer.jpg" width="100%"/></a>
          </div>
          <div className="customer-type-button">
              <a href="/producer"><img src = "./assets/frontFacing/martys.png" width="100%"/></a>
          </div>
          <div className="customer-type-button">
              <a href="/producer"><img src = "./assets/frontFacing/chefs.jpg" width="100%"/></a>
          </div>
       </div>
    );

}


// Introduction section
export const Bio = (props) => {
    return(
        <div id="bio" className="blurb-box">
            <div id="bio-header">This is our story</div>
            <div id="bio-picture">
                {!isMobile() ? <img src={ "assets/blueBerries.jpg"} width="100%"/> : <div/>}
            </div>
            <div id="bio-body">
              <div className="bio-content">
                  <div className="bio-icon">
                      <img src="assets/icons/wheat.png" height="100%"/>
                  </div>
                  <div className = "section-header">
                    We love local food.
                  </div>
                  <div className = "bio-text">
                    And we know you do too. That’s why we’re here.
                    FoodLove is an easy-to-use online platform where
                    local producers can sell to their wholesale consumers.
                  </div>
              </div>
              <div className="bio-content">
                  <div className="bio-icon">
                      <img src="assets/icons/truck.png" height="100%"/>
                  </div>
                  <div className = "section-header">
                    {!isMobile() ? <span>Our platform revolutionizes<br/>the supply chain.</span> : <span>Our platform<br/>revolutionizes the<br/>supply chain.</span>}
                  </div>
                  <div className = "bio-text">
                    We gather purveyors, artisans, and distributors of local
                    food all in one place. With FoodLove, you can make new
                    connections, have smoother transactions with current partners,
                    and grow your operations with a new, expanded network.
                  </div>
              </div>
              <div className="bio-content">
                  <div className="bio-icon">
                      <img src="assets/icons/hand.png" height="100%"/>
                  </div>
                  <div className = "section-header">
                  {!isMobile() ? <span>At FoodLove, we’re here to<br/>empower the local food community.</span> : <span>At FoodLove, we’re<br/>here to empower<br/>the local food community.</span>}
                    
                  </div>
                  <div className = "bio-text">
                    Our mission is to support wholesome, responsible agriculture.
                    We connect and engage others with the people behind our food
                    as well as the environment that sustains it.
                  </div>
              </div>
              <div className="bio-content">
                  <div className="bio-icon">
                      <img src="assets/icons/heart.png" height="100%"/>
                  </div>
                  <div className = "section-header">
                    {!isMobile() ? <span>Eat food you can feel good about.<br/><br/>Eat food you can love.</span> : <span>Eat food you can <br/>feel good about.<br/><br/>Eat food you can love.</span>}
                    
                  </div>
              </div>
        </div>
      </div>
    );
}
