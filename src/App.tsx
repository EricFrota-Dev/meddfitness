import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navegation from "@/components/layout/Navigation";

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
