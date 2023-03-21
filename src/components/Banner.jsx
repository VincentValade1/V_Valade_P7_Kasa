import '../styles/Banner.css';

// on crée notre fonction Banner qui retourne une div avec la className et les enfants déclarés lors de l'utilisation du composant.
function Banner({children, className}) {
    return <div className={`banner ${className}`}>{children}</div>
}

export default Banner