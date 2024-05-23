import { Stomp } from '@stomp/stompjs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SockJS from 'sockjs-client';
import './App.css';
import AnimeDescription from './components/AnimeDescription';
import Home from './components/Home';
import Register from './components/Register';
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
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem("token") !== null){
            setAuthenticated(true);
        }
        if (authenticated){
            axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
        }
        else{
            delete  axios.defaults.headers.common.Authorization;
        }
    }, [authenticated])
    
    useEffect(() => {
        setInterval(() => {
            fetch('//google.com', {
                mode: 'no-cors',
            })
            .then(() => {
                setIsOnline(true)
            })
            .catch(() => {
                setIsOnline(false)
            })
        }, 2000)
    }, []);

    useEffect(() => {
        if (authenticated){
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
    }, [authenticated])
    
    useEffect(() => {
        checkServerStatus().then((serverStatus) => {
            setIsServerUp(serverStatus);
            if (serverStatus) {
                
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
                                setAuthenticated = {setAuthenticated}
                            />}
                         />
                        <Route path='/register' element={<Register setAuthenticated={setAuthenticated}/>}/>
                        <Route path='/shows' element={
                            authenticated ? (
                                <Shows
                                    stateAnimeList={stateAnimeList}
                                    setAnimeList={setAnimeList}
                                    currUser={user}
                                    setAuthenticated={setAuthenticated}
                                />
                            ) : (
                                <Navigate to="/" />
                            )}
                        />
                        <Route path='/shows/sorted-asc' element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path='/shows/sorted-desc' element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path="/shows/update/:id" element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path="/shows/remove/:id" element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path='/shows/add' element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path='/shows/see-chart' element={
                            authenticated ? (
                                <Shows 
                                stateAnimeList={stateAnimeList}
                                setAnimeList={setAnimeList}
                                currUser = {user}
                                setAuthenticated={setAuthenticated}
                            />
                            ) : (
                                <Navigate to="/" />
                            )} 
                        />
                        <Route path="/shows/:id" element={
                            authenticated ? (
                                <AnimeDescription animeList={stateAnimeList}/>
                            ) : (
                                <Navigate to="/" />
                            )} />
                    </Routes>
                </Router>
            </div>
        );
    }
    
}

export default App;


