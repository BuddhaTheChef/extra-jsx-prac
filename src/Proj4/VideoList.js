import React, {Component} from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    render() {
        const {videos, onVideoSelect} = this.props;
        const renderedList = videos.map((video) => {
            return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
        });
        return (
            <div>
            <div className="ui relaxed divided list" style={{background:'white', borderRadius: '5px'}}>{renderedList}</div>
            </div>
        )
    }
}

export default VideoList;