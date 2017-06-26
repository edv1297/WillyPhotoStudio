import React from 'react';

export const Footer = (props) => {
    if(isMobile()){
        return (<div></div>);
    }else{
        return(
            <div id ="footer">
                    <div className="footer-text">All rights reserved © FoodLove Services LLC 2017</div>
                    <div className="footer-text">Designed with <span style={{color: '#00ffff'}}>love</span> by our developers</div>
                    <div className ="footer-text">Contact us <span style ={{textDecoration: 'underline'}}>mia@foodloveservices.com</span></div>
            </div>
        );
    }
}
