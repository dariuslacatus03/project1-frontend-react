import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import { animeList } from '../../App'
import AnimeList from './AnimeList'

    test("test anime list should have 3 items in the list", () => {
        render( <BrowserRouter><AnimeList stateAnimeList={animeList}
            setShowAddForm={() => vi.fn()}
            setShowRemoveForm={() => vi.fn()}
            setShowUpdateForm={() => vi.fn()}
            setShowChart={() => vi.fn()}
            setSelectedAnime={() => vi.fn()}/></BrowserRouter>)
        expect(screen.queryAllByTestId("list-item").length).toBe(3);
    })
