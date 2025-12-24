// src/screens/Dashboard.jsx
<<<<<<< HEAD
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
=======
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>
        <p>Bienvenido al panel principal</p>
      </div>
    </>
  );
}
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
