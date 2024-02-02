import GitHubIcon from "../components/icons/GithubIcon"

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full py-2 mt-auto">
            <div className="border-t-2 border-neutral-300 w-full">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <span className="flex justify-center items-center mt-3 font-semibold text-white opacity-90">© 2024 -<a href="https://github.com/pegedev0" rel="noreferrer" target="_blank" className="ml-1">pegedev0</a></span>
                    <a href="https://github.com/pegedev0" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                </div>
            </div>
        </footer>
    )
}