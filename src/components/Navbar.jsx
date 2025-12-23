// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0364C9",
        padding: "10px",
        display: "flex",
        gap: "15px"
      }}
    >
      <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link to="/usuarios" style={{ color: "#fff", textDecoration: "none" }}>
        Usuarios
      </Link>
      <Link to="/usuarios/nuevo" style={{ color: "#fff", textDecoration: "none" }}>
        Nuevo Usuario
      </Link>
    </nav>
  );
}
