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

function App() {
  return (
    <>
      <NavBar />
      <main className="pt-5 min-vh-100">
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/chat" element={<Chat />} />
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
