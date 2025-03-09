import Navegation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navegation />
      <main className="pt-17 md:pt-21">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
