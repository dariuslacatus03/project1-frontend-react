import { Dispatch, SetStateAction, useState } from 'react';
import { Buttons } from './Buttons';
import { AnimeProps } from './model/Anime';

export default function ButtonActions({ stateAnimeList, setAnimeList }: { stateAnimeList: AnimeProps[]; setAnimeList : Dispatch<SetStateAction<AnimeProps[]>> }) {
  
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
  const [showAddForm, setShowAddForm] = useState(false);
  const [showRemoveForm, setShowRemoveForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);


  const handleAddClick = () => {
    setShowRemoveForm(false);
    setShowUpdateForm(false);
    setShowAddForm(true);
  };

  const handleAddSendClick = () => {
    if (!newAnime.name || !newAnime.cover || !newAnime.description || !newAnime.genre || newAnime.nrOfEpisodes === -1) {
      setErrorMessage('Please provide all the required information');
      return;
    }

    if (stateAnimeList.find(anime => anime.id === newAnime.id)) {
      setErrorMessage('An anime with the same ID already exists');
      return;
    }

    setAnimeList([...stateAnimeList, newAnime]);
    setShowAddForm(false);
    setNewAnime(toBeCompletedAnime);
    setErrorMessage('');
  };

  const handleRemoveClick = (id : number) => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowRemoveForm(true);
  };

  const handleRemoveSendClick = () => {
    if (stateAnimeList.find(anime => anime.id === newAnime.id))
    {
      setAnimeList(stateAnimeList.filter(anime => anime.id !== newAnime.id))

      setShowRemoveForm(false);
      setNewAnime(toBeCompletedAnime);
      setErrorMessage('');
    }
    else {
      console.log("else")
      console.log(newAnime.id)
      setErrorMessage('There is no anime with the given ID');
      return;
    }
  };

  const handleUpdateClick = (id : number, updatedAnime : AnimeProps) => {
    setShowAddForm(false);
    setShowRemoveForm(false);
    setShowUpdateForm(true);
  };

  const handleUpdateSendClick = () => {
    const animeToUpdate = stateAnimeList.find(anime => anime.id === newAnime.id)
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
    else {
      setErrorMessage('There is no anime with the given ID');
      return;
    }
  };

  

  return (
    <div className='buttons-actions'>
      <Buttons handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} handleUpdateClick={handleUpdateClick}/>
      {showAddForm && (
          <div className='action-form'>
            <h2>Add a new anime:</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <label htmlFor='anime-id'>ID: </label>
            <input type="number" id="anime-id" onChange={e => setNewAnime({...newAnime, id: e.target.valueAsNumber})} /><br /><br />
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
          <h2>Are you sure you want to remove a show?</h2>
          <p>If yes, select the id of the show you want to delete and send it</p>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <label htmlFor='anime-id'>ID: </label>
          <input type="number" id="anime-id" onChange={e => setNewAnime({...newAnime, id: e.target.valueAsNumber})} /><br /><br />
          <button onClick={handleRemoveSendClick}>Send</button>
        </div>
      )}
      {showUpdateForm && (
          <div className='action-form'>
          <h2>Update the details of an anime:</h2>
          <p>Note: it is not mandatory to update all the fields</p>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <label htmlFor='anime-id'>ID to update: </label>
          <input type="number" id="anime-id" onChange={e => setNewAnime({...newAnime, id: e.target.valueAsNumber})} /><br /><br />
          <label htmlFor='anime-name'>New name: </label>
          <input type="text" id="anime-name" placeholder="Anime Name" onChange={e => setNewAnime({ ...newAnime, name: e.target.value })} /><br /><br />
          <label htmlFor='anime-cover'>New cover: </label>
          <input type="file" id="anime-cover" onChange={e => {
            const files = e.target.files;
            if (!files) {
              return;
            }
            setNewAnime({...newAnime, cover: URL.createObjectURL(files[0])})
            }
            } /><br /><br />
          <label htmlFor="anime-eps">New number of episodes: </label>
          <input type="number" id="anime-eps" onChange={e => setNewAnime({...newAnime, nrOfEpisodes: e.target.valueAsNumber})} /><br /><br />
          <label htmlFor="anime-genre">New genre: </label>
          <input type="text" id="anime-genre" onChange={e => setNewAnime({...newAnime, genre: e.target.value})} /><br /><br />
          <label htmlFor="anime-descr">New description: </label>
          <input type="text" id="anime-descr" onChange={e => setNewAnime({...newAnime, description: e.target.value})} /><br /><br />
          <button onClick={handleUpdateSendClick}>Send</button>
        </div>
      )}
    </div>
  );
}

