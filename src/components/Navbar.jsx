import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-button">
        Panel de Control
      </NavLink>

      <NavLink to="/usuarios" className="nav-button">
        Usuarios
      </NavLink>

      <NavLink to="/usuarios/nuevo" className="nav-button">
        Nuevo Usuario
      </NavLink>

      <button className="nav-buttonb" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </nav>
  );
}
