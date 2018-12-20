import React, {Component} from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    render() {
        const {videos} = this.props;
        const renderedList = videos.map((video) => {
            return <VideoItem video={video} />
        });
        return (
            <div>
            <h3>Videos</h3>
            <div>{renderedList}</div>
            <div>
            </div>
            </div>
        )
    }
}

export default VideoList;