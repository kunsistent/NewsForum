import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
    return (
        <header>

            <div className="navbar">
                <div className="name"><Link className="nav-link" aria-current="page" to="/" >News App</Link></div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <div className="search-icon">&#128269;</div>
                </div>
                <button className="subscribe-button">Subscribe</button>
            </div>

        </header>
    )
}

