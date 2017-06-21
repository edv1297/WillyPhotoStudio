import React from 'react';

import { Nav } from "./Nav";
import {Footer} from './Footer';

export class Landing extends React.Component{
    constructor(props){
      super();
      window.document.body.style.backgroundColor = "#232428";
    }

    componentDidMount(){
      window.addEventListener('resize', (() => {this.setState({})}).bind(this));
    }

    componentWillUnmount(){
      window.removeEventListener("resize", (() => {this.setState({})}).bind(this));
    }

    render(){      
      return(
        <div>
            <Nav collapsable={true}/>
            <div id="main-image" className="drop-shadow">
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
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              </p>
              <br/>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
            </div>
            <div id="bio-picture"></div>
        </div>
    );
}
