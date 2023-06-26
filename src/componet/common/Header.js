import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './nav/Nav'
import './header.css'
import Logo from "../images/Newphotos/WINTERFUEL.png";

function Header() {
    return (
        <div>
            <div className='logodiv'>
        <NavLink to='/'>

            <img  className="logo" src={Logo} alt="winterfuel logo" />
        </NavLink>



                <Nav />

            </div>

        </div>
    )
}

export default Header