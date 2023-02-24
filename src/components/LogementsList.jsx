import logements from '../datas/logements.json';
import LogementCard from './LogementCard';
import '../styles/LogementsList.css'

function LogementsList() {
    const Logements = [...logements];
   
    return (
        <ul className='logements-list-div'>
            {Logements.map(({ id, title, cover }) => 
                (
                    <LogementCard  key={id} id={id} cover={cover} title={title} />
                )
            )}
        </ul>
    )
}

export default LogementsList