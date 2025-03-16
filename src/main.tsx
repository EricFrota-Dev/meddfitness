import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesProvider from "./router";

createRoot(document.getElementById("root")!).render(<RoutesProvider />);
