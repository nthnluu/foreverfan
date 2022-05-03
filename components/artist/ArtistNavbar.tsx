export default function ArtistNavbar({pages, currPage, onMenuBarClick}: {pages: string[]; currPage: number; onMenuBarClick: (arg0: number) => void}) {
    const baseStyle = "px-2 py-4 border-b transition-all duration-150 ";
    const activeStyle = "border-neutral-600";
    const inactiveStyle = "border-transparent text-neutral-400 hover:text-white hover:border-neutral-700";

    return <div className="border-b px-4 border-neutral-700 flex items-center space-x-4">
        <img src="https://www.foreverfan.org/static/media/logoCircle.0bb81bdd.svg"
             className="h-10"/>
        {pages.map((page, index) => <button key={page} onClick={() => onMenuBarClick(index)}
                                            className={baseStyle + ((currPage === index) ? activeStyle : inactiveStyle)}>
            {page}
        </button>)}
    </div>
}