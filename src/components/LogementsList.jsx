import logements from '../datas/logements.json';
import LogementCard from './LogementCard';
import '../styles/LogementsList.css'

// fonction LogementsList qui retourne une liste (ul) de composants LogementCard mapant tout les logements de notre DB.
function LogementsList() {
   
    return (
        <ul className='logements-list-div'>
            {logements.map(({ id, title, cover }) => 
                (
                    // on passe en props l'id, l'image de cover et le titre du logement pour chaque composant LogementCard.
                    <LogementCard key={id} id={id} cover={cover} title={title} />
                )
            )}
        </ul>
    )
}

export default LogementsList