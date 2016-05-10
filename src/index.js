// Basic Document Configuration
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import of Components
import SearchBar from './components/search_bar';

// Additional Configurations
import YTSearch from 'youtube-api-search'; // npm install --save youtube-api-search
const API_KEY = 'AIzaSyCk7TOyegJEKqMMrUjII3fNjDNTcja5sxY'; // https://console.developers.google.com/apis



class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] }; // an empty array as value

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            // below our empty array is filling by objects from "videos" parameter. Example: videos: [ {...}, {...} ... ]
            this.setState({ videos }); // same as: "videos: videos", this is just refactoring

        });
    }
    render(){
        return(
            <div>
                <SearchBar />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));
