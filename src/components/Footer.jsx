import logoFooter from '../assets/logo-footer.png'
import '../styles/Footer.css'

import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    return (
        <footer>
            <Link to='/#topPage'>
                <img src={logoFooter} alt='logo kasa' className='kasa-logo-footer' />
            </Link>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer;