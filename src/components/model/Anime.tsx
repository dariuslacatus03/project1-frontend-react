export interface AnimeProps {
    id: number;
    name: string;
    // cover: string;
    nrOfEpisodes: number;
    genre: string;
    description: string;
}

function Anime({name, nrOfEpisodes, genre, description}: AnimeProps) {
    return (
        <div>
            <h2>Name: {name}</h2>
            {/* <img src={cover} width={192} height={256}></img> */}
            <h3>Number of episodes: {nrOfEpisodes}</h3>
            <h3>Genre: {genre}</h3>
            <h3>Short description: {description}</h3>
        </div>
    );
}

export default Anime;