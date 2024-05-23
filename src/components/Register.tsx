import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import { UserProps } from "./model/User";

export default function Register({
    setAuthenticated, 
    setUser
} : {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
}){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameInputChange = (event : any) => {
        setUsername(event.target.value);
    };

    const handlePasswordInputChange = (event : any) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordInputChange = (event : any) => {
        setRepeatPassword(event.target.value);
    };

    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate('/');
    };


    const handleRegister = () => {
        if (!username)
        {
            setErrorMessage("Please input a username");
            return;
        }
        if (!password)
        {
            setErrorMessage("Please input a password");
            return;
        }
        if (!repeatPassword)
        {
            setErrorMessage("Please re-enter your password");
            return;
        }
        if (password !== repeatPassword)
        {
            setErrorMessage("Passwords do not match.");
            return;
        }
        // UserService.getUserByUsername(username).then((data) => {
        //     if (data.id == null) {
        //         setErrorMessage("Register functionality not finished yet");
        //         } else {
        //         setErrorMessage("This username already exists");
        //         }
        // }).catch((error) => {
        //     console.error("Error logging in:", error);
        //     setErrorMessage("Error logging in. Please try again later.");
        // });
        AuthenticationService.register(username, password).then((response) => {
            console.log(response);
            localStorage.setItem("token", response.token)
            setAuthenticated(true);
            setErrorMessage("");
            navigate('/shows');
            setUser(response.user);
        })
        .catch((error) => {
            console.log(error);
            setErrorMessage(error);
        })
        
    }
    
    return (
        <div>
            <header>
                <h2>Make a new account</h2>
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
                    <br />
                    <label htmlFor="password">Re-enter your password: </label>
                    <input 
                        type="password" 
                        id="repeatPassword" 
                        value={repeatPassword} 
                        onChange={handleRepeatPasswordInputChange} 
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
            </main>
        </div>
    )
}