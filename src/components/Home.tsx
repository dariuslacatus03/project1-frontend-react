import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import './Shows.css';
import { UserProps } from "./model/User";

export default function Home({
                                setUser,
                                setAuthenticated
                            }: 
                            { 
                                setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
                                setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
                            }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameExists, setUsernameExists] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameInputChange = (event : any) => {
        setUsername(event.target.value);
    };

    const handlePasswordInputChange = (event : any) => {
        setPassword(event.target.value);
    };


    const handleLogIn = () => {
        AuthenticationService.login(username, password).then((response) => {
            console.log(response.token);
            localStorage.setItem("token", response.token);
            setErrorMessage("");
            setAuthenticated(true);
            setUser(response.user);
            navigate('/shows');
        }).catch((error) => {
            console.error("Error logging in:", error);
            setErrorMessage(error.message);
        })

    };

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div>
            <header>
                <h2>This is the main page</h2>
            </header>
            <main>
                <div>
                    <label htmlFor="username">Enter your username: </label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={handleUsernameInputChange} 
                        placeholder="Enter your username" 
                    />
                    <br />
                    <label htmlFor="password">Enter your password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordInputChange} 
                        placeholder="Enter your password" 
                    />
                </div>
                <button onClick={handleLogIn}>
                    Log in
                </button>
                <button onClick={handleRegister}>
                    Register
                </button>
                {errorMessage && (
                    <p>{errorMessage}</p>
                )}
                {usernameExists && (
                    <Link to={`/shows`}>
                        <h1>See all shows</h1>
                    </Link>
                )}
            </main>
        </div>
    )
}
