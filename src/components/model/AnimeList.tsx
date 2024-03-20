import React, { SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AnimeProps } from './Anime';
export default function AnimeList(
    {
        stateAnimeList,
        setShowAddForm,
        setShowRemoveForm,
        setShowUpdateForm,
        setSelectedAnime
    }:
        { 
            stateAnimeList: AnimeProps[];
            setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
            setShowRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
            setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
            setSelectedAnime: React.Dispatch<SetStateAction<AnimeProps | null>>;
        }
){

    const handleRemoveClick = (id : number) => {
        
        const selectedAnime = stateAnimeList.find(anime => anime.id === id)
        if (!selectedAnime){
            return;
        }
        setSelectedAnime(selectedAnime)
        setShowAddForm(false);
        setShowUpdateForm(false);
        setShowRemoveForm(true);
      };

      const handleUpdateClick = (id : number) => {
        const selectedAnime = stateAnimeList.find(anime => anime.id === id)
        if (!selectedAnime){
            return;
        }
        setSelectedAnime(selectedAnime)
        setShowAddForm(false);
        setShowRemoveForm(false);
        setShowUpdateForm(true);
      };

    return (
            <div className='anime-list'>
                <ul style={{listStyle:"none"}}>
                    {stateAnimeList.map(anime => (
                                <li key={anime.id}>
                                    <Link to={`/shows/${anime.id}`} style={{display:"block"}}>
                                        <h2>Name: {anime.name}</h2>
                                        <img src={anime.cover} width={192} height={256} alt={anime.name} />
                                    </Link>
                                    <Link to={`/shows/remove/${anime.id}`} onClick={() => handleRemoveClick(anime.id)}>
                                        <button style={{display:"inline"}}>Remove</button>
                                    </Link>
                                    <Link to={`/shows/update/${anime.id}`} onClick={() => handleUpdateClick(anime.id)}>
                                        <button style={{display:"inline"}}>Update</button>
                                    </Link>
                                    <hr className='list-item-separator'/>
                                </li>
                    ))}
                </ul>
            </div>
        
)}