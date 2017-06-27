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
        let allContacts = this.props.contacts;
        return (

        <div>
            <link rel = "stylesheet" type = "text/css" href = 'css/newsletter.css'/>

            <div className="header-title" style={{marginTop: '30px', fontSize: '40px'}}>
                Would you like to hear from us?
            </div>

            <div className="header-title" style={{marginTop: '90px', fontSize: '20px'}}>
                Submit your email address for our newsletter
                <input id="email-input" placeholder="yourname@mail.com" ref = "email"/>
            </div>

                <div className  = "news-letter-signup">
                <input id="first-name-input" placeholder="First name" ref = "firstName"/>
                <input id="last-name-input" placeholder="Last name" ref = "lastName"/>

                <button onClick = {this.handleSubmit.bind(this)} type = "submit"> Submit</button>
                </div>

    </div>
    );
}

}
