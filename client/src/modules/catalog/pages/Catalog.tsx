import { InformationCard } from '../components/information-card/InformationCard';
import { plants } from '../../core/data/plant';
import './Catalog.css';
import { Header } from '../../shared/header/Header';

export const Catalog = () => {
    return (
        <div className='row'>
            <div className='col-12 catalog d-flex flex-column'>

                <Header />

                <div className='d-flex flex-column mt-5'>

                    <article className='col-12'>
                        <h2 className='title-catalog ms-5 my-3'>Catálogo de Plantas</h2>
                    </article>

                    <article className='col-12'>
                        <div className="plant-catalog d-flex flex-row flex-wrap justify-content-center">
                            {plants.map((plant, index) => (
                                <InformationCard
                                    key={index}
                                    name={plant.name}
                                    scientificName={plant.scientificName}
                                    imageUrl={plant.imageUrl}
                                    description={plant.description}
                                    habitat={plant.habitat}
                                    uses={plant.uses}
                                />
                            ))}
                        </div>
                    </article>


                </div>



            </div>

        </div>
    );
}
