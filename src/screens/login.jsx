// screens/Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Iniciar sesiónsss</h2>
      <input placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
