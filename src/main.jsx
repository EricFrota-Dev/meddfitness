import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Turma from "./pages/Turma/index.jsx";
import MeddEventos from "./pages/MeddEventos/index.jsx";
import MeddFitness2025 from "./pages/MeddFitness2025/index.jsx";
import GarotaMegaFitness from "./pages/GarotaMegaFitness/index.jsx";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/meddfitness/",
    element: <App />,
    children: [
      { path: "/meddfitness/", element: <Home /> },
      { path: "/meddfitness/turma", element: <Turma /> },
      { path: "/meddfitness/medd_eventos", element: <MeddEventos /> },
      { path: "/meddfitness/meddfittnes_2025", element: <MeddFitness2025 /> },
      {
        path: "/meddfitness/garota_megafittnes",
        element: <GarotaMegaFitness />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
