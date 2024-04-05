import { FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimeProps } from './Anime';
export default function AnimeList(
                                {
                                    stateAnimeList,
                                    setShowAddForm,
                                    setShowRemoveForm,
                                    setShowUpdateForm,
                                    setShowChart,
                                }:{ 
                                    stateAnimeList: AnimeProps[];
                                    setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
                                    setShowRemoveForm: React.Dispatch<React.SetStateAction<boolean>>;
                                    setShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
                                    setShowChart : React.Dispatch<React.SetStateAction<boolean>>;
                                }
){

    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const totalPages = Math.ceil(stateAnimeList.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const paginatedAnimeList = stateAnimeList.slice(startIndex, endIndex);

    const handleRemoveClick = () => {

        setShowAddForm(false);
        setShowUpdateForm(false);
        setShowChart(false);
        setShowRemoveForm(true);
        
      };

      const handleUpdateClick = () => {

        setShowAddForm(false);
        setShowRemoveForm(false);
        setShowChart(false);
        setShowUpdateForm(true);

      };


    return (
            <div className='anime-list'>
                <ul style={{listStyle:"none"}}>
                    {paginatedAnimeList.map(anime => (
                                <li data-testid={"list-item"} key={anime.id}>
                                    <Link to={`/shows/${anime.id}`} style={{display:"block"}}>
                                        <h2>Name: {anime.animeName}</h2>
                                        <h3>Episodes: {anime.nrOfEpisodes}</h3>
                                        {/* <img src={anime.cover} width={192} height={256} alt={anime.name} /> */}
                                    </Link>
                                    <Link to={`/shows/remove/${anime.id}`} onClick={() => handleRemoveClick()}>
                                        <button style={{display:"inline"}}>Remove</button>
                                    </Link>
                                    <Link to={`/shows/update/${anime.id}`} onClick={() => handleUpdateClick()}>
                                        <button style={{display:"inline"}}>Update</button>
                                    </Link>
                                    <hr className='list-item-separator'/>
                                </li>
                    ))}
                </ul>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Pagination
                    sx={{
                        '.MuiPaginationItem-root':{
                            color: 'white',
                        }
                    }}
                    count={totalPages}
                    page={page}
                    size='medium'
                    onChange={(event, value) => setPage(value)}
                    />
                </Stack>
                <FormControl>
                    <InputLabel id="select-shows-per-page">Shows per page</InputLabel>
                        <Select
                            sx={{
                                '.MuiFormLabel-root .MuiInputLabel-root':{
                                    color: 'white',
                                }
                            }}
                            labelId="select-shows-per-pate"
                            id="shows-per-page"
                            value={itemsPerPage}
                            label="Shows per page"
                            onChange={(event) => setItemsPerPage(Number(event.target.value))}
                        >
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                </FormControl>
            </div>
        
)}