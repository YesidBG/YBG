// src/screens/users/UsersList.jsx
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/users.service";
import Navbar from "../../components/Navbar";

export default function UsersList() {
  const navigate = useNavigate();
  const users = getUsers();

  return (
    <>
      <Navbar />

      <div className="user-list-container">
        <h2>Usuarios registrados</h2>

        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {u.name} - {u.email} - {u.tipoDocumento} - {u.identificacion}
            </li>
          ))}
        </ul>

        <button onClick={() => navigate("/usuarios/nuevo")}>
          Registrar Usuario
        </button>
      </div>
    </>
  );
}
