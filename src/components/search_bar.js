import React, { Component } from 'react';

// Class Base Component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // value can be anything, for example:
        this.state = { term: '' };
        // this.state = { term: 'some text' };
        // this.state = { term: true };
        // this.state = { term: 666 };
    }
    render() {
        return (
            // input now is 'control component'
            <div>
                <input
                    onChange={event => this.setState({ term: event.target.value })}
                    value={this.state.term} />
            </div>
        );
    }
}
export default SearchBar;