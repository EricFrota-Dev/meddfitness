import Navegation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import { Route, Routes } from "react-router-dom";
import { navegation } from "./constants";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navegation />
      <main className="pt-20">
        <Routes>
          <Route path={"/"} element={<Home />} />
          {navegation.map(({ url, element: Component }, i) => (
            <Route key={i} path={url} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
