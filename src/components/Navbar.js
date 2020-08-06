import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul><li className="home_class">Wecome to Air-Weigh</li>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/contact/">Contact</NavLink></li>
                    <li className="login"><NavLink to="/login/">Login</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;