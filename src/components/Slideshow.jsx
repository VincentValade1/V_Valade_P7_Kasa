import '../styles/Slideshow.css';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// fonction du slideshow (Carousel)
// on récupère en props la valeur de slides(matchingappart.pictures) et l'id de l'url pour les key
function Slideshow({ slides, id }) {

    // on crée un état courant établi à 0 (pour le positionnement de l'image de départ)
    const [current, setCurrent] = useState(0);

    // on crée la variable length qui fourni la longueur du tableau d'image de notre logement.
    let length = slides.length;

    // variable qui donnera au bullet point le numéro de l'image actuelle du slide
    const currentBulletPoint = current + 1

    // fonction pour le clic sur suivant qui set le current à +1 mais à 0 lorsqu'on arrive sur la fin du tableau pour revenir au début
    function nextSlide() {
        setCurrent(current === length -1 ? 0 : current +1);
    }

    // fonction pour le clic sur précédant qui set le current à -1 mais à 0 lorsqu'on arrive sur la fin du tableau pour revenir au début
    function previousSlide() {
        setCurrent(current === 0 ? length -1 : current -1);
    }

    // s'il n'y a pas d'images ou autre chose qu'un tableau , on retourne null et aucune div slideshow.
    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }else{
        // si on a bien des images, on retourne la div slideshow
        return (
            <section className='slideshow-section'>
                {/* on itère sur les images de notre logement */}
                {slides.map((picture, index) => {
                    // si on a plus d'une image, on crée notre div avec le bullet point et les flèches pour changer d'image
                    if(length > 1) {
                        return (
                            // ici on crée une class de div 'slide active' pour l'index de l'image courante et une 'slide' pour les autres
                            <div key={index} className={index === current ? 'slide active' : 'slide'}>
                                {/* on affiche l'image où la position courante est égale à l'index du tableau d'images */}
                                {index === current && (<img src={picture} alt="apercu du logement" key={id + index} />)}
                                {/* on ajoute le bullet point de l'image actuelle */}
                                <span className='bulletpoint'>{currentBulletPoint}/{length}</span>
                                {/* on ajoute nos icônes chevrons (react-icons) avec les fonctions de clics atitrées */}
                                <FaChevronLeft className="arrow left" onClick={previousSlide} />
                                <FaChevronRight className="arrow right" onClick={nextSlide} />
                            </div>
                        )
                    }else{
                        // si le logement n'a qu'une seule image, on retourne la div image sans le bullet point ni les fleches
                        return (
                            <div key={index} className={index === current ? 'slide active' : 'slide'}>
                                {index === current && (<img src={picture} alt="apercu du logement" key={id + index} />)}
                            </div>
                        )
                    }
                })}
            </section>
        )   
    }
}

export default Slideshow



