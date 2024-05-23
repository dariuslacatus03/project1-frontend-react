import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Buttons } from './Buttons';
import GenreChart from './charts/GenreChart';
import AddForm from './forms/AddForm';
import RemoveForm from './forms/RemoveForm';
import UpdateForm from './forms/UpdateForm';
import { AnimeProps } from './model/Anime';
import { UserProps } from './model/User';

export default function ButtonActions(
                                    { 
                                      stateAnimeList,
                                      setAnimeList,
                                      setShowAddForm,
                                      setShowRemoveForm,
                                      setShowUpdateForm,
                                      setShowChart,
                                      showAddForm,
                                      showRemoveForm,
                                      showUpdateForm,
                                      showChart,
                                      currUser
                                    }:{ 
                                      stateAnimeList: AnimeProps[];
                                      setAnimeList : Dispatch<SetStateAction<AnimeProps[]>>;
                                      setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
                                      setShowRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
                                      setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
                                      setShowChart: React.Dispatch<React.SetStateAction<boolean>>;
                                      showAddForm: boolean;
                                      showRemoveForm: boolean;
                                      showUpdateForm: boolean;
                                      showChart: boolean;
                                      currUser: UserProps | null;
                                    }
){ 
  const toBeCompletedAnime : AnimeProps = {
    id: -1,
    animeName: '',
    // cover: '',
    nrOfEpisodes: -1,
    genre: '',
    description: '',
    user: {
      id: -1,
      userName: ''
    }
}
  const [newAnime, setNewAnime] = useState<AnimeProps>(toBeCompletedAnime);
  const [errorMessage, setErrorMessage] = useState('');
  const [ascending, setAscending] = useState(true);
  const [nbOfPostedShows, setNbOfPostedShows] = useState(0);

  useEffect(() => {
    if (currUser) {
      const userPostedShows = stateAnimeList.filter(
        (anime) => anime.user.id === currUser.id
      );
      setNbOfPostedShows(userPostedShows.length);
    }
  }, [stateAnimeList, currUser]);


  const handleAddClick = () => {
    //setNewAnime({...newAnime, id: stateAnimeList[stateAnimeList.length-1].id+1});

    setShowRemoveForm(false);
    setShowUpdateForm(false);
    setShowChart(false);
    setShowAddForm(true);
  }

  const handleSortClick = () => {
    ascending 
      ? setAnimeList(stateAnimeList.sort((anime1 : AnimeProps, anime2 : AnimeProps) => anime1.nrOfEpisodes - anime2.nrOfEpisodes))
      : setAnimeList(stateAnimeList.sort((anime1 : AnimeProps, anime2 : AnimeProps) => anime2.nrOfEpisodes - anime1.nrOfEpisodes));

    ascending ? setAscending(false) : setAscending(true);

    setShowAddForm(false);
    setShowRemoveForm(false);
    setShowUpdateForm(false);
    setShowChart(false);
  }


  const handleChartClick = () => {
    setShowAddForm(false);
    setShowRemoveForm(false);
    setShowUpdateForm(false);
    setShowChart(true);
  }
  

  return (
    <div className='buttons-actions'>
      <Buttons 
        handleAddClick={handleAddClick}
        handleSortClick={handleSortClick} 
        ascending={ascending} 
        handleChartClick={handleChartClick}/>
      {showAddForm && (
        <AddForm 
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          newAnime={newAnime}
          setNewAnime={setNewAnime}
          stateAnimeList={stateAnimeList}
          setAnimeList={setAnimeList}
          setShowAddForm={setShowAddForm}
          toBeCompletedAnime={toBeCompletedAnime}
          currUser = {currUser}
        />
      )}
      {showRemoveForm && (
          <RemoveForm 
            stateAnimeList={stateAnimeList}
            setAnimeList={setAnimeList}
            setShowRemoveForm={setShowRemoveForm}
          />
      )}
      {showUpdateForm && (
          <UpdateForm 
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            newAnime={newAnime}
            setNewAnime={setNewAnime}
            setAnimeList={setAnimeList}
            stateAnimeList={stateAnimeList}
            setShowUpdateForm={setShowUpdateForm}
            toBeCompletedAnime={toBeCompletedAnime}
          />
      )}
      {showChart && (
          <GenreChart 
            stateAnimeList={stateAnimeList}
          />
      )}
      <div className="postedShowsCount">
        {currUser ? `This user posted ${nbOfPostedShows} shows` : ''}
      </div>
    </div>
  );
}

