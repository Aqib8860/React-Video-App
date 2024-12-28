import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import fetch_all_videos, { Video } from "../utils/api-utils";

export const Home = () => {
    const [allVideos, setVideos] = useState<Video[]>([]);
    const [searchValue, setSearchValue] = useState<string>("Python+Programming");
    
    const fetch_videos = async(search:string) => {
        const videos:Video[] = await fetch_all_videos(search);
        setVideos(videos);
        
    }

    useEffect(() => {
        fetch_videos(searchValue);
    }, [searchValue]);

    return (
        <div>
            <Navbar setSearchValue={setSearchValue}/>
            <Videos videos={allVideos}/>
        </div>
    );
}
