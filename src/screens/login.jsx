// src/screens/login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí luego validaremos usuario/contraseña
    console.log(usuario, password);

    // 👉 Navegar al dashboard
    navigate("/dashboard");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Iniciar sesión</h2>

      <Input
        label="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="Entrar" onClick={handleLogin} />
    </div>
  );
}
