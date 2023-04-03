import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import AproposBanner from "../assets/apropos-banner.png";
import aproposData from "../datas/apropos-data.json";

// on crée notre fonction Apropos dans laquelle on retourne un Banner personnalisé et nos Collapses,
// (ici j'ai crée un apropos-data.json qui inclut les données à renvoyer pour faire un map et ainsi éviter d'appeler le composant plusieurs fois.)
function Apropos () {
    return (
        <main>
            <Banner className='apropos'>
                <img src={AproposBanner} alt='vue sur un fjord' />
            </Banner>
            <div className="apropos-collapses-div">
                {aproposData.map(({ id, title, description }) => 
                    (
                        <Collapse key={id} id={id} title={title} className="apropos-full-collapse-card">
                            <p>{description}</p>
                        </Collapse>
                    )
                )}

                {/* Autre méthode si les infos n'étaient pas dans notre DB */}

                {/* <Collapse title="Fiabilité" className="apropos-full-collapse-card">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Collapse>
                <Collapse title="Respect" className="apropos-full-collapse-card">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>
                <Collapse title="Service" className="apropos-full-collapse-card">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Collapse>
                <Collapse title="Sécurité" className="apropos-full-collapse-card">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapse> */}
            </div>
        </main>
    )
}

export default Apropos;