// on importe nos étoiles rouges et grises sous forme d'images dans assets.
import redstar from '../assets/redstar.png';
import greystar from '../assets/greystar.png';

// fonction de notation Ratingstars récuperant en props la note du logement correspondant, et la note maximale établie à 5.
function Ratingstars({ matchedRate, maxRate }) {
    
    // on crée un tableau qui contiendra nos étoiles.
    const RateArray = [];
    // pour chaque chiffre de 1 à 5, on incrémente notre tableau en y pushant les étoiles de la ligne 13 ci dessous.
    for (let i = 0; i < maxRate; i++) {
        RateArray.push(
            // on push une étoile rouge pour chaque chiffre jusqu'à notre note établie, pour les nombres en delà de la note on push une étoile grise.
            <img key={i} className="rateStar" src={i < matchedRate ? redstar : greystar } alt={`${matchedRate}/${maxRate}`}/>
        );
    }
    // enfin on retourne notre tableau avec les étoiles correspondantes
    return RateArray;
}

export default Ratingstars