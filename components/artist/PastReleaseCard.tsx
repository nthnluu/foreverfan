import {Release} from "../../util/types";

export default function PastReleaseCard({release}: {release: Release}) {
    return <div className="border border-neutral-600 rounded-lg p-4 flex items-center justify-between">
        <div>
            <p className="text-xl font-semibold">
                {release.title}
            </p>
            <p className="text-neutral-300">
                Released on September 11, 2001
            </p>
        </div>
    </div>
}