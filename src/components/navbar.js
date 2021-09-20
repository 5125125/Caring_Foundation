import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="#">CARING FOUNDATION <i className="fa fa-gratipay" aria-hidden="true"></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a id="ml" className="nav-link" href="/"><i className="fa fa-fw fa-home"></i>Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="ml" className="nav-link" href="/About"><i className="fa fa-user-circle"></i> About</a>
                        </li>
                        <li className="nav-item">
                            <a id="ml" className="nav-link" href="/Contact"><i className="fa fa-fw fa-envelope"></i>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <div className="footer">
                <p>Footer</p>
            </div>
        </>
    )
}
export default Navbar;