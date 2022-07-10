import React from 'react';
import { NavLink } from 'react-router-dom';

//components

//css
import "./footer.css"

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Company<span>logo</span></h3>
                <p className="footer-links">
                    <NavLink to="/" className="link-1">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </p>
                <p className="footer-company-name">Company Name © 2015</p>
            </div>
            <div className="footer-center">
                <div>
                    <p><span>Baraket</span> Beirut, Lebanon</p>
                </div>
                <div>
                    <p>+961.71.276.017</p>
                </div>
                <div>
                    <p><a href="mailto:ahmadharissa25@gmail.com">ahmadharissa25@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <NavLink to="/"><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to="/"><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                    <NavLink to="/"><i className="bi bi-github"></i></NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer