import React from 'react';
import './Proj4.css'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" alt='youtube vid' src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;