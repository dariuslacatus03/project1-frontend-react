import { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import './Shows.css';
import { UserProps } from "./model/User";

export default function Home({
                                setUser,
                            }: 
                            { 
                                setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
                            }){
    const [username, setUsername] = useState("");
    const [usernameExists, setUsernameExists] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event : any) => {
        setUsername(event.target.value);
    };

    const handleLogIn = () => {

        UserService.getUserByUsername(username).then((data) => {
            if (data.id == null) {
                setErrorMessage("Username does not exist.");
              } else {
                setErrorMessage("");
                setUsernameExists(true);
                setUser(data);
              }
        }).catch((error) => {
            console.error("Error logging in:", error);
            setErrorMessage("Error logging in. Please try again later.");
        });
    };

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
                        onChange={handleInputChange} 
                        placeholder="Enter your username" 
                    />
                </div>
                <button onClick={handleLogIn}>
                    Log in
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
