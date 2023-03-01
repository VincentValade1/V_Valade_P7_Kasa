import redstar from '../assets/redstar.png';
import greystar from '../assets/greystar.png';

// fonction de notation récuperant en props la note du logement correspondant, et la note maximale établie à 5
function Ratingstars({ matchedRate, maxRate }) {
    
    // on crée un tableau qui contiendra nos étoiles
    const RateArray = [];
    // pour chaque chiffre de 1 à 5, on incrémente notre tableau en y pushant la ligne 13 ci dessous
    for (let i = 0; i < maxRate; i++) {
        RateArray.push(
            // on push une étoile rouge pour chaque nombre jusqu'à notre note, pour les nombres en delà de la note on push une étoile grise.
            <img key={i} className="rateStar" src={i < matchedRate ? redstar : greystar } alt={`${matchedRate}/${maxRate}`}/>
        );
    }
    // enfin on retourne notre tableau avec les étoiles correspondantes
    return RateArray;
}

export default Ratingstars