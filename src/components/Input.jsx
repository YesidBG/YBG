// src/components/Input.jsx
export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "8px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  );
}
