import { useState, useEffect } from "react";
import {Release} from "./types";

const useReleases = (): [Release[] | undefined, boolean] => {
    const [data, setData] = useState<Release[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setHours(tomorrow.getHours() + 24);

        const yesterday = new Date();
        yesterday.setHours(yesterday.getHours() - 24);

        // do data fetching here...
        setTimeout(() => {
            setData([{
                id: "000-0000-00000",
                releaseDate: tomorrow,
                title: "Hi",
                albumArt: "/sample.png",
                upc: "12345-asdf"
            }, {
                id: "111-1111-yesterday",
                releaseDate: yesterday,
                title: "Prior Release",
                albumArt: "/sample.png",
                upc: "1234544-44442"
            }]);
            setLoading(false);
        }, 1000);
    }, []);

    return [data, loading];
};

export default useReleases;