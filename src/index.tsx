import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/assets/css/app.css";
import "@/assets/css/index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
);
