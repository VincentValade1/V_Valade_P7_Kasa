import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/Collapse.css';

// fonction Collapse qui récupère en props la valeur initiale 'collapse open', les enfants, le titre, et une className.
function Collapse ({ children, title, className }) {
    // on utilise le hook useState pour définir un état initial à ouvert.
    const [isOpen, setIsOpen] = useState(false);

    // fonction qui va gérer l'ouverture et la fermeture en modifiant l'état actuel à l'état opposé, à chaque clic.
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        // on retourne notre div collapse avec la variable className, qui sera la class déclarée lors de l'utilisation de notre composant.
        <div className={`${className}`}>
            {/* on affiche le bouton d'ouverture/fermeture avec l'appel au clic de notre fonction de gestion d'ouverture/fermeture  */}
            <button className="collapse-card-header" type="button" onClick={handleFilterOpening}>
                {/* on affiche le titre déclaré dans l'utilisation du composant */}
                <h2 className="collapse-card-title">{title}</h2>
                {/* si notre état actuel est sur "open", on affiche le chevron vers le haut (sens de fermeture), 
                    ...sinon on affiche le chevron vers le bas(sens d'ouverture) */}
                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                )}
            </button>
            {/* enfin si notre état actuel est sur "open", on affiche une div contenant les enfants (texte déroulant). */}
            {isOpen && <div className="collapse-card-text">{children}</div>}
        </div>
    
    )
};

export default Collapse;