import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg p-4">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/about" className="nav-link">Информация</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar;