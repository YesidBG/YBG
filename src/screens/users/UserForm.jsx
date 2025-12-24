import { useState } from "react";
import { saveUser } from "../../services/users.service";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import documentTypes from "../../data/documentTypes";
import "./UserForm.css"; // 👈 CSS

export default function UserForm() {
  const navigate = useNavigate();

  const [identification, setIdentification] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    saveUser({
      identification,
      documentType,
      name,
      lastName,
      birthDate,
      photo
    });
    navigate("/usuarios");
  };

  return (
    <>
      <Navbar />

      <div className="user-form">
        <h2>Registrar Usuario</h2>

        <input
          placeholder="Identificación"
          value={identification}
          onChange={e => setIdentification(e.target.value)}
        />

        <br /><br />

        <select
          value={documentType}
          onChange={e => setDocumentType(e.target.value)}
        >
          <option value="">Seleccione tipo de documento</option>
          {documentTypes.map(type => (
            <option key={type.id} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Apellido"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />

        <br /><br />

        <input
          type="date"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />

        {/* PREVIEW CON CSS */}
        {photoPreview && (
          <div className="photo-preview">
            <img src={photoPreview} alt="Vista previa" />
          </div>
        )}

        <br /><br />

        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </>
  );
}
