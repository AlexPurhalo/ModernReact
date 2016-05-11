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

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'bodybuilding'}, (videos) => {
            this.setState({ videos });
        });
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
