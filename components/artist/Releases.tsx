import ReleaseCard from "./ReleaseCard";
import PastReleaseCard from "./PastReleaseCard";
import Link from "next/link";
import useReleases from "../../util/useReleases";

export default function Releases({}: {}) {
    const [releases, loading] = useReleases();

    if (loading) {
        return <div className="text-center p-12">
            Loading...
        </div>
    }

    return <div className="pb-24">
        <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">
                Releases
            </h1>
            <Link href="/artist/new">
                <a className="bg-blue-600 text-white text-md px-8 py-2 shadow-blue-600/50 rounded-lg hover-fade">
                    New Release
                </a>
            </Link>

        </div>
        <div className="space-y-4 my-12">
            <h2 className="text-2xl ">
                Upcoming Releases
            </h2>
            {releases!.filter(r => r.releaseDate >= (new Date())).map(release => <ReleaseCard key={release.id} release={release}/>)}
        </div>
        <div className="space-y-4 mt-12">
            <h2 className="text-2xl ">
                Past Releases
            </h2>
            {releases!.filter(r => r.releaseDate < (new Date())).map(release => <PastReleaseCard key={release.id} release={release}/>)}
        </div>



    </div>
}