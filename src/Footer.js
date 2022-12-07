import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

//Footer component displays footer 
//Props - it takes text (Company logo/name) as prop and shows it
const Footer = (props) => (
    <footer>
        <div class="logo-small">
            <h4>{props.text}</h4>
        </div>
        <div class="icons">
            <div class="sign1">
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div class="sign1">
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div class="sign1">
                <FontAwesomeIcon icon={faPinterest} />
            </div>
        </div>
    </footer>
)

export default Footer