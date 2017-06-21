import React from 'react';

export const Footer = (props) => {
    if(window.innerWidth<770){
        return (<div></div>);
    }else{
    return(
        <div id ="footer">
                <div  className="footer-text"> All rights reserved © FoodLove 2017</div>
                <div className="footer-text"> Designed with <span style={{color: '#b51e1e'}}> love</span> by our developers</div>

        </div>
    );
    }
}
