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

    },
    "distributor": {

    },
    "buyer":{

    }
};

export class LearnMore extends React.Component{
    constructor(props){
        super(props);

        window.document.body.style.backgroundColor = "#212942";

        this.type = this.props.type;

        this.template = LearnMoreTemplates[this.type];
    }

    render(){
        return(
            <div>
                <Nav collapsable={true}/>
                <div className="navbar-replace"></div>
                <div className="horizontal-spacer"></div>
                <div id="learnmore-main">
                    
                </div>
                <Footer />
            </div>
        );
    }   
}