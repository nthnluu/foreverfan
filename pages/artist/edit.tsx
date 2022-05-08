import type { NextPage } from 'next'
import NewReleaseForm from "../../components/artist/NewReleaseForm";

// New is a page that allows artists to schedule new releases
const Edit: NextPage = () => {
    return (
        <div>
            <div className="text-center space-y-8 mt-16">
                <h1 className="text-4xl">Edit Release</h1>
                <NewReleaseForm/>
            </div>
        </div>

    )
}

export default Edit;
