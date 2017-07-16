import React from 'react';

export class Newsletter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contacts: props.contacts
        };
    }

    handleSubmit(){
        let firstName = this.refs.firstName.value;
        let lastName = this.refs.lastName.value;
        let emailAddress = this.refs.email.value;
        console.log(firstName, lastName, emailAddress);
        this.authenticateMailChimpPlease();
        this.sendToMailChimp({
                "email_address": emailAddress,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": firstName,
                    "LNAME": lastName}
        })

        this.refs.firstName.value = '';
        this.refs.lastName.value = '';
        this.refs.email.value = '';

    }
    authenticateMailChimpPlease(){
        var request = new XMLHttpRequest();
            request.open('GET', 'https://us16.api.mailchimp.com/3.0/?user=mgancayco:f62d434a24d3f3d669c23837b344b7ea-us16', true);
            // request.setRequestHeader('Content-Type', 'application/json');
            request.send();

    }

    sendToMailChimp(data){
        var request = new XMLHttpRequest();
            request.open('POST', 'https://us16.api.mailchimp.com/3.0/lists/15fa375799/members', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(data);

    }

    render(){
        const allContacts = this.props.contacts;

        return (

            <div style = {{backgroundColor : "pink"}}>
                <link rel="stylesheet" type = "text/css" href = 'css/newsletter.css'/>
                    <div id="mc_embed_signup_scroll">
                    <div className="header-title newsletter-header" >
                        Submit your email address for our newsletter
                    </div>
                    <div className="header-title newsletter-header" style={{fontSize: '27px'}}>
                        Would you like to hear from us?
                    </div>
                    <div id="input-container">
                        <form action="//foodloveservices.us16.list-manage.com/subscribe/post?u=8628b16c54dfa9979180a1c26&amp;id=15fa375799" method="post"
                            id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                            target="_blank" noValidate>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                            <input className="news-letter-signup" type="email"  name="EMAIL" id="mce-EMAIL" placeholder = "yourname@email.com*"/>
                            <input className="news-letter-signup" type="text"  name="FNAME" id="mce-FNAME" placeholder = "First name"/>
                            <input className="news-letter-signup" type="text" name="LNAME" id="mce-LNAME" placeholder = "Last name"/>

                        <div style={{position: "absolute", left:"-5000px", ariaHidden:"true"}}>
                            <input type="text" name="b_8628b16c54dfa9979180a1c26_15fa375799" tabIndex="-1" value=""/>
                        </div>

                                <button className = "btn btn-lg btn-success" style = {{marginTop: "30px", float:"left", width: "60%", marginLeft: "20%" }}>Subscribe</button>
                        </form>
                        </div>
                    </div>
                </div>
                    );
}

}
