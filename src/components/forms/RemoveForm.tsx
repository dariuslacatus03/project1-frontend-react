import { useParams } from "react-router-dom";
import AnimeService from "../../service/AnimeService";
import { AnimeProps } from "../model/Anime";

export default function RemoveForm(
                                {
                                    stateAnimeList,
                                    setAnimeList,
                                    setShowRemoveForm
                                }:{
                                    stateAnimeList : AnimeProps[],
                                    setAnimeList : React.Dispatch<React.SetStateAction<AnimeProps[]>>,
                                    setShowRemoveForm : React.Dispatch<React.SetStateAction<boolean>>,
                                }
){

    const params = useParams();

    const idString = params.id;
    const id = idString ? parseInt(idString, 10) : undefined;

    const chosenAnime = stateAnimeList.find(anime => anime.id === id) 
    ? stateAnimeList.find(anime => anime.id === id) : undefined;

    const handleRemoveSendClick = () => {
        if (!chosenAnime)
          {
            return;
          }
        AnimeService.deleteAnime(chosenAnime.id).then(() => {
          AnimeService.getAnimes().then((data) => {
            setAnimeList(data)
          }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
        setShowRemoveForm(false);
      };

    return (
        <div className='action-form'>
          <h2>Are you sure you want to remove {chosenAnime ? chosenAnime.animeName : "ERROR"}?</h2>
          <p>If yes, confirm below</p>
          <button onClick={handleRemoveSendClick}>Confirm</button>
        </div>
    )
}