/// Librerias de React
import { Link } from 'react-router-dom'; // Importa el componente Link desde react-router-dom

/// Estilos
import './Header.css'


// Componente: Encabezado
export const Header = () => {

    return (

        <header>
            <div className="row p-0 mb-5">
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
                    <div className="col-9">
                        <nav className="p-0">

                            <ul className="d-flex flex-row justify-content-between align-items-center">

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
                                    <Link to="/acerca-de-nosotros" className="text-link d-flex flex-row align-items-center" title="Acerca de Nosotros">
                                        <span>  Acerca de Nosotros </span>
                                    </Link>
                                </li>

                                <li className="item-nav mx-5">
                                    <Link to="/acerca-de-nosotros" className="text-link d-flex flex-row align-items-center" title="Ajustes">
                                        <span className="material-symbols-outlined"> settings </span>
                                        <span className='mx-2'> Ajustes </span>
                                    </Link>
                                </li>

                            </ul>

                        </nav>
                    </div>

                </div>
            </div>
        </header >

    );

}
