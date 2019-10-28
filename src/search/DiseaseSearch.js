import React from 'react';
import './search.css';
import SearchBar from './SearchBar.js';

// This class will encompass searching functionality by illness name

export default class DiseaseSearch extends React.Component {
    constructor(props) {
        super(props);
        // Note there aren't any props being used yet
        this.state = {
            illnessData: [],
            hasData: false
        };

        this.fetchData = this.fetchData.bind(this);
        this.generateReport = this.generateReport.bind(this);
    }

    fetchData(givenName) {
        fetch('http://localhost:4000/illnesses/getIllnessByName?name='+givenName)
            .then(response => response.json())
            .then(response => this.setState({illnessData: response}));

        // Data has been fetched
        this.setState({hasData: true});
    }

    generateReport() {
        if(this.state.hasData && typeof this.state.illnessData[0] !== 'undefined') {
            return this.state.illnessData[0].map(this.renderProduct);
        }
    }

    renderProduct = ({illness_name, symptom1, symptom2, symptom3, symptom4, symptom5, symptom6, symptom7, symptom8, symptom9, symptom10, treatment1, treatment2, treatment3, treatment4, treatment5, treatment6, treatment7, treatment8, treatment9, treatment10}) => (
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
            <br/>{treatment1 !== null && <p className="symptom_title">Available Treatments:</p>}
            {treatment1 !== null && <li className="symptom_list" key={treatment1}>{treatment1}</li>}
            {treatment2 !== null && <li className="symptom_list" key={treatment2}>{treatment2}</li>}
            {treatment3 !== null && <li className="symptom_list" key={treatment3}>{treatment3}</li>}
            {treatment4 !== null && <li className="symptom_list" key={treatment4}>{treatment4}</li>}
            {treatment5 !== null && <li className="symptom_list" key={treatment5}>{treatment5}</li>}
            {treatment6 !== null && <li className="symptom_list" key={treatment6}>{treatment6}</li>}
            {treatment7 !== null && <li className="symptom_list" key={treatment7}>{treatment7}</li>}
            {treatment8 !== null && <li className="symptom_list" key={treatment8}>{treatment8}</li>}
            {treatment9 !== null && <li className="symptom_list" key={treatment9}>{treatment9}</li>}
            {treatment10 !== null && <li className="symptom_list" key={treatment10}>{treatment10}</li>}
        </div>);

    render() {
        console.log(this.state.illnessData);
        return(
            <div className="row justify-content-center diseaseSearchContainer">
                <div className="col-10">
                    <h2>Welcome to the Illness Tracker</h2>
                    <h4>Enter the name of an illness to learn more about it</h4>
                    <SearchBar fetchData={this.fetchData} defaultText="Illness Name"/>
                    <div className="row justify-content-center">
                        {this.generateReport()}
                    </div>
                </div>
            </div>
        );
    }
}
