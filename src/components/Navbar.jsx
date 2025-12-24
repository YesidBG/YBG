import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí luego puedes limpiar token, localStorage, etc.
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

      <button onClick={handleLogout} className="nav-buttonb">
        Cerrar Sesión
      </button>
    </nav>
  );
}
