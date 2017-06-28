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

            <div>
                <link rel="stylesheet" type = "text/css" href = 'css/newsletter.css'/>

                <div className="header-title newsletter-header" style={{fontSize: '27px'}}>
                    Would you like to hear from us?
                </div>

                <div className="header-title newsletter-header" >
                    Submit your email address for our newsletter
                </div>

                <div id="input-container">
                    <input className="news-letter-signup" placeholder="First name" ref="firstName"/>
                    <input className="news-letter-signup" placeholder="Last name" ref="lastName"/>
                    <input className="news-letter-signup" placeholder="yourname@mail.com" ref = "email"/>

                    <button onClick = {this.handleSubmit.bind(this)} type = "submit">Submit</button>
                </div>

            </div>
        );
}

}


                