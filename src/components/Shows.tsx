import { Dispatch, SetStateAction, useState } from 'react';
import ButtonActions from './ButtonActions';
import { AnimeProps } from './model/Anime';
import AnimeList from './model/AnimeList';
export default function Shows(
    {
        stateAnimeList,
        setAnimeList,
    }: 
        { 
            stateAnimeList: AnimeProps[];
            setAnimeList: Dispatch<SetStateAction<AnimeProps[]>>;
        }){

    const [showAddForm, setShowAddForm] = useState(false);
    const [showRemoveForm, setShowRemoveForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showChart, setShowChart] = useState(false);

    return (
        <div style={{display: 'flex', width: '100%'}}>
            <AnimeList 
                stateAnimeList={stateAnimeList}
                setShowAddForm={setShowAddForm}
                setShowRemoveForm={setShowRemoveForm}
                setShowUpdateForm={setShowUpdateForm}
                setShowChart={setShowChart}
            />
            <ButtonActions 
                stateAnimeList={stateAnimeList}
                setAnimeList={setAnimeList}
                setShowAddForm={setShowAddForm}
                setShowRemoveForm={setShowRemoveForm}
                setShowUpdateForm={setShowUpdateForm}
                setShowChart={setShowChart}
                showAddForm={showAddForm}
                showRemoveForm={showRemoveForm}
                showUpdateForm={showUpdateForm}
                showChart={showChart}
            />            
        </div>
    );
}