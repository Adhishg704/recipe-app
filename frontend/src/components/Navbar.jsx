import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className = "custom-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="nav-link text-white fs-1 me-3"><em>Hangry</em></p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <p className="nav-link text-white fs-3"><Link to = "/" className='text-white' style = {{textDecoration: "none"}}>Home</Link></p>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <p className="nav-link text-white fs-3"><Link to = "/login" className='text-white' style = {{textDecoration: "none"}}>Login</Link></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link text-white fs-3"><Link to = "/signup" className='text-white' style = {{textDecoration: "none"}}>Sign up</Link></p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;