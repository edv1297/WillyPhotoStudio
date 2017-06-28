import React from "react";

import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Newsletter } from "./NewsletterSignup";

export class Landing extends React.Component {

    constructor(){
      super();

      window.document.body.style.backgroundColor = "#f7f7f7";

      this.state = {
        portrait: (window.innerWidth / window.innerHeight > 1.97 || window.innerWidth / window.innerHeight < 1.5) && !isMobile()
      }
    }

    componentDidMount(){
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize(){
      const ratio = window.innerWidth / window.innerHeight;

      this.setState({
        portrait: ( ratio > 1.97 || ratio < 1.5) && !isMobile()
      });
    }

    makeImage(){
      var filepath = "";

      if(!isMobile()){
        filepath = "assets/frontFacing/farmImage.png";
      }else{
        filepath = "assets/frontFacing/gallery-zoom.JPG";
      }

      if(!this.state.portrait){
        return (<img src={filepath} height="100%" style={isMobile() ? {opacity: '0.6'} : {}}/>);
      }else{
        return (<img src={filepath} width="100%" style={isMobile() ? {opacity: '0.6'} : {}}/>)
      }

    }

    render(){
        return(
            <div>
            <link rel = "stylesheet" type = "text/css" href = 'css/landing.css'/>
                <Nav collapsable={!isMobile()}/>
                <div id="main-image" className="drop-shadow" style={this.state.portrait ? {width: '100vw'} : {height: '100vh'}}>
                    {this.makeImage()}
                    <div id="page-title-text" className="header-title">Uniting the local food community</div>
                    <img src="assets/arrow.svg" className="down-arrow-svg" id="main-scroll-down"/>
                    <div id="page-sub-title" className="header-title">One byte at a time.</div>
                </div>
                <div className="horizontal-spacer"/>
                <Bio/>
                <div className="horizontal-spacer"/>
                <CustomerTypeSelection />
                <div className="horizontal-spacer"/>
                <Newsletter/>
                <div className="horizontal-spacer"/>
                <div className="horizontal-spacer"/>
            </div>
        );
    }

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

export const CustomerTypeSelection = (props) => {

    return(
       <div className="blurb-box" style={{height: 'auto'}}>
          <a href="/producer">
            <div className="customer-type-button">
            <img src = "./assets/icons/wheat.svg" className = "icon"/>
                <img src = "./assets/frontFacing/producer.png" width="100%"/>
                <div className = "customer-type-main-blurb">Are you a local producer?</div>
                <div className = "customer-type-description">Click to learn more</div>
            </div>
          </a>
          <a href="/distributor">
              <div className="customer-type-button">
              <img src = "./assets/icons/truck.svg" className = "icon"/>
                  <img src = "./assets/frontFacing/distributor.png" width="100%"/>
                   <div className = "customer-type-main-blurb">Logistical Services?</div>
                   <div className = "customer-type-description">Click to learn more</div>
              </div>
          </a>
          <a href="/buyer">
              <div className="customer-type-button">
                <img src = "./assets/icons/hat.svg" className = "icon"/>
                  <img src = "./assets/frontFacing/buyer.png" width="100%"/>
                  <div className="customer-type-main-blurb">Retailer or Institution?</div>
                  <div className="customer-type-description">Click to learn more</div>
              </div>
          </a>
       </div>
    );

}


// Introduction section
export const Bio = (props) => {
    return(
        <div id="bio" className="blurb-box">
            <div id="bio-header">This is our story</div>
            <div className="horizontal-spacer"/>
            <div id="bio-picture">
                {!isMobile() ? <img src={ "assets/frontFacing/blueBerries.jpg"} width="100%"/> :  <div/>}
            </div>
            <div id="bio-body">
              <div className="bio-content">
                  <div className="bio-icon">
                      <img src="assets/icons/green_wheat.svg" height="100%"/>
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
                  <div className="bio-icon" id = 'truck-icon'>
                      <img src="assets/icons/white_truck.svg" height="100%"/>
                  </div>
                  <div className = "section-header">
                    {!isMobile() ? <span>Our platform revolutionizes<br/>the supply chain.</span> : <span>Our platform revolutionizes<br/>the supply chain.</span>}
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
                      <img src="assets/icons/power.svg" height="100%"/>
                  </div>
                  <div className = "section-header">
                  {!isMobile() ? <span>At FoodLove, we’re here to<br/>empower the local food community.</span> : <span>At FoodLove, we’re here to empower the local food community.</span>}

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
                    {!isMobile() ? <span>Eat food you can feel good about.<br/>Eat food you can love.</span> : <span>Eat food you can feel good about. Eat food you can love.</span>}

                  </div>
              </div>
        </div>
      </div>
    );
}
