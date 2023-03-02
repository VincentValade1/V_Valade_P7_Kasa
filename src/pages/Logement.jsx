import Slideshow from '../components/Slideshow';
import LogementMenu from '../components/LogementMenu';
import logements from '../datas/logements.json'
import { useParams, Navigate } from 'react-router-dom';

function Logement() {

    const { id } = useParams();
    const matchingAppart = logements.find((appart) => appart.id === id);

    if(matchingAppart === undefined) {
        return <Navigate to="/pageError404" replace={true} />;
    }

    return (
        <main>
            <Slideshow slides={matchingAppart.pictures} id={id} />
            <LogementMenu matchingAppart={matchingAppart} id={id} />
        </main>
    )
    

}

export default Logement