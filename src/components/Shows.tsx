import { Dispatch, SetStateAction } from 'react';
import ButtonActions from './ButtonActions';
import { AnimeProps } from './model/Anime';
import AnimeList from './model/AnimeList';

export default function Shows({ stateAnimeList, setAnimeList }: { stateAnimeList: AnimeProps[]; setAnimeList : Dispatch<SetStateAction<AnimeProps[]>> }) {
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <AnimeList stateAnimeList={stateAnimeList}/>
            <ButtonActions stateAnimeList={stateAnimeList} setAnimeList={setAnimeList} />            
        </div>
    );
}