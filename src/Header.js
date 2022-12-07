import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

//This is Header component. 
//It displays logo (company logo and name as same in this case), and other other information (signup/signin, search, favourite, shopping cart) to user 
//It has one prop - isLoggedIn (boolean) which is set true if user is logged in or false if user is not signed in.
//If user is logged in then it displays Welcome message, else it displays signin.
const Header = (props) => {
    //value of prop (isLoggedIn) assigned to a local variable
    const isLoggedIn = props.isLoggedIn

    return(
    <main>
        <div class="container">
            <div class="logo">
                <h1>{props.logoText}</h1>
            </div>
            <div class="icons">
                {/*showing 'Welcome' or 'Sign-in' based on value of isLoggedIn*/}
                <div class="sign">
                    {isLoggedIn ? 'Welcome' : 'Sign-in'}
                </div>
                <div class="sign">
                    {/*show search icon for search*/}
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div class="sign">
                    {/*show heart icon to view favourite items*/}
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div class="sign">
                    {/*show shopping cart icon to view shopping cart*/}
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
        </div>
    </main>
    )
}


export default Header