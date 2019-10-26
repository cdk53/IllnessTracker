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
    }
    handleChange(e) {
        this.setState({input: e.target.value});
    }

    handleSubmit() {
        this.props.fetchData(this.state.input);
    }

    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <form>
                        <input type="text" name="search" placeholder="illness name" onChange={this.handleChange}></input>
                    </form>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}
