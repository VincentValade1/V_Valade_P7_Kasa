import { useParams } from 'react-router';
import logements from '../datas/logements.json';
import Slideshow from './Slideshow';
import Collapse from './Collapse';
import '../styles/LogementMenu.css'

function LogementMenu() {
    const { id } = useParams();
    const matchingAppart = logements.find((appart) => appart.id === id);
    
    return (
        <main>
            <Slideshow slides={matchingAppart.pictures}/>
            <div className='data-container'>
                <div className="top-data-div">
                    <div className="name-tags-div">
                        <h1>{matchingAppart.title}</h1>
                        <h2>{matchingAppart.location}</h2>
                        <ul className="tags-div">
                            {matchingAppart.tags.map((tag, index) => (
                                <li className='tag' key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="host-rate-div">
                        <div className="host-div">
                            <h3 className='host-name'>{matchingAppart.host.name}</h3>
                            <img className='host-portrait' src= {matchingAppart.host.picture} alt='host portrait' />
                        </div>
                        <div className='stars-rates-div'>

                        </div>
                    </div>
                </div>
                <div className="logement-collapses-div">
                    <Collapse  open title='Description' className="logement-full-collapse-card">
                        {matchingAppart.description}
                    </Collapse>
                    <Collapse title='Équipements' className="logement-full-collapse-card">
                        <ul className="equipments-div">
                            {matchingAppart.equipments.map((equipment, index) => (
                                <li className='equipments' key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </main>
    )
}

export default LogementMenu
