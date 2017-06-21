import React from 'react';

import { Nav } from "./Nav";
import { Footer } from './Footer';

export class AboutUs extends React.Component{
    constructor(props){
        super(props);
        window.document.body.style.backgroundColor = "#b51e1e";
    }

    render(){
        return(
            <div>
                <Nav collapsable={false}/>
                
                <Footer/>
            </div>
        );
    }   
}