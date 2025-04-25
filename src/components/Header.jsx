"use client";
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <div className="header">
            <a href="/" className="header-left">
                <img src={'/logo.png'} alt="logo" className="logo"/>
                <div className="vertical-line"></div>
                <span className="header-text">
                    <h1>brandon</h1>
                    <h1>chin</h1>
                </span>
            </a>
            <button className="mobile-menu-button" onClick={toggleMenu}>
                <span className="menu-icon"></span>
            </button>
            
            <nav className={`header-nav ${menuOpen ? 'menu-open' : ''}`}>
                <a href="/experience">Work Experience</a>
                <a href="/research">Research Projects</a>
                <a href="/skills">Skill Set</a>
                <a href="/contact">Contact</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">Resume</a>
            </nav>
        </div>
    );
}

export default Header;