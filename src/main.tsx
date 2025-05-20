import React from "react"; // You need to import React for JSX
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.BASE_URL || "/christianlazo-portfolio"}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
