export default function Filter ({ handleChangeGenre, uniqueGenres }) {

    return (
        <section className="flex flex-col pt-8 pl-8">
            <span>Filtrar por género: </span>
            <select onChange={handleChangeGenre} className="w-44 mt-2 bg-slate-500 rounded-sm">
                <option key='all' defaultChecked>Todas</option>
                {uniqueGenres.map((genre, index) => (
                    <option key={index}>{genre}</option>    
                ))}
            </select>
        </section>
    )
}
