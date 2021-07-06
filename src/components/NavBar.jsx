import React, { useState } from 'react'
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


function NavBar() {
   const [click, setClick] = useState(false)

   const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <NavLink exact to="/" className="nav-logo">
                     Romar
                   </NavLink>
                   <ul className={click ? "nav-menu active" : "nav-menu"}>
                       <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Home
                        </NavLink>
                       </li>
                       <li className="nav-item">
                        <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                            About
                        </NavLink>
                       </li>
                       <li className="nav-item">
                        <NavLink exact to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Blog
                        </NavLink>
                       </li>
                       <li className="nav-item">
                        <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Contact
                        </NavLink>
                       </li>
                   </ul>
                   <div className="nav-icon" onClick={handleClick}>
                       {click?<IoMdClose />: <GiHamburgerMenu />}
                   </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
