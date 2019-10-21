import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js'

// This class will encompass searching functionality

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-6">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Enter the name of an illness to learn more about it</h4>
                    <SearchBar />
                </div>
            </div>
        );
    }
}
