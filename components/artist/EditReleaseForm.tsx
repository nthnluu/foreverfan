import {useRouter} from "next/router";

export default function EditReleaseForm() {
    const router = useRouter();
    return <div className="max-w-sm mx-auto space-y-3">
        <div>
            <label htmlFor="release-name" className="sr-only">
                Release Name
            </label>
            <input
                type="text"
                name="release-name"
                id="release-name"
                className="shadow-sm bg-neutral-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
                placeholder="Release Name"
            />
        </div>
        <div>
            <label htmlFor="release-date" className="sr-only">
                Release Date
            </label>
            <input
                type="date"
                name="release-date"
                id="release-date"
                className="shadow-sm bg-neutral-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
                placeholder="Release Date"
            />
        </div>
        <div>
            <label htmlFor="artist-name" className="sr-only">
                Artist Name
            </label>
            <input
                type="text"
                name="artist-name"
                id="artist-name"
                className="shadow-sm bg-neutral-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
                placeholder="Artist Name"
            />
        </div>
        <div>
            <label htmlFor="upc" className="sr-only">
                UPC
            </label>
            <input
                type="text"
                name="upc"
                id="upc"
                className="shadow-sm bg-neutral-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
                placeholder="UPC"
            />
        </div>
        <div>
            <label htmlFor="album-art" className="sr-only">
                Album Art
            </label>
            <input
                type="text"
                name="album-art"
                id="album-art"
                className="shadow-sm bg-neutral-800 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
                placeholder="Album Art"
            />
        </div>

        <button
            type="button"
            className="w-full items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Continue
        </button>
        <button
            onClick={() => router.back()}
            type="button"
            className="w-full items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Back
        </button>
    </div>
}