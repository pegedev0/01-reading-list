import { useState } from 'react';
import { library } from '../json/books.json'
import ReadingList from '../components/ReadingList'
import Filter from '../components/Filter'
import { useFilters } from '../hooks/useFilters';
import Footer from './Footer';

export default function Library({ setNumberOfBooks }) {
    const [ readListBooks, setReadListBooks ] = useState([]);
    const { handleChangeGenre, filteredBooks, uniqueGenres } = useFilters()

    const buttonStyles = {
        notAdded: "mt-2 rounded-full w-10 p-2 transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-150",
        added: "mt-2 rounded-full w-10 p-2 transition ease-in-out delay-150 bg-green-500 hover:scale-110 hover:bg-green-600 duration-150"
    }

    const handleAddBook = (bookId) => {
        const newBook = library.find((book) => book.book.ISBN === bookId);
        if (!(readListBooks.some((book) => book.book.ISBN === bookId))) {
            setReadListBooks((prevReadList) => [...prevReadList, newBook]);
            setNumberOfBooks((prevNumberOfBooks) => prevNumberOfBooks - 1);
        }
    }

    return (
        <div>
            <Filter handleChangeGenre={handleChangeGenre} uniqueGenres={uniqueGenres} />
            <section className="md:flex">
                <div className="grid grid-cols-3 md:grid-cols-4 pt-10 md:w-2/3">
                    {filteredBooks.map((book) => (
                        <div key={book.book.ISBN} className="flex flex-col items-center justify-center pb-10">
                            <img src={book.book.cover} width={150} height={150} alt={book.book.title} />
                            <button 
                                onClick={() => handleAddBook(book.book.ISBN)} 
                                className={readListBooks.includes(book) ? buttonStyles.added : buttonStyles.notAdded}
                            >
                                {readListBooks.includes(book) ? "✔" : "+"}
                            </button>
                        </div>
                    ))}
                </div>
                <ReadingList readListBooks={readListBooks} setReadListBooks={setReadListBooks} setNumberOfBooks={setNumberOfBooks} />
            </section>
            <Footer />
        </div>
    )
}
