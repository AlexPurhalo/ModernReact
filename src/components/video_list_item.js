import React from 'react';

// if parameter of VideListItem function would be "props" instead of "video" we will use props.video to get element
const VideoListItem = ({video}) => { // here will current element from videos array
    // console.log(video); // will each video object on page
    // all this properties we can find in file following getting info from certain video object
    const imageUrl = video.snippet.thumbnails.default.url; //snippet is object container that contains other container
    const title = video.snippet.title; // here title is one of the properties from snippet object located in video obj.
    
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    )
};
export default VideoListItem;