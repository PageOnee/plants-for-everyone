/// Librerias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/// Paginas
import { Home } from "./modules/home/pages/Home";
import { Catalog } from "./modules/catalog/pages/Catalog";


// Componente principal :
function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Path ruta por defecto */}
        <Route path="/" element={<Navigate to="/inicio" />} />

        {/* Path rutas */}
        <Route path="inicio" element={<Home />} />
        <Route path="catalogo" element={<Catalog />} />

        {/* Path para ruta no encontrada */}
        <Route path="*" element={<Navigate to="/inicio" />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App
