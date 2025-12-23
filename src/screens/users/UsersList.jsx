// screens/Users/UsersList.jsx
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/users.service";

export default function UsersList() {
  const navigate = useNavigate();
  const users = getUsers();

  return (
    <div>
      <h2>Usuarios registrados</h2>

      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.email}</li>
        ))}
      </ul>

      <button onClick={() => navigate("/usuarios/nuevo")}>
        Registrar Usuario
      </button>
    </div>
  );
}
