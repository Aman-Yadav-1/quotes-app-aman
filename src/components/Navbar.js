import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";

import {FaBars, FaTimes, FaBeer} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {useState} from 'react';


function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
        <IconContext.Provider value={{color: "#ffff"}}>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to="/" className='navbar-logo'>
                    Hitsville Epigraph Quotes
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes/>: <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink to="/" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            About Heq
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/search" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Search
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/qotd" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            QOTD
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/post" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Post a Quote
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/author" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Authors Corner
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/gallery" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Gallery
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/trending" className={({isActive}) => "nav-links" + (isActive ? " acivated" : "")} onClick={closeMobileMenu}>
                            Trending
                        </NavLink>
                    </li>
                </ul>
                
            </div>
            
        </nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;