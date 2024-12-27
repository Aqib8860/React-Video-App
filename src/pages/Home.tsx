import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";
import fetch_all_videos, { Video } from "../utils/api-utils";

export const Home = () => {
    const [allVideos, setVideos] = useState<Video[]>([]);
    
    const fetch_videos = async() => {
        const videos:Video[] = await fetch_all_videos();
        setVideos(videos);
    }

    useEffect(() => {
        fetch_videos();
    }, []);

    return (
        <div>
            <Navbar />
            <Videos videos={allVideos}/>
        </div>
    );
}
