import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Raffle from "./pages/raffle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/rifa/:titulo/:mensagem/:inicio/:final/:valor"
          element={<Raffle />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
