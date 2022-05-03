// @ts-ignore
import Fade from 'react-reveal/Fade';

export default function HeroCard() {
    return <div className="h-full relative shadow-2xl shadow-neutral-800/50 sm:rounded-2xl sm:overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
            <video muted loop autoPlay className="h-full w-full object-cover">
                <source src="/placeholder.mp4"
                        type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-purple-700 opacity-70 mix-blend-multiply " />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 xl:py-56 lg:px-8">
            <Fade bottom>
                <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                    <span className="block text-white">Fans for life</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-3xl text-indigo-100 sm:max-w-4xl">
                    Recurring pre-saves for musicians. When your fans use your link, they&apos;re on your team for life.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-lg font-medium rounded-xl shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border-2 border-transparent text-lg font-medium rounded-xl shadow-sm text-white border-white border-2 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                        >
                            Live demo
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    </div>
}