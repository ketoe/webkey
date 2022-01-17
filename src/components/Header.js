import React, { PureComponent } from 'react';
import logo from './css/images/logo.png';
import facebook from './css/images/facebook.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (  
        <>
            <img src={logo} alt="Logo WebKey" className="logo"/>
            <a href="https://www.facebook.com/webKeySocial" target="_blank"><img src={facebook} alt="Facebook icon" className="facebook" /></a>
            <nav>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/omnie">Omnie</NavLink></li>
                <li><NavLink to="/projekty">Projekty</NavLink></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
            </nav>
        </>
    );
}
 
export default Header;