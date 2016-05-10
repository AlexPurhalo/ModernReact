// Document Configuration
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCk7TOyegJEKqMMrUjII3fNjDNTcja5sxY';

// Import of Components
import SearchBar from './components/search_bar';


// here we can see configurations and callback function
YTSearch({ key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});
// Functional Base Component
const App = () => {
    return <div>
        <SearchBar />
    </div>
};
// https://console.developers.google.com/apis
// npm install --save youtube-api-search
ReactDOM.render(<App />, document.querySelector('.container'));
