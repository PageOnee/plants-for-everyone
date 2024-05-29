/// Componentes 
import { Header } from '../../shared/header/Header'
import { ImageAccordion } from '../components/accordions/Accordion';

/// Estilos
import './Home.css';


// Pagina - Inicio :
export const Home = () => {

    const coolImages = [
        {
            header: "Canada",
            image: "https://plants-for-everyone.onrender.com/images/accordion/accordion_item.jpg",
            text: `Habitad - Tundra`,
        },
        {
            header: "New Zealand",
            image: "https://plants-for-everyone.onrender.com/images/accordion/accordion_item_2.jpg",
            text: `Image description`,
        },
        {
            header: "New Zealand",
            image: "https://plants-for-everyone.onrender.com/images/accordion/accordion_item_3.jpg",
            text: `Image description`,
        },
        {
            header: "New Zealand",
            image: "https://plants-for-everyone.onrender.com/images/accordion/accordion_item_4.jpg",
            text: `Image description`,
        },
        {
            header: "New Zealand",
            image: "https://plants-for-everyone.onrender.com/images/accordion/accordion_item_5.jpg",
            text: `Image description`,
        },
    ];

    return (

        <div className='row mt-5'>
            <div className='col-12 home-bg'>

                {/* Encabezado */}
                <Header />

                {/* Contenido */}
                <main className='row'>
                    <section className='col-12 d-flex flex-row'>

                        {/* Tarjeta de Bienvenida */}
                        <article className='col-5 d-flex flex-column justify-content-center align-items-center text-center'>

                            <h2 className='text-welcome'>Bienvenido a nuestro catálogo en línea de plantas: tu recurso completo para la jardinería y la botánica.</h2>

                            <div className='redirect-catalog d-flex flex-row align-items-center p-4 '>
                                <span>Explorar Catalogo de Plantas</span>
                                <span className="material-symbols-outlined mx-2"> arrow_forward </span>
                            </div>

                        </article>

                        {/* Espacio */}
                        <article className='col-1'></article>

                        {/* Carrusel de Imagenes */}
                        <article className='col-6 d-flex flex-row justify-content-center mt-5'>
                            <ImageAccordion items={coolImages} />
                        </article>

                    </section>
                </main>

            </div>
        </div>

    );

}
