// Librerias
import React from "react";
import { Link, NavLink } from "react-router-dom";
// Estilos
import "./NavMenu.css";

// Componente
export const NavMenu = ({ children, logo }) => {
  return (
    <div className="nav-menu">
      {logo ? (
        <div className="app-icon">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export const NavMenuItem = ({ icon, name, to, exact }) => {
  return (
    <div className="nav-menu-item">
      <NavLink to={to} exact={exact}>
        <i className={`far fa-${icon}`}></i>
      </NavLink>
    </div>
  );
};
