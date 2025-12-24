<<<<<<< HEAD
// screens/Users/UsersList.jsx 
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/users.service";
import Navbar from "../../components/Navbar"; // 👈 TU NAVBAR 
=======
// screens/Users/UsersList.jsx
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/users.service";
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a

export default function UsersList() {
  const navigate = useNavigate();
  const users = getUsers();

  return (
<<<<<<< HEAD
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <div style={{ padding: "30px" }}>
        <h2>Usuarios registrados</h2>

        <ul> {users.map((u, i) => (
          <li key={i}>
            {u.name} - {u.email}
          </li>
        ))}
        </ul>
        <button onClick={() => navigate("/usuarios/nuevo")}>
          Registrar Usuario
        </button>
      </div>
    </>);
}
=======
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
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
