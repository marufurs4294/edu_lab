import React from 'react';
import { NavLink } from 'react-router-dom';
import  brandlogo from '../../images/edulab logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header d-flex justify-content-around align-items-center'>
            <div className='navbar-brand d-flex align-items-center'>
                <img src={brandlogo} alt="" />
            </div>
            <div>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='course'>Course</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;