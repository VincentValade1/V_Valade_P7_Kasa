import '../styles/LogementCard.css'
import { Link } from 'react-router-dom'

function LogementCard({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} key={id} className="card-link">
            <li key={id}>
                <img src={cover} alt='apercu du logement' />
                <h2>{title}</h2>
            </li>
        </Link>
    )
}

export default LogementCard