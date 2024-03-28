import { AnimeProps } from "../model/Anime";


export default function AddForm({
                                    errorMessage,
                                    setErrorMessage,
                                    newAnime,
                                    setNewAnime,
                                    stateAnimeList,
                                    setAnimeList,
                                    setShowAddForm,
                                    toBeCompletedAnime
                                }:{
                                    errorMessage : string,
                                    setErrorMessage : React.Dispatch<React.SetStateAction<string>>,
                                    newAnime : AnimeProps,
                                    setNewAnime : React.Dispatch<React.SetStateAction<AnimeProps>>,
                                    stateAnimeList : AnimeProps[],
                                    setAnimeList : React.Dispatch<React.SetStateAction<AnimeProps[]>>,
                                    setShowAddForm : React.Dispatch<React.SetStateAction<boolean>>,
                                    toBeCompletedAnime : AnimeProps
                                }
){

    const handleAddSendClick = () => {
        if (!newAnime.name || !newAnime.description || !newAnime.genre || newAnime.nrOfEpisodes === -1) {
          setErrorMessage('Please provide all the required information');
          return;
        }
        setAnimeList([...stateAnimeList, newAnime]);
        setShowAddForm(false);
        setNewAnime(toBeCompletedAnime);
        setErrorMessage('');
      };

    return (
        <div className='action-form'>
            <h2>Add a new anime:</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <label htmlFor='anime-name'>Anime name: </label>
            <input type="text" id="anime-name" placeholder="Anime Name" onChange={e => setNewAnime({ ...newAnime, name: e.target.value })} /><br /><br />
            {/* <label htmlFor='anime-cover'>Anime cover: </label>
            <input type="file" id="anime-cover" onChange={e => {
              const files = e.target.files;
              if (!files) {
                return;
              }
              setNewAnime({...newAnime, cover: URL.createObjectURL(files[0])})
              }
              } /><br /><br /> */}
            <label htmlFor="anime-eps">Number of episodes: </label>
            <input type="number" id="anime-eps" onChange={e => setNewAnime({...newAnime, nrOfEpisodes: e.target.valueAsNumber})} /><br /><br />
            <label htmlFor="anime-genre">Genre: </label>
            <input type="text" id="anime-genre" onChange={e => setNewAnime({...newAnime, genre: e.target.value})} /><br /><br />
            <label htmlFor="anime-descr">Short Description: </label>
            <input type="text" id="anime-descr" onChange={e => setNewAnime({...newAnime, description: e.target.value})} /><br /><br />
            <button onClick={handleAddSendClick}>Send</button>
          </div>
    )
}