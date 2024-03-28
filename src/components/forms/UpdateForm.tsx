import { AnimeProps } from "../model/Anime";

export default function UpdateForm(
                                {
                                    errorMessage,
                                    setErrorMessage,
                                    selectedAnime,
                                    newAnime,
                                    setNewAnime,
                                    stateAnimeList,
                                    setShowUpdateForm,
                                    toBeCompletedAnime
                                }:{
                                    errorMessage : string,
                                    setErrorMessage : React.Dispatch<React.SetStateAction<string>>,
                                    selectedAnime : AnimeProps | null,
                                    newAnime : AnimeProps,
                                    setNewAnime : React.Dispatch<React.SetStateAction<AnimeProps>>,
                                    stateAnimeList : AnimeProps[],
                                    setShowUpdateForm : React.Dispatch<React.SetStateAction<boolean>>,
                                    toBeCompletedAnime : AnimeProps
                                }
){

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
          // if (newAnime.cover) {
          //   animeToUpdate.cover = newAnime.cover;
          // } 
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

          {/* <label htmlFor='anime-cover'>New cover: </label>
          <input type="file" id="anime-cover" onChange={e => {
              const files = e.target.files;
              if (!files) {
                return;
              }
              setNewAnime({...newAnime, cover: URL.createObjectURL(files[0])})
              }}
          /><br /><br /> */}

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
    )
}