import Collapse from './Collapse';
import Ratingstars from './Ratingstars';
import '../styles/LogementMenu.css'

// fonction LogementMenu qui va afficher dans la page Logement toute la partie informations.
function LogementMenu({ matchingAppart, id }) {

    // variable qui va "spliter" le nom et le prénom de l'hôte pour ensuite faire un affichage superposé.
    const splitedName = matchingAppart.host.name.split(" ");

    return (
        <div className='data-container'>
            <div className="top-data-div">
                <div className="name-tags-div">
                    {/* on affiche le titre et la localisation du logement. */}
                    <h1>{matchingAppart.title}</h1>
                    <h2>{matchingAppart.location}</h2>
                    <ul className="tags-div">
                        {/* on fait un map sur les tags du logement, on affiche le résultat dans des balises <li> */}
                        {matchingAppart.tags.map((tag, index) => (
                            <li className='tag' key={index + id}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="host-rate-div">
                    <div className="host-div">
                        <div className='host-name'>
                            {/* on fait un map sur le splitedName qui va afficher le prénom et le nom dans 2 <span> différents */}
                            {splitedName.map((namepart, index) => (
                                <span key={index}>{namepart}<br/></span>
                            ))}
                        </div>    
                   {/* on affiche la photo de profil de l'hôte */}
                    <img key={id} className='host-portrait' src= {matchingAppart.host.picture} alt='host portrait' />
                    </div>
                    <div className='stars-rates-div'>
                        {/* on affiche notre composant Ratingstars où matchedRate sera la nôte de notre logement actuel */}
                        <Ratingstars matchedRate={matchingAppart.rating} maxRate={5} />
                    </div>
                </div>
            </div>
            <div className="logement-collapses-div">
                {/* on affiche un composant Collapse avec pour enfant la description du logement actuel */}
                <Collapse  open title='Description' className="logement-full-collapse-card">
                    <p>{matchingAppart.description}</p>
                </Collapse>
                {/* on affiche un composant Collapse avec pour enfant une liste <li> des équipements de notre logement actuel */}
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