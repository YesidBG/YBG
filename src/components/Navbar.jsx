<<<<<<< HEAD
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
=======
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-button">
        Dashboard
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
      </NavLink>

      <NavLink to="/usuarios" className="nav-button">
        Usuarios
      </NavLink>

      <NavLink to="/usuarios/nuevo" className="nav-button">
        Nuevo Usuario
      </NavLink>
<<<<<<< HEAD

      <button className="nav-buttonb" onClick={handleLogout}>
        Cerrar Sesión
      </button>
=======
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
    </nav>
  );
}
