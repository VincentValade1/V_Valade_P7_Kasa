import '../styles/Error.css';
import { Link } from 'react-router-dom';

// on crée notre fonction Error qui retourne une div error incluant un lien proposant le retour à la page d'accueil.
function Error () {
    return(
        <div className="error-div">
            <span>404</span>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error