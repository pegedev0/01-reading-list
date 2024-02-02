import { useState } from "react";
import { library } from '../json/books.json'

export function useFilters () {

    const [ filteredBooks, setFilteredBooks ] = useState(library)  

    const handleChangeGenre = (evt) => {
        const genre = evt.target.value
        genre === 'Todas' ? setFilteredBooks(library) : setFilteredBooks(library.filter(book => book.book.genre === genre))
    }

    const genreSet = new Set(library.map((book) => book.book.genre));
    const uniqueGenres = [...genreSet];

    return {handleChangeGenre, filteredBooks, uniqueGenres}
}