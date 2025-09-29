import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invitacion from "./components/Invitacion";
import Landing from "./View/Landing"; // Crea este componente

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invitacion />} />
        <Route path="/Boda-Kaliana-Andres" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;