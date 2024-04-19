import { Stomp } from '@stomp/stompjs';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SockJS from 'sockjs-client';
import './App.css';
import AnimeDescription from './components/AnimeDescription';
import Home from './components/Home';
import Shows from './components/Shows';
import { AnimeProps } from './components/model/Anime';
import { UserProps } from './components/model/User';
import AnimeService from './service/AnimeService';
import checkServerStatus from './service/HealthCheckService';


function App() {

    const [isServerUp, setIsServerUp] = useState<boolean | null>(null);
    const [isOnline, setIsOnline] = useState<boolean>(true);
    const [stateAnimeList, setAnimeList] = useState<AnimeProps[]>([]);
    const [user, setUser] = useState<UserProps | null>(null);

    
    // useEffect(() => {
    //     setInterval(() => {
    //         fetch('//google.com', {
    //             mode: 'no-cors',
    //         })
    //         .then(() => {
    //             setIsOnline(true)
    //         })
    //         .catch(() => {
    //             setIsOnline(false)
    //         })
    //     }, 2000)
    // }, []);
    
    useEffect(() => {
        
        checkServerStatus().then((serverStatus) => {
            setIsServerUp(serverStatus);
            if (serverStatus) {
                AnimeService.getAnimes().then((data) => {
                    console.log(data)
                    setAnimeList(data)
                }).catch((error) => {
                    console.log(error)
                })
                const socket = new SockJS("http://localhost:8080/socket/shows");
                const stompClient = Stomp.over(socket)
                stompClient.connect({}, () => {
                    setTimeout(function(){
                     }, 500);
                    stompClient.subscribe('/topic/status', (message) => {
                        const animeData = JSON.parse(message.body);
                        setAnimeList(animeData);
                    });
                });
            }
            else
            {
                setTimeout(function(){
                    window.location.reload();
                 }, 10000);
            } 
            });
    }, [])

    if (!isOnline) {
        return <div>No internet</div>
    }

    else if (isServerUp === null) {
        return <div>Loading...</div>;
    }

    else if (!isServerUp) {
        return <div>Server is down</div>;
    }

    else{
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={
                            <Home
                                setUser = {setUser}
                            />}
                         />
                        <Route path='/shows' element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                            />} 
                        />
                        <Route path='/shows/sorted-asc' element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                            />} 
                        />
                        <Route path='/shows/sorted-desc' element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList} 
                                currUser = {user}
                            />} 
                        />
                        <Route path="/shows/update/:id" element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList} 
                                currUser = {user}
                            />}
                        />
                        <Route path="/shows/remove/:id" element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                            />} 
                        />
                        <Route path='/shows/add' element={
                            <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList} 
                                currUser = {user}
                            />} 
                        />
                        <Route path='/shows/see-chart' element={
                            <Shows
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList} 
                                currUser = {user}
                            />} 
                        />
                        <Route path="/shows/:id" element={<AnimeDescription animeList={stateAnimeList}/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
    
}

export default App;


