import React, { Component } from 'react'; // we need React because <input /> still is React.createElement
// { Component } is like const Component = React.component

class SearchBar extends Component {
    // if we would pass thus.onInputChange to expression
    // onInputChange(event) {
    //     // event is something what passes when we represent some behavior for example: clicking on button
    //     console.log(event.target.value)
    // }
    render() {
        // instead of 'this.onInputChange we gonna use ever = console.log(event.targer.value)
        return <input onChange={event => console.log(event.target.value)}/>; // onChange sets as property
    }
}
// '... extends React.Component ...'  allow to get all properties that React has
// render is a function

export default SearchBar; // To make valid a component in other files