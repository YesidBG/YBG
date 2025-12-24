import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./UserForm.css";

export default function UserForm() {
  const navigate = useNavigate();

  const [identificacion, setIdentificacion] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const userData = {
      identificacion,
      tipoDocumento,
      nombre,
      apellido,
      fechaNacimiento,
      foto,
    };

    console.log("Usuario guardado:", userData);
    navigate("/usuarios");
  };

  return (
    <>
      <Navbar />

      <div className="user-form-container">
        <h2>Registrar Usuario</h2>

        {/* Tipo Documento + Identificación */}
        <div className="form-row">
          <select
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
          >
            <option value="">Tipo Doc</option>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="CE">CE</option>
            <option value="PAS">PAS</option>
          </select>

          <input
            placeholder="Identificación"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
          />
        </div>

        {/* Nombre + Apellido */}
        <div className="form-row">
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        {/* FECHA + ADJUNTO (SOLO ESTO SE CAMBIÓ) */}
        <div className="form-row">
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
          />
        </div>

        {/* Vista previa ABAJO (igual que antes) */}
        {preview && (
          <div className="preview-box">
            <img src={preview} alt="Vista previa" />
          </div>
        )}

        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </>
  );
}
