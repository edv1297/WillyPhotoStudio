import React from "react";

import { Nav } from "./Nav";
import {Footer} from "./Footer";

export const Landing = () => {

    window.document.body.style.backgroundColor = "#232428";

    return(
        <div>
            <Nav collapsable={!isMobile()}/>
            <div id="main-image" className="drop-shadow">
                <img src="assets/farmImage.jpg" width="100%"/>
                <div id="page-title-text" className="header-title">Uniting the local food community</div>
                <div id="page-sub-title" className="header-title">One<span style={{color: '#DE1500'}}> byte</span> at a time.</div>
            </div>
            <Bio/>
            <div className="horizontal-spacer"></div>
            <CustomerTypeSelection />
            <div className="horizontal-spacer"></div>
            <MainLinks/>
            <div className="horizontal-spacer"></div>
            <NewsletterSignup/>
            <div className="horizontal-spacer"></div>
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

export const CustomerTypeSelection = (props) => {

    return(
       <div className="blurb-box" style={{height: 'auto'}}>

          <div className="customer-type-button">
            <img src = "./assets/frontFacing/producer.jpg" width={window.innerWidth/3}/>

            </div>
          <div className="customer-type-button">
            <img src = "./assets/frontFacing/martys.png" width={window.innerWidth/3}/></div>
          <div className="customer-type-button">
            <img src = "./assets/frontFacing/chefs.jpg" width={window.innerWidth/3}/></div>
         </div>
    );

}

// Our Story section
export const Bio = (props) => {
    return(
        <div id="bio" className="blurb-box">
        <div id="bio-picture">
          <img src = "./assets/blueBerries.JPG"  width = "100%"/>
        </div>
            <div id="bio-header">This is our story</div>

            <div id="bio-body">
              <div className = "section-header">
                We love local food.
              </div>
                <div className = "bio-content">
                  And we know you do too. That’s why we’re here.
                  FoodLove is an easy-to-use online platform where
                  local producers can sell to their wholesale consumers.
                </div>
              <div className = "section-header">
                Our platform revolutionizes the supply chain.
              </div>
                <div className = "bio-content">
                  We gather purveyors, artisans, and distributors of local
                  food all in one place. With FoodLove, you can make new
                  connections, have smoother transactions with current partners,
                  and grow your operations with a new, expanded network.
                </div>
              <div className = "section-header">
                At FoodLove, we’re here to empower the local food community.
              </div>
                <div className = "bio-content">
                  Our mission is to support wholesome, responsible agriculture.
                  We connect and engage others with the people behind our food
                  as well as the environment that sustains it.
                </div>
              <div className = "section-header">
                Eat food you can feel good about. Eat food you can love.
              </div>
            </div>

        </div>
    );
}
