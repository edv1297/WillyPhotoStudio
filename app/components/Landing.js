import React from 'react';

export class Landing extends React.Component{
    render(){
      return(
        <div>
            <div id="main-image">
                <img src="assets/farmImage.jpg" width={window.innerWidth}/>
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
}

export const MainLinks = (props) => {
    return(
        <div className="blurb-box">
          <div className="main-link-button">gallery</div>
          <div className="main-link-button">blog</div>
          <div className="main-link-button">support</div>
          <div className="main-link-button">services</div>
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

export const Footer = (props) => {
    return(
        <div id="footer"></div>
    );
}

export const CustomerTypeSelection = (props) => {

    return(
       <div className="blurb-box" style={{height: 'auto'}}>
          <div className="customer-type-button" style={{backgroundColor: 'red'}}></div>
          <div className="customer-type-button" style={{backgroundColor: 'green'}}></div>
          <div className="customer-type-button" style={{backgroundColor: 'yellow'}}></div>
         </div>
    );
  
}

export const Bio = (props) => {
    return(
        <div id="bio" className="blurb-box">
            <div id="bio-header">What is FoodLove?</div>
            <div id="bio-body">

            </div>
            <div id="bio-picture"></div>
        </div>
    );
}
