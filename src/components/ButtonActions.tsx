import React, { Dispatch, SetStateAction, useState } from 'react';
import { Buttons } from './Buttons';
import { AnimeProps } from './model/Anime';
export default function ButtonActions(
  { 
    stateAnimeList,
    setAnimeList,
    setShowAddForm,
    setShowRemoveForm,
    setShowUpdateForm,
    showAddForm,
    showRemoveForm,
    showUpdateForm,
    selectedAnime
  }: 
    { 
      stateAnimeList: AnimeProps[];
      setAnimeList : Dispatch<SetStateAction<AnimeProps[]>>;
      setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
      setShowRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
      setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
      showAddForm: boolean;
      showRemoveForm: boolean;
      showUpdateForm: boolean;
      selectedAnime: AnimeProps | null;   
    }
) {  
  const toBeCompletedAnime : AnimeProps = {
    id: -1,
    name: '',
    cover: '',
    nrOfEpisodes: -1,
    genre: '',
    description: ''
}
  const [newAnime, setNewAnime] = useState<AnimeProps>(toBeCompletedAnime);
  const [errorMessage, setErrorMessage] = useState('');




  const handleAddClick = () => {
    setNewAnime({...newAnime, id: stateAnimeList[stateAnimeList.length-1].id+1});
    setShowRemoveForm(false);
    setShowUpdateForm(false);
    setShowAddForm(true);
  };




  const handleAddSendClick = () => {
    if (!newAnime.name || !newAnime.cover || !newAnime.description || !newAnime.genre || newAnime.nrOfEpisodes === -1) {
      setErrorMessage('Please provide all the required information');
      return;
    }



    setAnimeList([...stateAnimeList, newAnime]);
    setShowAddForm(false);
    setNewAnime(toBeCompletedAnime);
    setErrorMessage('');
  };




  const handleRemoveSendClick = () => {
    if (!selectedAnime)
    {
      return;
    }  
    setAnimeList(stateAnimeList.filter(anime => anime.id !== selectedAnime.id))
    setShowRemoveForm(false);
  };




  const handleUpdateSendClick = () => {
    if (!selectedAnime)
    {
      return;
    } 
    const animeToUpdate = stateAnimeList.find(anime => anime.id === selectedAnime.id)
    if (animeToUpdate) {
      
      if (newAnime.name) {
        animeToUpdate.name = newAnime.name;
      }
      if (newAnime.cover) {
        animeToUpdate.cover = newAnime.cover;
      } 
      if (newAnime.description) {
        animeToUpdate.description = newAnime.description;
      }
      if (newAnime.genre) {
        animeToUpdate.genre = newAnime.genre;
      } 
      if (newAnime.nrOfEpisodes != -1) {
        animeToUpdate.nrOfEpisodes = newAnime.nrOfEpisodes
      }
      
      setShowUpdateForm(false);
      setNewAnime(toBeCompletedAnime);
      setErrorMessage('');
    }
};

  

  return (
    <div className='buttons-actions'>
      <Buttons handleAddClick={handleAddClick}/>
      {showAddForm && (
    
          <div className='action-form'>
            <h2>Add a new anime:</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <label htmlFor='anime-name'>Anime name: </label>
            <input type="text" id="anime-name" placeholder="Anime Name" onChange={e => setNewAnime({ ...newAnime, name: e.target.value })} /><br /><br />
            <label htmlFor='anime-cover'>Anime cover: </label>
            <input type="file" id="anime-cover" onChange={e => {
              const files = e.target.files;
              if (!files) {
                return;
              }
              setNewAnime({...newAnime, cover: URL.createObjectURL(files[0])})
              }
              } /><br /><br />
            <label htmlFor="anime-eps">Number of episodes: </label>
            <input type="number" id="anime-eps" onChange={e => setNewAnime({...newAnime, nrOfEpisodes: e.target.valueAsNumber})} /><br /><br />
            <label htmlFor="anime-genre">Genre: </label>
            <input type="text" id="anime-genre" onChange={e => setNewAnime({...newAnime, genre: e.target.value})} /><br /><br />
            <label htmlFor="anime-descr">Short Description: </label>
            <input type="text" id="anime-descr" onChange={e => setNewAnime({...newAnime, description: e.target.value})} /><br /><br />
            <button onClick={handleAddSendClick}>Send</button>
          </div>
      )}
      {showRemoveForm && (
          <div className='action-form'>
          <h2>Are you sure you want to remove {selectedAnime ? selectedAnime.name : "ERROR"}?</h2>
          <p>If yes, confirm below</p>
          <button onClick={handleRemoveSendClick}>Confirm</button>
        </div>
      )}
      {showUpdateForm && (
          <div className='action-form'>
          <h2>Update the details of {selectedAnime ? selectedAnime.name : "ERROR"}:</h2>
          <p>Note: it is not mandatory to update all the fields</p>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

          <label htmlFor='anime-name'>Name: </label>
          <input 
              type="text" 
              id="anime-name" 
              placeholder="Anime Name"
              onChange={
                e => setNewAnime({ ...newAnime, name: e.target.value })
              } 
          />
          <br /><br />

          <label htmlFor='anime-cover'>New cover: </label>
          <input type="file" id="anime-cover" onChange={e => {
              const files = e.target.files;
              if (!files) {
                return;
              }
              setNewAnime({...newAnime, cover: URL.createObjectURL(files[0])})
              }}
          /><br /><br />

          <label htmlFor="anime-eps">Number of episodes: </label>
          <input 
              type="number"
              id="anime-eps"
              onChange={e => setNewAnime({...newAnime, nrOfEpisodes: e.target.valueAsNumber})} 
          /><br /><br />

          <label htmlFor="anime-genre">Genre: </label>
          <input 
              type="text" 
              id="anime-genre" 
              onChange={e => setNewAnime({...newAnime, genre: e.target.value})} 
          /><br /><br />

          <label htmlFor="anime-descr">Description: </label>
          <input 
              type="text" 
              id="anime-descr" 
              onChange={e => setNewAnime({...newAnime, description: e.target.value})} 
          /><br /><br />

          <button onClick={handleUpdateSendClick}>Send</button>
        </div>
      )}
    </div>
  );
}

