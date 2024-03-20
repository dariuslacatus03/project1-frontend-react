import { Dispatch, SetStateAction, useState } from 'react';
import ButtonActions from './ButtonActions';
import { AnimeProps } from './model/Anime';
import AnimeList from './model/AnimeList';
export default function Shows(
    {
        stateAnimeList,
        setAnimeList,
        setShowAddForm,
        setShowRemoveForm,
        setShowUpdateForm,
        showAddForm,
        showRemoveForm,
        showUpdateForm
    }: 
        { 
            stateAnimeList: AnimeProps[];
            setAnimeList: Dispatch<SetStateAction<AnimeProps[]>>;
            setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
            setShowRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
            setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
            showAddForm: boolean;
            showRemoveForm: boolean;
            showUpdateForm: boolean;
        }){

    const [selectedAnime, setSelectedAnime] = useState<AnimeProps | null>(null);


    return (
        <div style={{display: 'flex', width: '100%'}}>
            <AnimeList 
                stateAnimeList={stateAnimeList}
                setShowAddForm={setShowAddForm}
                setShowRemoveForm={setShowRemoveForm}
                setShowUpdateForm={setShowUpdateForm}
                setSelectedAnime={setSelectedAnime}
            />
            <ButtonActions 
                stateAnimeList={stateAnimeList}
                setAnimeList={setAnimeList}
                setShowAddForm={setShowAddForm}
                setShowRemoveForm={setShowRemoveForm}
                setShowUpdateForm={setShowUpdateForm}
                showAddForm={showAddForm}
                showRemoveForm={showRemoveForm}
                showUpdateForm={showUpdateForm}
                selectedAnime={selectedAnime}             
            />            
        </div>
    );
}