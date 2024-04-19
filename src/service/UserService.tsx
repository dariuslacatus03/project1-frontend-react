import axios, { AxiosError } from "axios";
import { UserProps } from "../components/model/User";

class UserService {
    UserService(){

    }
    async getUsers(){
        try {
            const response = await axios.get('http://localhost:8080/shows/all-users');
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


    async addUser(user : UserProps){
        try {
            const response = await axios.post('http://localhost:8080/shows/adduser', user);
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

    async deleteUser(userId : number){
        try {
            const response = await axios.delete('http://localhost:8080/shows/remove-user/' + userId);
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

    async updateAnime(user : UserProps){
        try {
            const response = await axios.put('http://localhost:8080/shows/update-user/' + user.id, user);
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
    async getAnimeById(userId : number){
        try {
            const response = await axios.get('http://localhost:8080/shows/user/' + userId);
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

    async getUserByUsername(userName : string) {
        try{
            const response = await axios.post('http://localhost:8080/username', userName);
            return response.data;
        }
        catch (error) {
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

export default new UserService()