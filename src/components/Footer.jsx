import logoFooter from '../assets/logo-footer.png'
import '../styles/Footer.css'

import { HashLink as NavLink } from 'react-router-hash-link';

// fonction Footer qui retourne un footer avec un logo, qui sera une ancre (hook HashLink) vers notre haut de page d'accueil.
// un id=topPage a été ajouté sur la balise <html> de notre index.html.
function Footer() {
    return (
        <footer>
            <NavLink to='/#topPage'>
                <img src={logoFooter} alt='logo kasa' className='kasa-logo-footer' />
            </NavLink>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer;