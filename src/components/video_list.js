import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // here we pass "props" as argument that has special role as inherited element
    // const videos = props.videos; // this will be an array of videos
    // videos is just variable from from other object
    return (
        <ul className="col-md-4 list-group">
            <VideoListItem />
            { props.videos.length }
        </ul>
    )
};

export default VideoList;