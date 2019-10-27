import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js';

// This class will encompass searching functionality

export default class SymptomSearch extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet

        this.state = {
            illnessData: null,
            hasData: false
        }

        this.getIllnesses = this.getIllnesses.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.generateReport = this.generateReport.bind(this);
    }

    fetchData(givenSymptom) {
        fetch('http://localhost:4000/illnesses/get?name='+givenSymptom)
            .then(response => response.json())
            .then(response => this.setState({givenData: response}))
    }

    getIllnesses() {
        return JSON.stringify(this.state.givenData);
    }

    generateReport() {
        /* return(
            <h2>Illness Name: {this.state.diseaseData['illness_name']}</h2>
        ); */
    }

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-6">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Enter some symptoms to find a disease</h4>
                    <SearchBar fetchData={this.fetchData}/>
                    {this.generateReport()}
                </div>
            </div>
        );
    }
}
