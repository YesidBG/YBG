<<<<<<< HEAD
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a

import Login from "./screens/login";
import Dashboard from "./screens/Dashboard";
import UsersList from "./screens/users/UsersList";
import UserForm from "./screens/users/UserForm";

<<<<<<< HEAD
// 🔐 PROTECCIÓN DE RUTAS
function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/" replace />;
}

=======
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuarios/nuevo"
          element={
            <ProtectedRoute>
              <UserForm />
            </ProtectedRoute>
          }
        />
=======
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<UsersList />} />
        <Route path="/usuarios/nuevo" element={<UserForm />} />
>>>>>>> a26812ec3ff5f6fe44448db25754bbf762fe4d7a
      </Routes>
    </BrowserRouter>
  );
}

export default App;
