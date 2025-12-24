<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    // 🔐 Simular login correcto
    localStorage.setItem("auth", "true");

=======
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
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
    navigate("/dashboard");
  };

  return (
<<<<<<< HEAD
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
=======
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
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
    </div>
  );
}
