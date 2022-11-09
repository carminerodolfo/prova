import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import {Link} from 'react-scroll'


const NavMenuStylesProva = styled.div`
.header {
    position: fixed;
    height: 80px;
    width: 100%;
    top: 0;
    z-index: 99;
    transition: .3s ease-in;
    overflow: hidden;
    background-color: #000;
}

.header .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 97%;
    height: 100%;
    padding: 0 1rem;
    background-color: #000;
}

.header .nav-menu a {
    color: #555555;
    cursor: pointer;
}

.header .navbar img {
    width: 50px;
    height: auto;
}

.header .nav-menu {
    display: flex;
}
a {
    font-size: 1rem;
}

.header .nav-item {
    padding: 1rem;
    font-weight: 500;
}

.nav-item .active {
    color: #fff !important;
}

.header .nav-item a:hover {
    color: #fff;
}

.hamburger {
    display: none;
}

.active {
    color: #fff;
}



@media screen and (max-width:940px) {
    .header {
        max-width: 100%;
        background-color: #000;
        z-index:99;

    }

    .header .navbar {
        max-width: 100%;
    }

    .hamburger {
        display: block;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 80px;
        flex-direction: column;
        background-color: #000;
        width: 100%;
        height: 100vh;
        z-index: 999;
        text-align: center;
        transition: .3s;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 1.5rem 0;
    }

    .header .navbar img {
        width: 30px;
    }
}
`


const NavbarProva = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <NavMenuStylesProva>
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#d9d9d9' }} />)
                        : (<FaBars size={30} style={{ color: '#d9d9d9' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='hero' spy={true} smooth={true} offset={0} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={0} duration={500}  onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='portfolio' spy={true} smooth={true} offset={0} duration={500}  onClick={closeMenu} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contacts' spy={true} smooth={true} offset={0} duration={500}  onClick={closeMenu} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </NavMenuStylesProva>
    )
}

export default NavbarProva;

