// STATE
import React, { Component } from 'react';

class SearchBar extends Component {
    // Before use state we should initialize a state
    // because of constructor is just a word we need add an inheritance from main class via super keyword.
    constructor(props) {
        super(props); // to call a current method of a current class. Here we call a parent method 

        this.state = { term: '' }; // here we give 'term' property default value. Here this is empty string ('').
    }
    render() {
        return (
            // this.setState sets a new value to 'term' property, value from 'event.target'
            // 'this.state.term' shows actual value of 'term' property
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value from the input: {this.state.term}
            </div>
        );
        // ths.setState sets a new value of 'term' property
    }
}
export default SearchBar;