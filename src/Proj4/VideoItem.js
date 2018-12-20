import React from 'react';
import './Proj4.css'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} style={{margin: '3px 6px'}} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;