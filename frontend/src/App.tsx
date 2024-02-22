import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import AuthRoute from "./components/AuthRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import UpdatePassword from "./pages/UpdatePassword";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode: () => void = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <NavBar darkMode={darkMode} />
      <main
        data-bs-theme={darkMode ? "dark" : "light"}
        className="pt-5 min-vh-100"
      >
        <Routes>
          <Route element={<AuthRoute />}>
            <Route
              path="/chat"
              element={<Chat toggleDarkMode={toggleDarkMode} />}
            />
            <Route path="/chat2" element={<Home />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
