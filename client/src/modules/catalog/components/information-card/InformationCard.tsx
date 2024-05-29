// Librerias de React
import React, { useState } from 'react';

// Componentes
import { Modal } from '../modal/Modal';

// Estilos 
import './InformationCard.css';

// Props del componente
interface InformationCardProps {
    name: string;
    scientificName: string;
    imageUrl: string;
    description: string;
    habitat: string;
    uses: string;
}

// Componente: Tarjeta de Informacion
export const InformationCard: React.FC<InformationCardProps> = ({ name, scientificName, imageUrl, description, habitat, uses }) => {

    // Estado Modal
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Descripcion
    const [descriptionToRead, setDescriptionToRead] = useState<string>('');

    const openModal = (fullDescription: string) => {
        setDescriptionToRead(fullDescription);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        window.speechSynthesis.cancel(); // Detiene cualquier habla en curso
        setIsModalOpen(false);
    };

    const handleSpeak = () => {
        window.speechSynthesis.cancel(); // Detiene cualquier habla en curso
        const text = descriptionToRead;
        const maxLength = 200; // Longitud máxima de caracteres por solicitud
        const chunks = text.match(new RegExp(`.{1,${maxLength}}`, 'g')); // Divide el texto en partes de longitud máxima
        chunks?.forEach(chunk => { // Manejar posible nulabilidad de chunks
            const utterance = new SpeechSynthesisUtterance(chunk);
            utterance.lang = 'es-ES';
            window.speechSynthesis.speak(utterance);
        });
    };

    return (
        <div className='information-card col-12 m-4'>
            {/* Encabezado */}
            <header>
                <h3 className='text-center py-3 d-flex flex-column'>
                    <span>{name}</span>
                    <span className="scientificName">{scientificName}</span>
                </h3>
            </header>

            {/* Contenido */}
            <main>
                <section>
                    <article className='d-flex flex-row justify-content-center'>
                        <img src={imageUrl} alt={`${name} - ${description}`} className='img-plant' />
                    </article>
                    <article className='p-2 d-flex flex-row justify-content-center'>
                        <p className='px-2'>{description.substring(0, 150)}... <span onClick={() => openModal(description)} className="read-more">Ver más</span></p>
                    </article>
                </section>
            </main>

            {/* Pie de Pagina */}
            <footer className='d-flex flex-row justify-content-center'>
                <button className="btn-siguiente" onClick={() => openModal(description)}> Ver detalles </button>
            </footer>

            {/* Componente : Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={
                <div>
                    <header>
                        <h3 className='text-center py-3 d-flex flex-column'>
                            <span>{name}</span>
                            <span className="scientificName">{scientificName}</span>
                        </h3>
                    </header>

                    <main>
                        <section>
                            <article className='d-flex flex-row justify-content-center'>
                                <img src={imageUrl} alt={`${name} - ${description}`} className='img-plant' />
                            </article>

                            <article className='p-2 d-flex flex-column justify-content-center align-items-center'>
                                <p className='col-12'>{descriptionToRead}</p>
                                <button onClick={handleSpeak} className="col-9 btn-hablar d-flex flex-row align-items-center justify-content-center px-3 py-3 text-center" title='Reproducir Audio'>
                                    <span className="material-symbols-outlined"> volume_up </span>
                                    <span>Escuchar Descripcion de la Planta</span>
                                </button>
                            </article>

                            <article>
                                <p><strong>Habitat: </strong> {habitat}</p>
                            </article>

                            <article>
                                <p><strong>Usos: </strong> {uses}</p>
                            </article>

                            <article>

                            </article>
                        </section>
                    </main>

                </div>
            } />
        </div>
    );
};
