import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut, faUserPlus } from "@fortawesome/free-solid-svg-icons"

function Sidebar(props) {
    return (
        <div className='sidebar' onClick={props.close}>
            {
                props.links.map(link => {
                    return (

                        <Link className='sidebar-link' to={link.path} key={link.name}><FontAwesomeIcon icon={link.icon} />{link.name}</Link>
                    );
                })
            }
            {!props.cookies.access_token ? (
                <>
                    <Link className='sidebar-link' to="/login"><FontAwesomeIcon icon={faSignIn} />Login</Link>
                    <Link className='sidebar-link' to="/signup"><FontAwesomeIcon icon={faUserPlus} />Signup</Link>
                </>
            ) : (
                <>
                    <Link className='sidebar-link' to="/login" onClick={props.logout}><FontAwesomeIcon icon={faSignOut} />Logout</Link>
                </>
            )}
        </div>
    )
}

export default Sidebar;