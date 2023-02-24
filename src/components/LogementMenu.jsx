import { useParams } from 'react-router';
import logements from '../datas/logements.json';
import Collapse from './Collapse';
import '../styles/LogementMenu.css'

function LogementMenu() {
    const { id } = useParams();
    const matchingAppart = logements.find((appart) => appart.id === id);
    console.log(matchingAppart);
    const tags = matchingAppart.tags
    


    return (
            <div className='data-container'>
                <div className="top-data-div">
                    <div className="name-tags-div">
                        <h1>{matchingAppart.title}</h1>
                        <h2>{matchingAppart.location}</h2>
                        <ul className="tags-div">
                            {tags.map((tag) => (
                                <li className='tag' key={tag}>{tag}</li>
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
                    <Collapse />
                    <Collapse />
                </div>
            </div>
            
    )
}

export default LogementMenu
