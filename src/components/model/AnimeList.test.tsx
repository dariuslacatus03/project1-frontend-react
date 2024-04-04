import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import AnimeService from '../../service/AnimeService'
import { AnimeProps } from './Anime'
import AnimeList from './AnimeList'

    // Define a function to fetch and return anime list
async function fetchAnimeList(): Promise<AnimeProps[]> {
    try {
        const animeListResponse = await AnimeService.getAnimes();
        return animeListResponse.data; // Assuming animeListResponse contains the anime data
    } catch (error) {
        // Handle error here
        console.error("Error fetching anime list:", error);
        throw error;
    }
}

// Call the function to fetch anime list and assign it to animeList variable

    test("test anime list should have 3 items in the list", async () => {
        const animeList: AnimeProps[] = await fetchAnimeList();
        render( <BrowserRouter><AnimeList stateAnimeList={animeList}
            setShowAddForm={() => vi.fn()}
            setShowRemoveForm={() => vi.fn()}
            setShowUpdateForm={() => vi.fn()}
            setShowChart={() => vi.fn()}
            setSelectedAnime={() => vi.fn()}/></BrowserRouter>)
        expect(screen.queryAllByTestId("list-item").length).toBe(3);
    })

    // test("test sorting anime list", () => {
    //     render( 
    //         <div>
    //             <BrowserRouter>
    //                 <AnimeList 
    //                     stateAnimeList={animeList}
    //                     setShowAddForm={() => vi.fn()}
    //                     setShowRemoveForm={() => vi.fn()}
    //                     setShowUpdateForm={() => vi.fn()}
    //                     setShowChart={() => vi.fn()}
    //                     setSelectedAnime={() => vi.fn()}/>        
    //             </BrowserRouter>
    //             <Buttons 
    //                 handleAddClick={() => vi.fn()}
    //                 handleChartClick={() => vi.fn()}
    //                 handleSortClick={() => vi.fn()} //TODO
    //                 ascending={true}
    //                 />
    //         </div>
    //         )

    //     expect(screen.queryAllByTestId("list-item").length).toBe(3);
    // })