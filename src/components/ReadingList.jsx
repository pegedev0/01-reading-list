import { library } from '../json/books.json'

export default function ReadingList ({ readListBooks, setReadListBooks, setNumberOfBooks }) {

    const handleRemoveBook = (bookId) => {
        const newReadList = readListBooks.filter(book => book.book.ISBN !== bookId);
        setReadListBooks(newReadList);
        setNumberOfBooks(library.length - (readListBooks.length - 1) )
    }

    // cambiar library por los libros que he añadido a la lista
    if (readListBooks.length > 0) {
        return (
            <div className="bg-gray-500 w-full mb-20 md:mb-10 md:w-1/3 md:ml-10 rounded-xl text-center">
                <h4 className="p-5 pt-10 font-semibold justify text-2xl">Lista de lectura</h4>
                <div className="grid grid-cols-2 pt-10">
                    {readListBooks.map((book) => (
                        <div key={book.book.ISBN} className="flex flex-col items-center justify-center pb-10">
                            <img src={book.book.cover} width={150} height={150} alt={book.book.title} className="p-2" />
                                <button onClick={() => handleRemoveBook(book.book.ISBN)} className='rounded-full w-10 p-2 transition ease-in-out delay-150 bg-red-500 hover:scale-110 hover:bg-rose-800 duration-150 '>
                                -
                            </button>   
                        </div>
                    ))}
                </div>
            </div>
        )   
    }
}