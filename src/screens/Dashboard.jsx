// screens/Dashboard.jsx
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Panel Principal</h1>
      <button onClick={() => navigate("/usuarios")}>
        Ver Usuarios
      </button>
    </div>
  );
}
