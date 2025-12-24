// src/components/Button.jsx
export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 15px",
        backgroundColor: "#0364C9",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}
