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

      <div style={{ padding: "30px" }}>
        <h2>Usuarios registrados</h2>

        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {u.name} - {u.email}
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
