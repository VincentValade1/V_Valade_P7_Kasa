import { Link } from 'react-router-dom'
import logo from '../assets/kasa-logo.png'
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logo} alt='logo kasa' className='kasa-logo' />
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/a-propos'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header