import React from "react"
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () =>{
    return (
        <div className = "navbar">
            <div className="containerNav">
                <img className="logo" ></img>
                <div className="links">
                    <Link className="link" to="/">
                        <h5>Home</h5>
                    </Link>
                    <Link className="link" to="/about">
                        <h5>About</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;