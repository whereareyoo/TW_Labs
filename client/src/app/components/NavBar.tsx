import {NavLink} from "react-router-dom";
import * as React from "react";
import './NavBar.css';

function NavBar()
{
    return(
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <NavLink className="link" to="/about">About us</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/booking">Book a Ticket</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/contact">Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;