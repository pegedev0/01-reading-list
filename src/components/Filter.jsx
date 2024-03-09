export default function Filter ({ handleChangeGenre, uniqueGenres }) {

    return (
        <section className="flex flex-col text-center sm:text-start pt-8 sm:pl-8">
            <span>Filtrar por género: </span>
            <select onChange={handleChangeGenre} className="w-44 mt-2 bg-slate-500 rounded-sm select-center mx-auto sm:mx-0">
                <option key='all' defaultChecked>Todas</option>
                {uniqueGenres.map((genre, index) => (
                    <option key={index}>{genre}</option>    
                ))}
            </select>
        </section>
    )
}
