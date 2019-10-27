import React from 'react';
import './search.css';

// Incorporates the search functionality

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }

        // Function bindings
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }
    handleChange(e) {
        this.setState({input: e.target.value});
    }

    _handleKeyDown(e) {
        if(e.key === 'Enter') {
            this.handleChange(e);
            this.handleSubmit();
        }
    }

    handleSubmit() {
        this.props.fetchData(this.state.input);
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 search_bar">
                    <input type="text" name="search" placeholder={this.props.defaultText}
                        onChange={this.handleChange} onKeyDown={this._handleKeyDown}></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}
