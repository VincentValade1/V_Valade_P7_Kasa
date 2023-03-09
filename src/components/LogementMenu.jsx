import Collapse from './Collapse';
import Ratingstars from './Ratingstars';
import '../styles/LogementMenu.css'

function LogementMenu({ matchingAppart, id }) {

    const splitedName = matchingAppart.host.name.split(" ");

    return (
        <div className='data-container'>
            <div className="top-data-div">
                <div className="name-tags-div">
                    <h1>{matchingAppart.title}</h1>
                    <h2>{matchingAppart.location}</h2>
                    <ul className="tags-div">
                        {matchingAppart.tags.map((tag, index) => (
                            <li className='tag' key={index + id}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="host-rate-div">
                    <div className="host-div">
                        <div className='host-name'>
                            {splitedName.map((namepart, index) => (
                                <span key={index}>{namepart}<br/></span>
                            ))}
                        </div>    
                            
                    <img key={id} className='host-portrait' src= {matchingAppart.host.picture} alt='host portrait' />
                    </div>
                    <div className='stars-rates-div'>
                        <Ratingstars matchedRate={matchingAppart.rating} maxRate={5} />
                    </div>
                </div>
            </div>
            <div className="logement-collapses-div">
                <Collapse  open title='Description' className="logement-full-collapse-card">
                    <p>{matchingAppart.description}</p>
                    
                </Collapse>
                <Collapse title='Équipements' className="logement-full-collapse-card">
                    <ul className="equipments-div">
                        {matchingAppart.equipments.map((equipment, index) => (
                            <li className='equipments' key={index + id}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}

export default LogementMenu
