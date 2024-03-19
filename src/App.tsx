import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AnimeDescription from './components/AnimeDescription';
import Home from './components/Home';
import Shows from './components/Shows';
import { AnimeProps } from './components/model/Anime';
import dragonBallCover from './covers/dragon_ball.jpg';
import hunterHunterCover from './covers/hunter_hunter.jpg';
import sailorMoonCover from './covers/sailor_moon.jpg';


function App() {
    const [stateAnimeList, setAnimeList] = useState<AnimeProps[]>(animeList);
    
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shows' element={<Shows stateAnimeList={stateAnimeList} setAnimeList={setAnimeList} />} />
                    <Route path="/shows/:id" element={<AnimeDescription animeList={stateAnimeList}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

const animeList = [
    {
        id: 1,
        name: 'Dragon Ball',
        cover: dragonBallCover,
        nrOfEpisodes: 126,
        genre: 'Action',
        description: 'This is the description of Dragon Ball'
    },
    {
        id: 2,
        name: 'Hunter x Hunter',
        cover: hunterHunterCover,
        nrOfEpisodes: 120,
        genre: 'Action',
        description: 'This is the description of Hunter x Hunter'
    },
    {
        id: 3,
        name: 'Sailor Moon',
        cover: sailorMoonCover,
        nrOfEpisodes: 250,
        genre: 'Shojo',
        description: 'This is the description of Sailor Moon'
    }
];

