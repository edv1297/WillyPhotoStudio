import React from 'react';

import { Nav } from "./Nav";
import { Footer } from './Footer';

export const Producer = (props) => {
    return (<LearnMore type={"producer"}/>);
}

export const Distributor = (props) => {
    return (<LearnMore type={"distributor"}/>);
}

export const Buyer = (props) => {
    return (<LearnMore type={"buyer"}/>);
}

const LearnMoreTemplates = {
    "producer": {
        "main-image": "assets/producer.jpg",
        "title": <span>You have a farm to run. <br/> Let us take care of business.</span>,
        "subtitle": <span>Spend less time managing and more time doing what you love.</span>,
        "features":{
            "1": {
                "icon": "x.png",
                "heading": <span>Increase market presence</span>,
                "text": <span>Expand your operations with our user base. Connect with buyers of all sizes on our platform: universities, restaurants, hotels - you name it. Find distributors and food hubs that can deliver your products to customers you can’t reach. Grow your customer network in half the time.</span>
            },
            "2": {
                "icon": "x.png",
                "heading": <span>Your best foot forward</span>,
                "text": <span>Break through the background noise with personalized profile pages. Upload photos, videos, and logos. Go the extra mile with our professional photography team. Show off certifications, awards, and any newsworthy info. Link to social media and personal webpages. Build your brand. Tell your story.</span>
            },
            "3": {
                "icon": "x.png",
                "heading": <span>Organized and up-to-date</span>,
                "text": "Your inventory can change in instant – we’re here to keep you organized. Send notifications on product changes simultaneously to your entire network. Change details of all your outbound orders."
            },
            "4": {
                "icon": "x.png",
                "heading": <span>On the go. Anywhere.</span>,
                "text": <span>OYou don’t need to leave the field to get the job done. FoodLove offers smartphone and tablet compatibility for working on the go. Take pictures you can upload while out in the field.</span>
            }
        }
    },
    "distributor": {
        "main-image": "assets/producer.jpg",
        "title": <span>You want to source locally and responsibly.<br/>We’re here to help.</span>,
        "subtitle": <span>With FoodLove, buying local is<br/>convenient, efficient, and all in one place.</span>
    },
    "buyer":{
        "main-image": "assets/producer.jpg",
        "title": <span>You have a business to run.<br/>We’ve got your back.</span>,
        "subtitle": <span>Simple, powerful tools that make working with buyers and producers efficient and effective.</span>
    }
};

export class LearnMore extends React.Component{
    constructor(props){
        super(props);

        window.document.body.style.backgroundColor = "#212942";

        this.type = this.props.type;
        this.typeTitle = this.props.type[0].toUpperCase() + this.props.type.substring(1);

        this.template = LearnMoreTemplates[this.type];
    }

    render(){
        return(
            <div>
                <Nav collapsable={window.innerWidth >= 770}/>
                <div id="learnmore-main">
                    <img src={this.template["main-image"]} width="100%" style={{opacity:'0.5'}}/>
                    <div id="learnmore-title">{this.template["title"]}</div>
                    <div id="learnmore-subtitle">{this.template["subtitle"]}</div>
                    <div id="signup-button" className="btn btn-lg btn-success">Sign Up as a {this.typeTitle}</div>
                </div>
                <div className="horizontal-spacer"></div>
                <div id="learnmore-features">
                    <div id="features-container">
                        <div className="feature">
                            <div className="feature-icon">{this.template["features"]["1"]["icon"]}</div>
                            <div className="feature-header">{this.template["features"]["1"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["1"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">{this.template["features"]["2"]["icon"]}</div>
                            <div className="feature-header">{this.template["features"]["2"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["2"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">{this.template["features"]["3"]["icon"]}</div>
                            <div className="feature-header">{this.template["features"]["3"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["3"]["text"]}</div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">{this.template["features"]["4"]["icon"]}</div>
                            <div className="feature-header">{this.template["features"]["4"]["heading"]}</div>
                            <div className="feature-text">{this.template["features"]["4"]["text"]}</div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }   
}