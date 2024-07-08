// C:\react-js\myreactdev\src\components\Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    const handleLogout = () => {
        props.token();
        localStorage.clear();
    };

    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addnewuser">Add User</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
