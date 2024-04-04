import axios, { AxiosError } from 'axios';
import { AnimeProps } from '../components/model/Anime';

class AnimeService {
    AnimeService(){

    }
    async getAnimes(){
        try {
            const response = await axios.get('http://localhost:8080/shows');
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

    async checkServerHealth(){
        try {
            const response = await axios.get('http://localhost:8080/check-health');
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

    async addAnime(anime : AnimeProps){
        try {
            const response = await axios.post('http://localhost:8080/shows/add', anime);
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

    async deleteAnime(animeId : number){
        try {
            const response = await axios.delete('http://localhost:8080/shows/remove/' + animeId);
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

    async updateAnime(anime : AnimeProps){
        try {
            const response = await axios.put('http://localhost:8080/shows/update/' + anime.id, anime);
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
    async getAnimeById(animeId : number){
        try {
            const response = await axios.get('http://localhost:8080/shows/' + animeId);
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
export default new AnimeService()