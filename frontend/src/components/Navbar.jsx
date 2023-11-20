import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Navbar() {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/login");
    }

    return (
        <div className="custom-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <p className="navbar-brand text-white fs-1 me-3"><em>Hangry</em></p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className='nav-link text-white fs-3' style={{ textDecoration: "none" }}>Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {
                            !(cookies.access_token) ?
                                (
                                    <div className='d-flex'>
                                        <li className="nav-item">
                                            <Link to="/login" className='nav-link text-white fs-3' style={{ textDecoration: "none" }}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/signup" className='nav-link text-white fs-3' style={{ textDecoration: "none" }}>Sign up</Link>
                                        </li>
                                    </div>
                                )
                                :
                                <div className='d-flex'>
                                    <li className="nav-item" onClick={logout}>
                                        <p className='nav-link text-white fs-3' onClick={logout} style = {{cursor: "pointer"}}>Logout</p>
                                    </li>
                                </div>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;