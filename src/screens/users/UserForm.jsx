// screens/Users/UserForm.jsx
import { useState } from "react";
import { saveUser } from "../../services/users.service";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    saveUser({ name, email });
    navigate("/usuarios");
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>

      <input
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Guardar</button>
    </div>
  );
}
