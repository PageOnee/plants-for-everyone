import { Header } from '../shared/header/Header';
import './Help.css';

export const Help = () => {
    return (
        <div className="help-container">

            <Header />

            <main className='main-content'>
                <h2>Preguntas Frecuentes</h2>
                <div className="faq">
                    <h3>¿Cómo puedo buscar una planta específica en el catálogo?</h3>
                    <p>Puedes usar la barra de búsqueda en la parte superior de la página para encontrar plantas por su nombre común, nombre científico o características específicas.</p>
                </div>
                <div className="faq">
                    <h3>¿Qué información se proporciona sobre cada planta?</h3>
                    <p>Cada planta en el catálogo incluye información sobre su nombre científico, nombre común, características, cuidados necesarios y fotos de alta calidad.</p>
                </div>
                <div className="faq">
                    <h3>¿Puedo agregar mis propias plantas al catálogo?</h3>
                    <p>Sí, puedes registrarte y subir información y fotos de tus propias plantas para compartirlas con la comunidad.</p>
                </div>
                <div className="faq">
                    <h3>¿Es posible comprar plantas directamente desde el catálogo?</h3>
                    <p>No, nuestro catálogo es solo informativo. Sin embargo, proporcionamos enlaces a viveros y tiendas donde puedes comprar algunas de las plantas listadas.</p>
                </div>
            </main>

        </div>
    )
}
