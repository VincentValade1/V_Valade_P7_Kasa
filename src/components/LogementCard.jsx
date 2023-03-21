import '../styles/LogementCard.css'
import { Link } from 'react-router-dom'

// on crée la fonction LogementCard (cards présentent dans le composant LogementList). Elle récupère en props les infos de l'appart.
function LogementCard({ id, title, cover }) {
    return (
        // notre card est un lien (hook Link), menant vers la page logement avec dans l'url l'id du logement de la card cliquée.
        // la card contient une image (cover) et un titre (title).
        <Link to={`/logement/${id}`} className="card-link" key={id}>
            <img src={cover} alt='apercu du logement' />
            <h2>{title}</h2>
        </Link>
    )
}

export default LogementCard