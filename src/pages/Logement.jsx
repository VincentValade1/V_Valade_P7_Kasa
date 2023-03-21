import Slideshow from '../components/Slideshow';
import LogementMenu from '../components/LogementMenu';
import logements from '../datas/logements.json'
import { useParams, Navigate } from 'react-router-dom';

// fonction de notre page logement qui retourne un main incluant les composants Slideshow et LogementMenu.
function Logement() {

    // on utilise le hook useParams pour récupérer la string de la partie id de l'url.
    const { id } = useParams();
    // ensuite on crée une variable matchingAppart qui trouve dans notre DB(logements.json) le logement où l'id est égal à celui présent dans l'url.
    const matchingAppart = logements.find((appart) => appart.id === id);
    // si aucun id identique n'est trouvé, on utilise le hook Navigate pour rediriger vers la pageError404.
    if(matchingAppart === undefined) {
        return <Navigate to="/pageError404" replace={true} />;
    }

    // si l'id est trouvé on retourne notre nos composants Slideshow et LogementMenu avec en props les données souhaitées de notre logement. 
    return (
        <main>
            <Slideshow slides={matchingAppart.pictures} id={id} />
            <LogementMenu matchingAppart={matchingAppart} id={id} />
        </main>
    )
}

export default Logement