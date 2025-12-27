import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import UsersList from "./screens/users/UsersList";
import UserForm from "./screens/users/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<UsersList />} />
        <Route path="/usuarios/nuevo" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
