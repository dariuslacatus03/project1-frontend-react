import axios, { AxiosError } from "axios";

class AuthenticationService {
    AuthenticationService(){

    }

    async login(username : String, password : String){
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Axios error
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    // Server responded with a status code outside of 2xx
                    throw axiosError.response.data;
                } else if (axiosError.request) {
                    // Request was made but no response was received
                    throw 'No response received from server';
                } else {
                    // Something went wrong while setting up the request
                    throw 'Error setting up the request';
                }
            } else {
                throw error;
            }
            
        }
    }

    async register(username : String, password : String){
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                password
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Axios error
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    // Server responded with a status code outside of 2xx
                    throw axiosError.response.data;
                } else if (axiosError.request) {
                    // Request was made but no response was received
                    throw 'No response received from server';
                } else {
                    // Something went wrong while setting up the request
                    throw 'Error setting up the request';
                }
            } else {
                throw error;
            }
            
        }
    }

}

export default new AuthenticationService()