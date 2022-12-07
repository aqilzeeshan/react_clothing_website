//Import React
import React from 'react'
//Import React Router
import {Link} from 'react-router-dom'
//Menu component shows navigation links
const Menu = () => (
    <nav class="navbar">
        <ul>
            {/*Each navigation link is mapped to the page using React Router*/}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/legal">Legal</Link></li>
            <li><Link to="/user">User Profile</Link></li>
            <li><Link to="/calculate">Payment Calculator</Link></li>
        </ul>
    </nav>   
)
//Export Menu so it can be used by other components
export default Menu

