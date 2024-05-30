/// Librerias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/// Paginas
import { Home } from "./modules/home/pages/Home";
import { Catalog } from "./modules/catalog/pages/Catalog";
import { Help } from "./modules/help/Help";
import { Settings } from "./modules/settings/Settings";


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
        <Route path="ayuda" element={<Help />} />
        <Route path="ajustes" element={< Settings />} />


        {/* Path para ruta no encontrada */}
        < Route path="*" element={<Navigate to="/inicio" />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App
