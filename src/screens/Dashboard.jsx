// src/screens/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Dashboard.css"; // 👈 IMPORTAR CSS

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Panel de Control</h1>
        <p>Bienvenido al panel principal</p>

        {/* COMPONENTE IMAGEN + BOTÓN */}
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
            alt="Usuarios"
          />

          <h3>Clientes</h3>

          <button onClick={() => navigate("/usuarios")}>
            Ir a Usuarios
          </button>
        </div>
      </div>
    </>
  );
}
