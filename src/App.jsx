import { useState } from 'react';
import { library } from '../src/json/books.json'
import Library from '../src/components/Library'

function App() {

	const [ numberOfBooks, setNumberOfBooks ] = useState(library.length);

	return (
		<main className="flex flex-col gap-20 py-10 px-10 sm:px-20">	

			<h1 className="text-2xl sm:text-4xl font-bold tracking-tight flex justify-center items-center">
				📘 Lista de lectura 📘
			</h1>
			
			<section>
				<h2 className="text-3xl font-semibold flex justify-center items-center sm:justify-start sm:align-start sm:pl-8">{numberOfBooks} libros disponibles</h2>
				<Library setNumberOfBooks={setNumberOfBooks} />
			</section>

		</main>
	)
}

export default App
