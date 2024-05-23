import { Button } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import ButtonActions from './ButtonActions';
import { AnimeProps } from './model/Anime';
import AnimeList from './model/AnimeList';
import { UserProps } from './model/User';

export default function Shows(
                            {
                                stateAnimeList,
                                setAnimeList,
                                currUser,
                                setAuthenticated
                            }: 
                            { 
                                stateAnimeList: AnimeProps[];
                                setAnimeList: Dispatch<SetStateAction<AnimeProps[]>>;
                                currUser: UserProps | null;
                                setAuthenticated: Dispatch<SetStateAction<boolean>>;
                            }){

    const [showAddForm, setShowAddForm] = useState(false);
    const [showRemoveForm, setShowRemoveForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [showChart, setShowChart] = useState(false);

    const handleLogOutButton = () => {
        localStorage.clear();
        setAuthenticated(false);
    }

    return (
        <div style={{display: 'flex', width: '100%'}}>
            <Button onClick={handleLogOutButton}>Log out</Button>
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
                currUser = {currUser}
            />            
        </div>
    );
}