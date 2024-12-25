import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/assets/css/app.css";
import "@/assets/css/index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
