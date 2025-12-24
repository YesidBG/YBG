import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./screens/login";
import Dashboard from "./screens/Dashboard";
import UsersList from "./screens/users/UsersList";
import UserForm from "./screens/users/UserForm";

// 🔐 PROTECCIÓN DE RUTAS
function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
