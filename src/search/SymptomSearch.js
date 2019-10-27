import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js';

// This class will encompass searching functionality by symptom

export default class SymptomSearch extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet
        this.state = {
            illnessData: [],
            hasData: false
        }

        this.fetchData = this.fetchData.bind(this);
        this.generateReport = this.generateReport.bind(this);
    }

    fetchData(givenSymptom) {
        fetch('http://localhost:4000/illnesses/get?name='+givenSymptom)
            .then(response => response.json())
            .then(response => this.setState({illnessData: response}))
        // Since we have retrieved data, set hasData to true
        this.setState({hasData: true});
    }

    generateReport() {
        console.log(this.state.illnessData);
    }

    renderProduct = ({illness_name, symptom1, symptom2, symptom3, symptom4, symptom5, symptom6, symptom7, symptom8, symptom9, symptom10}) => (
        <div className="report">
            <li key={illness_name}>Name: {illness_name}</li>
            {symptom1 !== null && <li key={symptom1}>Symptom1: {symptom1}</li>}
            {symptom2 !== null && <li key={symptom2}>Symptom2: {symptom2}</li>}
            {symptom3 !== null && <li key={symptom3}>Symptom3: {symptom3}</li>}
            {symptom4 !== null && <li key={symptom4}>Symptom4: {symptom4}</li>}
            {symptom5 !== null && <li key={symptom5}>Symptom5: {symptom5}</li>}
            {symptom6 !== null && <li key={symptom6}>Symptom6: {symptom6}</li>}
            {symptom7 !== null && <li key={symptom7}>Symptom7: {symptom7}</li>}
            {symptom8 !== null && <li key={symptom8}>Symptom8: {symptom8}</li>}
            {symptom9 !== null && <li key={symptom9}>Symptom9: {symptom9}</li>}
            {symptom10 !== null && <li key={symptom10}>Symptom10: {symptom10}</li>}
        </div>)

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-6">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Search for an illness by smyptoms</h4>
                    <SearchBar fetchData={this.fetchData} defaultText="Enter Symptom"/>
                    {this.state.hasData && this.state.illnessData.map(this.renderProduct)}
                </div>
            </div>
        );
    }
}
