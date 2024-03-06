//main entry point for react app
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import AuthProvider from "./context/AuthProvider.tsx";
import SetupProvider from "./context/SetupProvider.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SetupProvider>
          <App />
        </SetupProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
