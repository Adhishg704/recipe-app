import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Sidebar from './Sidebar';
import { faHome, faSearch, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "About",
            path: "/about",
            icon: faInfo
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/login");
    }

    return (
        <>
            <div className='navbar container'>
                <a href="#!" className='logo'>Culinary<span>Com</span>pass</a>
                <div className='nav-links'>
                    {
                        links.map(link => {
                            return (
                                <Link to={link.path} key={link.name}>{link.name}</Link>
                            );
                        })
                    }
                    {!cookies.access_token ? (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/search">Search</Link>
                            <Link to="/login" onClick={logout}>Logout</Link>
                        </>
                    )}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            {
                showSidebar && <Sidebar close={closeSidebar} links={links} cookies = {cookies} logout = {logout} />
            }
        </>
    )
}

export default Navbar;