import '../styles/Slideshow.css';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// fonction du slideshow (Carousel)
// on récupère en props la valeur de slides(matchingappart.pictures) et l'id de l'url pour les key
function Slideshow({ slides, id }) {

    // on crée un état courant établi à 0 (pour le positionnement de l'image de départ)
    const [activeImage, setactiveImage] = useState(0);

    // on crée la variable length qui fourni la longueur du tableau d'image de notre logement.
    let slideLength = slides.length;

    // variable qui donnera au bullet point le numéro de l'image actuelle du slide (+1 car le tableau commence à 0)
    const activeImageBulletPoint = activeImage + 1

    // variable représentant le useState d'origine égal à la première image du slide
    const firstIndicePicture = 0;

    // variable représentant la position de la dernière image du slide
    const lastIndicePicture = slideLength -1;
    
    // fonction pour le clic sur suivant qui set le activeImage à +1 mais à 0 lorsqu'on arrive sur la dernière image pour revenir à la première
    function nextSlide() {
        setactiveImage(activeImage !== lastIndicePicture ? activeImage +1 : firstIndicePicture);
    }

    // fonction pour le clic sur précédant qui set le activeImage à -1 mais à 0 lorsqu'on arrive sur la première image pour revenir à la dernière
    function previousSlide() {
        setactiveImage(activeImage !== firstIndicePicture ? activeImage -1 : lastIndicePicture);
    }

    // si on a bien des images dans un tableau d'images, on retourne la div slideshow
    return ((Array.isArray(slides) && slideLength > 0) ?
        (
            <section className='slideshow-section'>
                {/* on itère sur les images de notre logement */}
                {slides.map((picture, index) => {
                    // si on a plus d'une image, on crée notre div avec le bullet point et les flèches pour changer d'image
                    if(slideLength > 1) {
                        return (
                            // ici on crée une class de div 'slide active' pour l'index de l'image courante et une 'slide' pour les autres
                            <div key={index} className={index === activeImage ? 'slide active' : 'slide'}>
                                {/* on affiche l'image où la position courante est égale à l'index du tableau d'images */}
                                {index === activeImage && (<img src={picture} alt="apercu du logement" key={id + index} />)}
                                {/* on ajoute le bullet point de l'image actuelle */}
                                <span className='bulletpoint'>{activeImageBulletPoint}/{slideLength}</span>
                                {/* on ajoute nos icônes chevrons (react-icons) avec les fonctions de clics atitrées */}
                                <FaChevronLeft className="arrow left" onClick={previousSlide} />
                                <FaChevronRight className="arrow right" onClick={nextSlide} />
                            </div>
                        )
                    }

                    // si le logement n'a qu'une seule image, on retourne la div image sans le bullet point ni les fleches
                    return (
                        <div key={index} className={index === activeImage ? 'slide active' : 'slide'}>
                            {index === activeImage && (<img src={picture} alt="apercu du logement" key={id + index} />)}
                        </div>
                    )
                })}
            </section>
            // sinon aucune image n'est présente, on ne renvoie pas de div vide.
        ) : null
    )
}

export default Slideshow



