import { Video } from "../utils/api-utils";
import VideoCard from "./VideoCard";

const Videos = ({videos}:{videos:Video[]}) => {
    return (
        <div className='container d-flex justify-content-around flex-wrap gap-2'>
            {
                videos.map((video) => (<VideoCard key={video.videoId} video={video} />))
            }
        </div>
    );
}

export default Videos;