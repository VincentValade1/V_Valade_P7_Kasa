import logoFooter from '../assets/logo-footer.png'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to='/'>
                <img src={logoFooter} alt='logo kasa' className='kasa-logo-footer' />
            </Link>
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer;