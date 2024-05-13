/// Librerias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/// Paginas
import { Home } from "./pages/home/Home";


// Componente principal :
function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Path ruta por defecto */}
        <Route path="/" element={<Navigate to="/inicio" />} />

        {/* Path rutas */}
        <Route path="inicio" element={<Home />} />

        {/* Path para ruta no encontrada */}
        <Route path="*" element={<Navigate to="/inicio" />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App
