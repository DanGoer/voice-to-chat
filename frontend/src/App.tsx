import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import AuthRoute from "./components/AuthRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import UpdatePassword from "./pages/UpdatePassword";

//TODO: style etc?

function App() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/update-password" element={<UpdatePassword />} />
    </Routes>
  );
}

export default App;
