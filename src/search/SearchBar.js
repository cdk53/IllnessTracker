import React from 'react';
import './search.css';

// Incorporates the search functionality

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <form>
                        <input type="text" name="search" placeholder="illness name"></input>
                    </form>
                </div>
            </div>
        );
    }
}
