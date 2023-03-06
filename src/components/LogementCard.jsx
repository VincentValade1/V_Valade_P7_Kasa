import '../styles/LogementCard.css'
import { Link } from 'react-router-dom'

function LogementCard({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card-link" key={id}>
            <img src={cover} alt='apercu du logement' />
            <h2>{title}</h2>
        </Link>
    )
}

export default LogementCard