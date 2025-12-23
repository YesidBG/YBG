import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-button">
        Dashboard
      </NavLink>

      <NavLink to="/usuarios" className="nav-button">
        Usuarios
      </NavLink>

      <NavLink to="/usuarios/nuevo" className="nav-button">
        Nuevo Usuario
      </NavLink>
    </nav>
  );
}
