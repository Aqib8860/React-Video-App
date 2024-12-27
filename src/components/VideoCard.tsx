import { Video } from "../utils/api-utils";

const VideoCard = ({video}: {video:Video}) => {
    // const video_url = fetch_video_url(video.videoId);
    const video_url = `https://www.youtube.com/embed/${video.videoId}`;
    
    return (
        <div className="card" style={{width: '90rem'}}>
            {/* <img className="card-img-top" src={video.thumbnail} alt="Card image cap" /> */}
            <iframe height='500rem' width='100%' src={video_url} ></iframe>
            
            <div className="card-body">
                <h5 className="card-title"></h5>
            </div>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Title : {video.title}</li>
                <li className="list-group-item"></li>
            </ul>
            
            <div className="card-body">
                <p>Decription : {video.description}</p>
            </div>

        </div>
    );
}

export default VideoCard;
