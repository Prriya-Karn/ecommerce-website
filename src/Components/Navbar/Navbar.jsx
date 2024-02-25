import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
const Navbar = () => {
    const [click, setClick] = useState(false);
    console.log(click)
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <NavLink className="style"><img src="./Images/mylogo.png" className="img-fluid" /></NavLink>
                </div>
                <div className={(click === true) ? "list-section" : "menu-section"}>
                    <ul className="menu-ul">
                        <NavLink className="style" exact to="/home"><li className="home-link">Home</li></NavLink>
                        <NavLink className="style" exact to="/about"><li>About</li></NavLink>
                        <NavLink className="style" exact to="/contact"><li>Contact</li></NavLink>
                        <NavLink className="style" exact to="/products"><li>Products</li></NavLink>
                    </ul>
                </div>
              
                {
                    (click === true) ? <>

                        <div className="cross">
                            <NavLink onClick={() => setClick(!click)}><img src="./Images/cross.png" /></NavLink>
                        </div>
                  

                    </> : <>
                    <div className="hamburger">
                    <NavLink onClick={() => setClick(!click)}><img src="./Images/hamburger.png" /></NavLink>
                </div>

                    </>
                }

                <div className="loginbutton mobile-login-button">
                <NavLink className="style"><button className="btn">Login</button></NavLink>
                </div>
                <div className="nav-cart mobile-login-cart">
                <NavLink className="style"><img src="./Images/cart.png" /></NavLink>
                </div>

      
            </nav>

        </>
    )
}

export default Navbar;