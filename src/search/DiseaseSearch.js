import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js'

// This class will encompass searching functionality

export default class DiseaseSearch extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet
        this.state = {
            givenData: null
        }

        this.getIllnesses = this.getIllnesses.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(givenSymptom) {
        fetch('http://localhost:4000/illnesses/get?name='+givenSymptom)
            .then(response => response.json())
            .then(response => this.setState({givenData: response}))
    }

    getIllnesses() {
        return JSON.stringify(this.state.givenData);
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-6">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Enter the name of an illness to learn more about it</h4>
                    <SearchBar fetchData={this.fetchData}/>
                    <p>{this.getIllnesses()}</p>
                </div>
            </div>
        );
    }
}
