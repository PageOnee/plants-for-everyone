/// Librerias de React
import { Link } from 'react-router-dom'; // Importa el componente Link desde react-router-dom

/// Estilos
import './Header.css'

// Componente: Encabezado
export const Header = () => {

    return (

        <header>
            <div className="row p-0 mb-5 d-none d-md-block">
                <div className="col-12 d-flex flex-row align-items-center header py-3 ">

                    {/* Titulo */}
                    <div className="col-3">
                        <h1 className="d-flex flex-row align-items-center">
                            <img src="/favicon.svg" width={50} height={50} alt="Icono de la pagina web" />
                            <span className="mx-4 title-text">Plantas para Todos</span>
                            <span mx-2> | </span>
                        </h1>
                    </div>

                    {/* Menu de Navegacion */}
                    <nav className="col-9 d-flex flex-row align-items-center justify-content-center p-0">

                        <ul className="d-flex flex-row align-items-center my-auto">

                            <li className="item-nav mx-5">
                                <Link to="/inicio" className="text-link d-flex flex-row align-items-center" title="Inicio">
                                    <span className="material-symbols-outlined"> cottage </span>
                                    <span className='mx-2'> Inicio </span>
                                </Link>
                            </li>

                            <li className="item-nav mx-5">
                                <Link to="/catalogo" className="text-link d-flex flex-row align-items-center" title="Catálogo de Plantas">
                                    <span className="material-symbols-outlined"> deceased </span>
                                    <span className='mx-2'> Catálogo de Plantas </span>
                                </Link>
                            </li>

                            <li className="item-nav mx-5">
                                <Link to="/ayuda" className="text-link d-flex flex-row align-items-center" title="Acerca de Nosotros">
                                    <span className="material-symbols-outlined"> info </span>
                                    <span className='mx-2'> Preguntas Frecuentes </span>
                                </Link>
                            </li>

                            <li className="item-nav mx-5">
                                <Link to="/ajustes" className="text-link d-flex flex-row align-items-center" title="Ajustes">
                                    <span className="material-symbols-outlined"> settings </span>
                                    <span className='mx-2'> Ajustes </span>
                                </Link>
                            </li>

                        </ul>

                    </nav>


                </div>
            </div>
        </header >

    );

}
