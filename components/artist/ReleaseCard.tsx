import {Release} from "../../util/types";
import {useRouter} from "next/router";

export default function ReleaseCard({release}: {release: Release}) {
    const router = useRouter();

    return <button onClick={() => router.push("/artist/edit?id=" + release.id)} className="w-full text-left border border-neutral-600 rounded-lg p-4 flex items-center justify-between ">
        <div>
            <p className="text-xl md:text-3xl font-semibold">
                {release.title}
            </p>
            <p className="md:text-lg text-neutral-300">
                Will release on: September 11, 2001
            </p>
        </div>
        <img className="h-32 w-32" src={release.albumArt}/>
    </button>
}