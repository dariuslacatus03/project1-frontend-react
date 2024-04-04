import { useParams } from 'react-router-dom';
import Anime, { AnimeProps } from './model/Anime';

function AnimeDescription(
                        { 
                          animeList 
                        }:{ 
                          animeList: AnimeProps[] 
                        }
){
  const params = useParams();

  const idString = params.id;
  const id = idString ? parseInt(idString, 10) : undefined;

  const chosenAnime = animeList.find(anime => anime.id === id) 
    ? animeList.find(anime => anime.id === id) : undefined;

  if (!chosenAnime){
    return <div>Anime not found!</div>
  }
  return (
    <div>
      <h2>Anime Description</h2>
      <Anime 
        id={chosenAnime.id}
        animeName={chosenAnime.animeName}
        // cover={chosenAnime.cover}
        nrOfEpisodes={chosenAnime.nrOfEpisodes}
        genre={chosenAnime.genre}
        description={chosenAnime.description}
      />
    </div>
  );
}

export default AnimeDescription;