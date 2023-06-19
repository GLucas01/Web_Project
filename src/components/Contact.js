import React, { Component } from 'react'
import contact from '../assets/contactlogo.png';
import mailme from '../assets/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Kevin</strong></h3>
                <h4>Un texte quelconque</h4>
                <h4>Email Id: LE MAIL</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=okdexter94@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>

                
            </section>
        )
    }
}

export default Contact
