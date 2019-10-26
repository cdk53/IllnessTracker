import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js';

// This class will encompass searching functionality

export default class SymptomSearch extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet

        this.state = {
            givenData: null
        }

        this.getIllnesses = this.getIllnesses.bind(this);
    }

    fetchData() {
        if(this.state.givenData === null) {
            fetch('http://localhost:4000/illnesses')
                .then(response => response.json())
                .then(response => this.setState({givenData: response}))
        }
    }

    getIllnesses() {
        return JSON.stringify(this.state.givenData);
    }

    render() {
        this.fetchData();
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-6">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Enter some symptoms to find a disease</h4>
                    <SearchBar/>
                    <p>{this.getIllnesses()}</p>
                </div>
            </div>
        );
    }
}
