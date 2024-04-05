import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimeService from '../service/AnimeService';
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

  const [detailedAnime, setDetailedAnime] = useState<AnimeProps | null>(null)

  useEffect(() => {
    if (id) {
      AnimeService.getAnimeById(id).then((data) => {
        setDetailedAnime(data)
    })
    }    
  }, [])


  if (!detailedAnime) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2>Anime Description</h2>
      <Anime 
        id={detailedAnime.id}
        animeName={detailedAnime.animeName}
        // cover={detailedAnime.cover}
        nrOfEpisodes={detailedAnime.nrOfEpisodes}
        genre={detailedAnime.genre}
        description={detailedAnime.description}
      />
    </div>
  );
  
}

export default AnimeDescription;