import AnimeOperations from './AnimeOperations';
import { AnimeProps } from './model/Anime';
import AnimeList from './model/AnimeList';

export default function Shows({ animeList }: { animeList: AnimeProps[] }) {
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <AnimeList animeList={animeList}/>
            <AnimeOperations />            
        </div>
    );
}