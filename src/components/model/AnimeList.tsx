import { Link } from 'react-router-dom';
import { AnimeProps } from './Anime';

export default function AnimeList({animeList}: { animeList: AnimeProps[] }) {
    return (
            <div className='anime-list'>
                {animeList.map(anime => (
                        <ul style={{listStyle:"none"}}>
                            <li>
                                <Link key={anime.id} to={`/shows/${anime.id}`}>
                                    <h2>Name: {anime.name}</h2>
                                    <img src={anime.cover} width={192} height={256} alt={anime.name} />
                                </Link>
                                <hr className='list-item-separator'/>
                            </li>
                        </ul>
                ))}
            </div>
        
)}