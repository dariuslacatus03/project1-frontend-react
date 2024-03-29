import { AnimeProps } from "../model/Anime";

export default function RemoveForm(
                                {
                                    selectedAnime,
                                    stateAnimeList,
                                    setAnimeList,
                                    setShowRemoveForm
                                }:{
                                    selectedAnime : AnimeProps | null,
                                    stateAnimeList : AnimeProps[],
                                    setAnimeList : React.Dispatch<React.SetStateAction<AnimeProps[]>>,
                                    setShowRemoveForm : React.Dispatch<React.SetStateAction<boolean>>,
                                }
){

    const handleRemoveSendClick = () => {
        if (!selectedAnime)
        {
          return;
        }  
        setAnimeList(stateAnimeList.filter(anime => anime.id !== selectedAnime.id))
        setShowRemoveForm(false);
      };

    return (
        <div className='action-form'>
          <h2>Are you sure you want to remove {selectedAnime ? selectedAnime.name : "ERROR"}?</h2>
          <p>If yes, confirm below</p>
          <button onClick={handleRemoveSendClick}>Confirm</button>
        </div>
    )
}