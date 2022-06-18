import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import "./components/general.css";
import "./components/responsive.css";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
