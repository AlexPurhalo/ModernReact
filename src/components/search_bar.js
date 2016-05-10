import React, { Component } from 'react'; // we need React because <input /> still is React.createElement
// { Component } is like const Component = React.component

class SearchBar extends Component {
    render() {
        return <input />;
    }
}
// '... extends React.Component ...'  allow to get all properties that React has
// render is a function

export default SearchBar; // To make valid a component in other files