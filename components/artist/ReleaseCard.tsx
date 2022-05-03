import {Release} from "../../util/types";

export default function ReleaseCard({release}: {release: Release}) {
    return <div className="border border-neutral-600 rounded-lg p-4 flex items-center justify-between">
        <div>
            <p className="text-xl md:text-3xl font-semibold">
                {release.title}
            </p>
            <p className="md:text-lg text-neutral-300">
                Will release on: September 11, 2001
            </p>
        </div>
        <img className="h-32 w-32" src={release.albumArt}/>
    </div>
}