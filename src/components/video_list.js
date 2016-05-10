import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // firstly we add array 'props.videos'
    // then we iterate throw every element of array via 'map()' method ... Ruby this: each { ... }
    // net we pass function into map method with 'video' parameter that plays role as each element in array ..
    // something like that: props.array.map(function(item) { return item }); ... Ruby this: array.each { |item| item }
    // so if we have videos array with three objects, example: var array = [1, 2, 3]
    // after getting a array.map(function(item){ return item * 3 }) method we will get following stuff: [3, 6, 9]
    const videoItems = props.videos.map((video) => {
        // here we pass every 'video' object from 'videos' array to 'video' instance
        return <VideoListItem video={video} />; 
    });

    return (
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    )
};

export default VideoList;