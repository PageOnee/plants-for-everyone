/// Componentes 
import { Link } from 'react-router-dom';
import { Header } from '../../shared/header/Header'
import { Navbar } from '../../shared/navbar/Navbar';
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
                <Navbar />

                {/* Contenido */}
                <main className='row'>
                    <section className='col-12  d-flex flex-column flex-md-row'>

                        {/* Tarjeta de Bienvenida */}
                        <article className='col-12 col-md-5 d-flex flex-column justify-content-center align-items-center text-center'>

                            <h2 className='text-welcome'>Bienvenido a nuestro catálogo en línea de plantas: tu recurso completo para la jardinería y botánica.</h2>

                            <Link to="/catalogo" className='col-8 redirect-catalog d-flex flex-row justify-content-center align-items-center p-4 tooltipp' title='Ir al catálogo de plantas'>
                                <span>Explorar Catálogo de Plantas</span>
                                <span className="material-symbols-outlined mx-2"> arrow_forward </span>
                                <span className='tooltiptext'> Ir a Catalago de Plantas</span>
                            </Link>

                        </article>

                        {/* Espacio */}
                        <article className='col-0 col-md-1'></article>

                        {/* Carrusel de Imagenes */}
                        <article className='col-12 col-md-6 d-flex flex-row justify-content-end mt-5 d-none d-md-block'>
                            <ImageAccordion items={coolImages} />
                        </article>

                    </section>
                </main>

                <footer>
                    <section className='col-12 d-flex flex-row justify-content-between mt-5 py-4 px-5 footer-home'>

                        <article className='col-1 text-center font-footer'>
                            <p className='text-footer'>Estadisticas del Dia</p>
                        </article>

                        <article className='col-1'></article>

                        <article className='col-3 text-start d-flex flex-column border-left px-3'>
                            <span className='text-footer'> Victoria amazonica </span>
                            <span>  Especie de planta acuática que se encuentra en la región amazónica de América del Sur. Es conocida por sus enormes hojas circulares que pueden llegar a medir más de 2 metros</span>
                        </article>

                        <article className='col-3 text-center d-flex flex-row align-items-center border-left px-3'>
                            <img src="https://plants-for-everyone.onrender.com/icons/flower-svgrepo-com.svg" alt="" width={80} height={80} />

                            <div className='d-flex flex-column ms-3'>
                                <span className='text-footer'> 256 </span>
                                <span className='text-footer'> Tipos de Orquideas Registradas</span>
                            </div>
                        </article>

                        <article className='col-3 text-center d-flex flex-row align-items-center border-left px-3'>
                            <img src="https://plants-for-everyone.onrender.com/icons/flower-2-svgrepo-com.svg" alt="" width={80} height={80} />

                            <div className='d-flex flex-column ms-3'>
                                <span className='text-footer'> 129 </span>
                                <span className='text-footer'> Tipos de Geranios Registradas</span>
                            </div>
                        </article>

                    </section>
                </footer>

            </div>
        </div>

    );

}
