import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProfilePage from "./pages/User/UserProfile.jsx";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
