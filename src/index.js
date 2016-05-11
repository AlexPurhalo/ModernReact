// Basic Document Configuration
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import of Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// Additional Configurations
import YTSearch from 'youtube-api-search'; // npm install --save youtube-api-search
const API_KEY = 'AIzaSyCk7TOyegJEKqMMrUjII3fNjDNTcja5sxY'; // https://console.developers.google.com/apis



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null // will run: "<div>loading...</div>" while time when we still haven't gotten any data
        };

        YTSearch({ key: API_KEY, term: 'bodybuilding'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] //after getting a data automatically shows a first video from array
            });
        });
    }

    render(){
        return(
            // 'onVideoSelect' function will pass a callback from the App to Video list
            // and from the VideoList to the VideoItem
            // "selectedVideo => " is parameter (same as event from SearchBar)
            // "function(selectedVideo) { this.setState({ selectedVideo: selectedVideo  }) };
            // means that selectedVideo now equal to parameter from callback
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
