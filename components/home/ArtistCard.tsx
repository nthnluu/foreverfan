export default function ArtistCard({name, image}: { name: string; image: string }) {
    return <button style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}
                   className="rounded-xl w-full shadow-lg text-left transition-all duration-200 transform hover:scale-105 hover:shadow-2xl">
        <div className="h-48 lg:h-[28rem]"/>
        <div className="p-6">
            <h1 className="text-lg lg:text-3xl text-white font-bold">
                {name}
            </h1>
        </div>
    </button>
}