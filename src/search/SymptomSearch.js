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
        <div className="report col-5 ml-1 mr-1 mb-2">
            <p className="illness_name" key={illness_name}><b>Name:</b> {illness_name}</p>
            <p className="symptom_title">Symptoms Include:</p>
            {symptom1 !== null && <li className="symptom_list" key={symptom1}>{symptom1}</li>}
            {symptom2 !== null && <li className="symptom_list" key={symptom2}>{symptom2}</li>}
            {symptom3 !== null && <li className="symptom_list" key={symptom3}>{symptom3}</li>}
            {symptom4 !== null && <li className="symptom_list" key={symptom4}>{symptom4}</li>}
            {symptom5 !== null && <li className="symptom_list" key={symptom5}>{symptom5}</li>}
            {symptom6 !== null && <li className="symptom_list" key={symptom6}>{symptom6}</li>}
            {symptom7 !== null && <li className="symptom_list" key={symptom7}>{symptom7}</li>}
            {symptom8 !== null && <li className="symptom_list" key={symptom8}>{symptom8}</li>}
            {symptom9 !== null && <li className="symptom_list" key={symptom9}>{symptom9}</li>}
            {symptom10 !== null && <li className="symptom_list" key={symptom10}>{symptom10}</li>}
        </div>)

    render() {
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Search for an illness by symptoms</h4>
                    <SearchBar fetchData={this.fetchData} defaultText="Symptom"/>
                    <div className="row justify-content-center">
                        {this.state.hasData && this.state.illnessData.map(this.renderProduct)}
                    </div>
                </div>
            </div>
        );
    }
}
