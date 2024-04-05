import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AnimeDescription from './components/AnimeDescription';
import Home from './components/Home';
import Shows from './components/Shows';
import { AnimeProps } from './components/model/Anime';
import dragonBallCover from './covers/dragon_ball.jpg';
import hunterHunterCover from './covers/hunter_hunter.jpg';
import sailorMoonCover from './covers/sailor_moon.jpg';
import AnimeService from './service/AnimeService';



function App() {
    const [stateAnimeList, setAnimeList] = useState<AnimeProps[]>([]);
    
    useEffect(() => {
        AnimeService.getAnimes().then((data) => {
            console.log(data)
            setAnimeList(data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shows' element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList}
                        />} 
                    />
                    <Route path='/shows/sorted-asc' element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList}
                        />} 
                    />
                    <Route path='/shows/sorted-desc' element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList} 
                        />} 
                    />
                    <Route path="/shows/update/:id" element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList} 
                        />}
                    />
                    <Route path="/shows/remove/:id" element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList}
                        />} 
                    />
                    <Route path='/shows/add' element={
                        <Shows 
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList} 
                        />} 
                    />
                    <Route path='/shows/see-chart' element={
                        <Shows
                            stateAnimeList={stateAnimeList}
                            setAnimeList={setAnimeList} 
                        />} 
                    />
                    <Route path="/shows/:id" element={<AnimeDescription animeList={stateAnimeList}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

export const animeList = [
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
        genre: 'Adventure',
        description: 'This is the description of Hunter x Hunter'
    },
    {
        id: 3,
        name: 'Sailor Moon',
        cover: sailorMoonCover,
        nrOfEpisodes: 250,
        genre: 'Shojo',
        description: 'This is the description of Sailor Moon'
    },
    {
        id: 4,
        name: 'Dragon Ball Z',
        cover: 'none',
        nrOfEpisodes: 291,
        genre: 'Action',
        description: 'This is the description of Dragon Ball Z'
    },
    {
        id: 5,
        name: 'One Piece',
        cover: 'none',
        nrOfEpisodes: 1098,
        genre: 'Adventure',
        description: 'This is the description of One Piece'
    },
    {
        id: 6,
        name: 'Jojo\'s Bizzare Adventure',
        cover: 'none',
        nrOfEpisodes: 190,
        genre: 'Adventure',
        description: 'This is the description of Jojo\'s Bizzare Adventure'
    },
    {
        id: 7,
        name: 'Baki',
        cover: 'none',
        nrOfEpisodes: 40,
        genre: 'Action',
        description: 'This is the description of Baki'
    },
    {
        id: 8,
        name: 'One Punch Man',
        cover: 'none',
        nrOfEpisodes: 24,
        genre: 'Comedy',
        description: 'This is the description of One Punch Man'
    },
    {
        id: 9,
        name: 'Spy x Family',
        cover: 'none',
        nrOfEpisodes: 37,
        genre: 'Comedy',
        description: 'This is the description of Spy x Family'
    },
    {
        id: 10,
        name: 'Dragon Ball Super',
        cover: 'none',
        nrOfEpisodes: 131,
        genre: 'Action',
        description: 'This is the description of Dragon Ball Super'
    },
    {
        id: 11,
        name: 'Dragon Ball GT',
        cover: 'none',
        nrOfEpisodes: 64,
        genre: 'Action',
        description: 'This is the description of Dragon Ball GT'
    },
    {
        id: 12,
        name: 'Jujutsu Kaisen',
        cover: 'none',
        nrOfEpisodes: 70,
        genre: 'Action',
        description: 'This is the description of Jujutsu Kaisen'
    }
];

