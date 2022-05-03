import type { NextPage } from 'next'
import ArtistNavbar from "../../components/artist/ArtistNavbar";
import {useState} from "react";
import Releases from "../../components/artist/Releases";
import Appearance from "../../components/artist/Appearance";
import Insights from "../../components/artist/Insights";
import Settings from "../../components/artist/Settings";

const pages = ["Releases", "Settings"];

const Admin: NextPage = () => {
    const [currPage, setCurrPage] = useState(0)
    return (
        <div>
            <div className="fixed top-0 w-full bg-neutral-900">
                <ArtistNavbar pages={pages} currPage={currPage} onMenuBarClick={newPage => setCurrPage(newPage)}/>
            </div>


            <div className="max-w-5xl mx-auto mt-12 pt-14 px-4">
                {currPage === 0 && <Releases/>}
                {/*{currPage === 1 && <Appearance/>}*/}
                {/*{currPage === 2 && <Insights/>}*/}
                {currPage === 1 && <Settings/>}
            </div>

        </div>
    )
}

export default Admin;
