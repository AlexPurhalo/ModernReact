import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Functional Base Component 
const MainBox = () => {
    return <div>
        <SearchBar />
    </div>
};
// https://console.developers.google.com/apis
const API_KEY = 'AIzaSyCk7TOyegJEKqMMrUjII3fNjDNTcja5sxY';
// npm install --save youtube-api-search
ReactDOM.render(<MainBox />, document.querySelector('.container'));
